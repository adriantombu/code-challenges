// https://adventofcode.com/2022/day/1
fn main() {
    let mut calories = include_str!("input.txt")
        .split("\n\n")
        .collect::<Vec<_>>()
        .iter()
        .map(|elf| {
            elf.lines()
                .map(|calories| calories.parse::<usize>().expect("could not parse to usize"))
                .sum::<usize>()
        })
        .collect::<Vec<_>>();

    calories.sort_by(|a, b| b.cmp(a));

    part_one(&calories);
    part_two(&calories);
}

// Result is 71934
fn part_one(calories: &[usize]) {
    println!("Part one (max calories): {}", calories[0]);
}

// Result is 211447
fn part_two(calories: &[usize]) {
    println!(
        "Part two (top 3 max calories): {:?}",
        calories.iter().take(3).sum::<usize>()
    );
}
