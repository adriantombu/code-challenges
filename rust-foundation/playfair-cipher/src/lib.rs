/// Implementation of the Playfair cipher
/// More info here : https://en.wikipedia.org/wiki/Playfair_cipher
pub struct Playfair(String);

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

    pub fn encyrpt(&self, message: &str) -> String {
        // Remove punctuation, number and whitespaces
        let mut input = message
            .chars()
            .filter(|c| char::is_alphabetic(*c))
            .collect::<String>()
            .to_uppercase();

        // Input must be divisible by 2
        if input.len() % 2 != 0 {
            input.push(' ');
        }

        let chars = input.chars().collect::<Vec<_>>();
        let mut normalized_input = vec![];
        for digram in chars.chunks(2) {
            println!("digram {digram:?}");

            let first = digram.first().unwrap();
            let last = digram.last().unwrap();

            normalized_input.push(first);
            if first == last {
                normalized_input.push(&'X')
            }

            if !last.is_whitespace() {
                normalized_input.push(last);
            }
        }

        println!("normalized_input {normalized_input:?}");

        input
    }

    pub fn decrypt(&self) -> String {
        "".to_string()
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
    fn test_encrypt_english() {
        let pf = Playfair::new("playfair example");
        let e = pf.encyrpt("hide the gold in the tree stump");

        assert_eq!(e.len(), 26);
    }

    // #[test]
    // fn test_encrypt_french() {
    //     let pf = Playfair::new("exemple playfair");
    //     let e = pf.encyrpt("Cache l'or dans la souche de l'arbre");
    //
    //     assert_eq!(e.len(), 28);
    // }
}
