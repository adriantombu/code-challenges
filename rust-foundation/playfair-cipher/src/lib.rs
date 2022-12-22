// TODO: remove unwraps
use std::collections::HashSet;

/// Implementation of the Playfair cipher
/// More info here : https://en.wikipedia.org/wiki/Playfair_cipher
pub struct Playfair {
    key: String,
    options: Options,
}

#[allow(dead_code)]
impl Playfair {
    pub fn new(key: &str, options: Options) -> Self {
        let key = key.to_string().to_lowercase();
        let mut letters = options.alphabet.clone();

        // Remove whitespace and duplicates from the key & alphabet
        let mut cipher = vec![];
        for c in key.chars() {
            if char::is_whitespace(c) {
                continue;
            }

            if !cipher.contains(&c) {
                cipher.push(c);
                // Remove from alphabet
                letters = letters.replace(c, "");
            }
        }

        // Construct the matrix from the deduplicated key & remaining alphabet
        cipher.append(&mut letters.chars().collect::<Vec<_>>());

        Playfair {
            key: String::from_iter(cipher).to_uppercase(),
            options,
        }
    }

    pub fn cipher(&self, message: &str) -> String {
        let normalized_input = self.sanitize_message(message);
        let chars = normalized_input.chars().collect::<Vec<_>>();
        let cipher_chars = self.key.chars().collect::<Vec<_>>();

        let mut ciphered = vec![];
        for chunk in chars.chunks(2) {
            let first_indice = &self
                .key
                .chars()
                .position(|c| &c == chunk.first().unwrap())
                .unwrap();
            let last_indice = &self
                .key
                .chars()
                .position(|c| &c == chunk.last().unwrap())
                .unwrap();

            let mut new_first = 0;
            let mut new_last = 0;
            if self.is_in_row(first_indice, last_indice) {
                new_first = first_indice + 1;
                if new_first / 5 != first_indice / 5 {
                    new_first -= 5;
                }

                new_last = last_indice + 1;
                if new_last / 5 != last_indice / 5 {
                    new_last -= 5;
                }
            } else if self.is_in_column(first_indice, last_indice) {
                new_first = first_indice + 5;
                if new_first > 24 {
                    new_first -= 25;
                }

                new_last = last_indice + 5;
                if new_last > 24 {
                    new_last -= 25;
                }
            } else if self.is_in_rectangle(first_indice, last_indice) {
                // Stay in the same row but switch the positions in row between the two values
                new_first = last_indice % 5 + (first_indice / 5 * 5);
                new_last = first_indice % 5 + (last_indice / 5 * 5);
            }

            let result = format!(
                "{}{}",
                cipher_chars.get(new_first).unwrap(),
                cipher_chars.get(new_last).unwrap()
            );

            ciphered.push(result);
        }

        ciphered.join(" ")
    }

    pub fn decipher(&self, message: &str) -> String {
        message.to_string()
    }

    fn sanitize_message(&self, message: &str) -> String {
        // Remove punctuation, number and whitespaces
        let chars = message
            .chars()
            .filter(|c| char::is_alphabetic(*c))
            .collect::<String>()
            .to_uppercase()
            .chars()
            .collect::<Vec<_>>();

        let mut normalized_input = vec![];
        for digram in chars.chunks(2) {
            let first = digram.first().unwrap();
            let last = digram.get(1).unwrap_or(&' ');

            normalized_input.push(first);
            // Add the filler char if both characters are the same
            if first == last {
                normalized_input.push(&self.options.filler)
            }

            if !last.is_whitespace() {
                normalized_input.push(last);
            }
        }

        let mut normalized_input = String::from_iter(normalized_input);

        // Add an extra filler (see Options.filler) to make the length even
        if normalized_input.len() % 2 != 0 {
            normalized_input.push(self.options.filler);
        }

        normalized_input
    }

    fn is_in_row(&self, first: &usize, last: &usize) -> bool {
        first / 5 == last / 5
    }

    fn is_in_column(&self, first: &usize, last: &usize) -> bool {
        first % 5 == last % 5
    }

    fn is_in_rectangle(&self, first: &usize, last: &usize) -> bool {
        !self.is_in_row(first, last) && !self.is_in_column(first, last)
    }
}

pub struct Options {
    alphabet: String,
    filler: char,
}

impl Options {
    pub fn set_filler(&mut self, filler: char) {
        self.filler = filler;
    }

