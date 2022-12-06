use std::collections::HashSet;

// https://adventofcode.com/2022/day/4
fn main() {
    let data = include_str!("input.txt");

    part_one(data);
    part_two(data);
}

fn part_one(data: &str) {
    let filter = |teams: Vec<HashSet<usize>>| {
        teams[0].union(&teams[1]).count() == teams[0].len()
            || teams[1].union(&teams[0]).count() == teams[1].len()
    };
    let total = sum(data, filter);

    println!("total {:?}", total); // 584
}

fn part_two(data: &str) {
    let filter = |teams: Vec<HashSet<usize>>| teams[0].intersection(&teams[1]).count() > 0;
    let total = sum(data, filter);

    println!("total {:?}", total); // 933
}

fn sum(data: &str, filter: fn(Vec<HashSet<usize>>) -> bool) -> usize {
    data.lines()
        .map(|l| {
            let teams = l
                .split(',')
                .into_iter()
                .map(|team| {
                    let res = team.split('-').collect::<Vec<_>>();
                    let start = res[0].parse::<usize>().unwrap();
                    let end = res[1].parse::<usize>().unwrap();

                    (start..=end).collect::<HashSet<usize>>()
                })
                .collect::<Vec<_>>();

            usize::from(filter(teams))
        })
        .sum()
}
