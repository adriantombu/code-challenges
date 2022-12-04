use crate::types::{Game, Shape};

mod types;

fn main() {
    let data = include_str!("input.txt");

    part_one(data);
    part_two(data);
}

fn part_one(data: &str) {
    let data = data.replace('X', "A").replace('Y', "B").replace('Z', "C");

    let games = data
        .lines()
        .map(|game| {
            let chars = game.chars().collect::<Vec<char>>();
            let other: Shape = chars[0].into();
            let me: Shape = chars[2].into();

            (other, me)
        })
        .collect::<Vec<_>>();

    println!("Part one");
    get_score(&games);
}

fn part_two(data: &str) {
    let games = data
        .lines()
        .map(|game| {
            let chars = game.chars().collect::<Vec<char>>();
            let other: Shape = chars[0].into();

            let me = match (other, chars[2]) {
                (Shape::Rock, 'X') | (Shape::Paper, 'Z') => Shape::Scissors,
                (Shape::Rock, 'Z') | (Shape::Scissors, 'X') => Shape::Paper,
                (Shape::Paper, 'X') | (Shape::Scissors, 'Z') => Shape::Rock,
                (shape, 'Y') => shape,
                _ => panic!("Character ouf of bounds"),
            };

            (other, me)
        })
        .collect::<Vec<_>>();

    println!("\nPart two");
    get_score(&games);
}

fn get_score(games: &[(Shape, Shape)]) {
    let mut them_score: usize = 0;
    let mut me_score: usize = 0;

    games.iter().for_each(|(them, me)| {
        let (them_game, me_game) = Game::new(*them, *me).score();

        them_score += them_game;
        me_score += me_game;
    });

    println!("- their total score: {}", them_score); // 9939, 11178
    println!("- my total score: {}", me_score); // 14827, 13889
}
