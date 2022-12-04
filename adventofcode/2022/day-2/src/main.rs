use crate::types::{Game, Shape};

mod types;

fn main() {
    let data = include_str!("input.txt");

    part_one(data);
    part_two(data);
}

fn part_one(data: &str) {
    println!("Part one");

    let get_me = |ch: char, _: Shape| -> Shape { ch.into() };
    get_score(data, get_me);
}

fn part_two(data: &str) {
    println!("\nPart two");

    let get_me = |ch: char, other: Shape| -> Shape { Shape::shape_from_action(&other, &ch.into()) };
    get_score(data, get_me);
}

fn get_score(data: &str, get_me: fn(char, Shape) -> Shape) {
    let mut other_score: usize = 0;
    let mut my_score: usize = 0;

    data.lines().for_each(|game| {
        let chars = game.chars().collect::<Vec<char>>();
        let other: Shape = chars[0].into();
        let me = get_me(chars[2], other);
        let (other_game, my_game) = Game::new(other, me).score();

        other_score += other_game;
        my_score += my_game;
    });

    println!("- their total score: {}", other_score); // 9939, 11178
    println!("- my total score: {}", my_score); // 14827, 13889
}
