#![feature(iter_next_chunk)]
use std::collections::HashSet;

fn main() {
    let data = include_str!("input.txt");

    part_one(data);
    // part_two(data);
}

fn part_one(data: &str) {
    let sum: u32 = data
        .lines()
        .map(|l| {
            let (start, end) = l.split_at(l.len() / 2);
            let start = start.chars().map(convert_char).collect::<HashSet<_>>();
            let end = end.chars().map(convert_char).collect::<HashSet<_>>();

            start
                .intersection(&end)
                .collect::<Vec<_>>()
                .pop()
                .unwrap()
                .to_owned()
        })
        .sum();

    println!("part one intersector - total is {sum}"); // 7766
}

fn part_two(data: &str) {
    // https://doc.rust-lang.org/stable/std/iter/trait.Iterator.html#method.next_chunk
    let three_lines = data
        .lines()
        .collect::<Vec<&str>>()
        .chunks(3)
        .next_chunk::<3>()
        .unwrap();
}

fn convert_char(c: char) -> u32 {
    let mut unicode = c.into();

    // Uppercase is between 65 & 90, lowercase is between 97 & 122
    if unicode < 91 {
        unicode -= 38;
    } else {
        unicode -= 96;
    }

    unicode
}
