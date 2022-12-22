// TODO: remove
// TODO: remove unwraps
#![allow(dead_code)]

/// Implementation of the Playfair cipher
/// More info here : https://en.wikipedia.org/wiki/Playfair_cipher
pub struct Playfair(String);

#[allow(dead_code)]
impl Playfair {
    pub fn new(key: &str) -> Self {
        // We omit the letter 'j' to have an alphabet of 25 signs (the cipher uses a 5x5 table)
        let mut letters = "abcdefghiklmnopqrstuvwxyz".to_string();

        // Remove whitespace and duplicates from the key & alphabet
        let mut cipher = vec![];
        for c in key.chars() {
            if char::is_whitespace(c) {
                continue;
            }

            if !cipher.contains(&c) {
                cipher.push(c);
                letters = letters.replace(c, "");
            }
        }

        // Construct the matrix from the deduplicated key & remaining alphabet
        cipher.append(&mut letters.chars().collect::<Vec<_>>());

        Playfair(String::from_iter(cipher).to_uppercase())
    }

    pub fn cipher(&self, message: &str) -> String {
        println!("cipher {}", self.0);
        println!("----------");

        let normalized_input = Self::normalize_message(message);
        let chars = normalized_input.chars().collect::<Vec<_>>();
        let cipher_chars = self.0.chars().collect::<Vec<_>>();

        let mut ciphered = vec![];
        let mut i = 1;
        for chunk in chars.chunks(2) {
            let first_indice = &self
                .0
                .chars()
                .position(|c| &c == chunk.first().unwrap())
                .unwrap();
            let last_indice = &self
                .0
                .chars()
                .position(|c| &c == chunk.last().unwrap())
                .unwrap();

            let start_row_position = first_indice % 5;
            let end_row_position = last_indice % 5;
            let row_position_difference = start_row_position.abs_diff(end_row_position);

            println!(
                "{i}. chunk {chunk:?} - first_indice {first_indice} - last_indice {last_indice}"
            );

            println!(
                "start_row_position {start_row_position} - end_row_position {end_row_position} - row_position_difference {row_position_difference}"
            );

            let mut new_first = 0;
            let mut new_last = 0;
            if self.is_in_row(first_indice, last_indice) {
                println!("is in row");

                new_first = first_indice + 1;
                if new_first / 5 != first_indice / 5 {
                    new_first -= 5;
                }

                new_last = last_indice + 1;
                if new_last / 5 != last_indice / 5 {
                    new_last -= 5;
                }
            } else if self.is_in_column(first_indice, last_indice) {
                println!("is in column");

                new_first = first_indice + 5;
                if new_first > 24 {
                    new_first -= 24;
                }

                new_last = last_indice + 5;
                if new_last > 24 {
                    new_last -= 24;
                }
            } else if self.is_in_rectangle(first_indice, last_indice) {
                println!("is in rectangle");

                // Stay in the same row but switch the positions in row between the two values
                new_first = last_indice % 5 + (first_indice / 5 * 5);
                new_last = first_indice % 5 + (last_indice / 5 * 5);
            } else {
                eprintln!("error");
            }

            println!("new_first {new_first} - new_last {new_last}");

            let result = format!(
                "{}{}",
                cipher_chars.get(new_first).unwrap(),
                cipher_chars.get(new_last).unwrap()
            );

            println!("chunk result : {result}");
            println!("----------");

            ciphered.push(result);

            i += 1;
        }

        ciphered.join(" ")
    }

    pub fn decipher(&self, message: &str) -> String {
        message.to_string()
    }

    fn normalize_message(message: &str) -> String {
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
            if first == last {
                normalized_input.push(&'X')
            }

            if !last.is_whitespace() {
                normalized_input.push(last);
            }
        }

        let mut normalized_input = String::from_iter(normalized_input);

        // Add an extra 'X' to make the length even
        if normalized_input.len() % 2 != 0 {
            normalized_input.push('X');
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_new() {
        let pf = Playfair::new("playfair example");

        assert_eq!(pf.0, "PLAYFIREXMBCDGHKNOQSTUVWZ");
    }

    #[test]
    fn test_normalize_message() {
        assert_eq!(
            Playfair::normalize_message("Hide the gold in the tree stump"),
            "HIDETHEGOLDINTHETREXESTUMP"
        );
        assert_eq!(
            Playfair::normalize_message("Cache l'or dans la souche de l'arbre"),
            "CACHELORDANSLASOUCHEDELARBRE"
        );
        assert_eq!(Playfair::normalize_message("Hello"), "HELXLO");
        assert_eq!(Playfair::normalize_message("Hey!"), "HEYX");
        assert_eq!(Playfair::normalize_message("letter"), "LETXTERX");
    }

    #[test]
    fn test_cipher_english() {
        assert_eq!(
            Playfair::new("playfair example").cipher("hide the gold in the tree stump"),
            "BM OD ZB XD NA BE KU DM UI XM MO UV IF"
        );
    }
}
