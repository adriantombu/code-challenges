use std::ops::AddAssign;

#[derive(Debug, Eq, PartialEq, Copy, Clone)]
pub enum Shape {
    Rock,
    Paper,
    Scissors,
}

impl Shape {
    pub fn shape_from_action(other: &Shape, action: &Action) -> Self {
        match (other, action) {
            (Shape::Rock, Action::Lose) | (Shape::Paper, Action::Win) => Shape::Scissors,
            (Shape::Rock, Action::Win) | (Shape::Scissors, Action::Lose) => Shape::Paper,
            (Shape::Paper, Action::Lose) | (Shape::Scissors, Action::Win) => Shape::Rock,
            (shape, _) => *shape,
        }
    }
}

impl From<char> for Shape {
    fn from(item: char) -> Self {
        match item {
            'A' | 'X' => Shape::Rock,
            'B' | 'Y' => Shape::Paper,
            'C' | 'Z' => Shape::Scissors,
            _ => panic!("Character out of bounds"),
        }
    }
}

impl From<Shape> for usize {
    fn from(score: Shape) -> usize {
        match score {
            Shape::Rock => 1,
            Shape::Paper => 2,
            Shape::Scissors => 3,
        }
    }
}

#[derive(Debug)]
pub enum Score {
    Draw,
    Win,
}

impl AddAssign<Score> for usize {
    fn add_assign(&mut self, score: Score) {
        *self = match score {
            Score::Draw => *self + 3,
            Score::Win => *self + 6,
        };
    }
}

#[derive(Debug)]
pub enum Action {
    Lose,
    Draw,
    Win,
}

impl From<char> for Action {
    fn from(item: char) -> Self {
        match item {
            'X' => Action::Lose,
            'Y' => Action::Draw,
            'Z' => Action::Win,
            _ => panic!("Character out of bounds"),
        }
    }
}

#[derive(Debug)]
pub struct Game {
    them: Shape,
    me: Shape,
}

impl Game {
    pub fn new(them: Shape, me: Shape) -> Self {
        Self { them, me }
    }

    pub fn score(&self) -> (usize, usize) {
        let mut other_game: usize = self.them.into();
        let mut my_game: usize = self.me.into();

        match (self.them, self.me) {
            (Shape::Rock, Shape::Scissors)
            | (Shape::Scissors, Shape::Paper)
            | (Shape::Paper, Shape::Rock) => other_game += Score::Win,
            (Shape::Scissors, Shape::Rock)
            | (Shape::Paper, Shape::Scissors)
            | (Shape::Rock, Shape::Paper) => my_game += Score::Win,
            (_, _) => {
                other_game += Score::Draw;
                my_game += Score::Draw;
            }
        };

        (other_game, my_game)
    }
}
