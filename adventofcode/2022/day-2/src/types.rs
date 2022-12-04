use std::ops::AddAssign;

#[derive(Debug, Eq, PartialEq, Copy, Clone)]
pub enum Shape {
    Rock,
    Paper,
    Scissors,
}

impl From<char> for Shape {
    fn from(item: char) -> Self {
        match item {
            'A' => Shape::Rock,
            'B' => Shape::Paper,
            'C' => Shape::Scissors,
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
pub struct Game {
    them: Shape,
    me: Shape,
}

impl Game {
    pub fn new(them: Shape, me: Shape) -> Self {
        Self { them, me }
    }

    pub fn score(&self) -> (usize, usize) {
        let mut them_game: usize = self.them.into();
        let mut me_game: usize = self.me.into();

        match (self.them, self.me) {
            (Shape::Rock, Shape::Scissors)
            | (Shape::Scissors, Shape::Paper)
            | (Shape::Paper, Shape::Rock) => them_game += Score::Win,
            (Shape::Scissors, Shape::Rock)
            | (Shape::Paper, Shape::Scissors)
            | (Shape::Rock, Shape::Paper) => me_game += Score::Win,
            (_, _) => {
                them_game += Score::Draw;
                me_game += Score::Draw;
            }
        };

        (them_game, me_game)
    }
}