    pub fn set_alphabet(&mut self, alphabet: &str) -> Result<(), String> {
        let letters = alphabet.chars().collect::<HashSet<_>>();

        if letters.len() != 25 {
            return Err(format!(
                "Alphabet must be composed of 25 different letters, {} provided for {:?}",
                letters.len(),
                letters
            ));
        }

        self.alphabet = alphabet.to_string();

        Ok(())
    }
}

impl Default for Options {
    fn default() -> Self {
        // We omit the letter 'j' to have an alphabet of 25 signs (the cipher uses a 5x5 table)
        Options {
            alphabet: "abcdefghiklmnopqrstuvwxyz".to_string(),
            filler: 'X',
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_options_set_filler() {
        let mut options = Options::default();
        assert_eq!(options.filler, 'X');

        options.set_filler('Q');
        assert_eq!(options.filler, 'Q');
    }

    #[test]
    fn test_options_set_alphabet() {
        let mut options = Options::default();
        assert_eq!(options.alphabet, "abcdefghiklmnopqrstuvwxyz");

        options
            .set_alphabet("abcdefghijklmnopqrstuvxyz")
            .expect("could not set alphabet");
        assert_eq!(options.alphabet, "abcdefghijklmnopqrstuvxyz");
    }

    #[test]
    fn test_options_set_alphabet_error() {
        let mut options = Options::default();
        assert_eq!(options.alphabet, "abcdefghiklmnopqrstuvwxyz");

        let result = options.set_alphabet("abcdefghijklmnopqrstuvwxyz");
        assert!(result.is_err());
    }

    #[test]
    fn test_new() {
        let pf = Playfair::new("playfair example", Options::default());

        assert_eq!(pf.key, "PLAYFIREXMBCDGHKNOQSTUVWZ");
    }

    #[test]
    fn test_sanitize_message() {
        let pf = Playfair::new("playfair example", Options::default());

        assert_eq!(
            pf.sanitize_message("Hide the gold in the tree stump"),
            "HIDETHEGOLDINTHETREXESTUMP"
        );
        assert_eq!(
            pf.sanitize_message("Cache l'or dans la souche de l'arbre"),
            "CACHELORDANSLASOUCHEDELARBRE"
        );
        assert_eq!(pf.sanitize_message("Hello"), "HELXLO");
        assert_eq!(pf.sanitize_message("Hey!"), "HEYX");
        assert_eq!(pf.sanitize_message("letter"), "LETXTERX");
    }

    #[test]
    // Test from https://en.wikipedia.org/wiki/Playfair_cipher
    fn test_cipher_english() {
        assert_eq!(
            Playfair::new("playfair example", Options::default())
                .cipher("hide the gold in the tree stump"),
            "BM OD ZB XD NA BE KU DM UI XM MO UV IF"
        );
    }

    #[test]
    // Test from https://fr.wikipedia.org/wiki/Chiffre_de_Playfair
    fn test_cipher_french() {
        let mut options = Options::default();
        options
            .set_alphabet("abcdefghijklmnopqrstuvxyz")
            .expect("could not set alphabet");

        assert_eq!(
            Playfair::new("exemple playfair", options)
                .cipher("Cache l'or dans la souche de l'arbre"),
            "BY DB XE QI BF JU ER VJ TD BL BM ER AH AL"
        );
    }

    #[test]
    // Test from https://it.wikipedia.org/wiki/Cifrario_Playfair
    fn test_cipher_italian() {
        assert_eq!(
            Playfair::new("esempio playfair", Options::default())
                .cipher("Le truppe sbarcheranno a Bari"),
            "OS HG XE IS LK OC RN OH CW HA LC OC PZ"
        );
    }

    #[test]
    // Test from https://nl.wikipedia.org/wiki/Playfaircijfer
    fn test_cipher_nederlands() {
        assert_eq!(
            Playfair::new("stalingrad", Options::default())
                .cipher("Dit is een zeerge heimbericht."),
            "BL AS TC CG WK FG EO KF SU GK BA EK AW"
        );
    }

    #[test]
    // Test from https://planetcalc.com/7751/
    fn test_cipher_planetcalc() {
        assert_eq!(
            Playfair::new("Gravity Falls", Options::default()).cipher("Attack at dawn"),
            "GF FG BM GF NF AW"
        );
    }
}
