use std::collections::HashSet;

// https://adventofcode.com/2022/day/3
fn main() {
    let data = include_str!("input.txt");

    part_one(data);
    part_two(data);
}

fn part_one(data: &str) {
    let sum: u32 = data
        .lines()
        .map(|line| {
            let line_char = line.chars().map(convert_char).collect::<Vec<_>>();
            let (start, end) = line_char.split_at(line.len() / 2);
            let start = start.iter().collect::<HashSet<_>>();
            let end = end.iter().collect::<HashSet<_>>();

            **start.intersection(&end).collect::<Vec<_>>()[0]
        })
        .sum();

    println!("part one - total {sum}"); // 7766
}

fn part_two(data: &str) {
    let lines = data.lines().collect::<Vec<&str>>();
    let three_lines_chunks = lines.chunks(3);

    let sum: u32 = three_lines_chunks
        .map(|chunks| {
            let sets = chunks
                .iter()
                .map(|chunk| chunk.chars().map(convert_char).collect::<HashSet<_>>())
                .collect::<Vec<HashSet<_>>>();

            *sets[0]
                .intersection(&sets[1])
                .collect::<HashSet<_>>()
                .into_iter()
                .copied() // Converts HashSet<&u32> to HashSet<u32>
                .collect::<HashSet<u32>>()
                .intersection(&sets[2])
                .collect::<Vec<_>>()
                .pop()
                .unwrap()
        })
        .sum();

    println!("part two - total {sum}"); // 2415
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
