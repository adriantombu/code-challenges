use std::collections::HashSet;

fn main() {
    let data = include_str!("input.txt");

    part_one(data);
}

fn part_one(data: &str) {
    let total: usize = data
        .lines()
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

            usize::from(
                teams[0].union(&teams[1]).count() == teams[0].len()
                    || teams[1].union(&teams[0]).count() == teams[1].len(),
            )
        })
        .sum();

    println!("total {:?}", total); // 584
}
