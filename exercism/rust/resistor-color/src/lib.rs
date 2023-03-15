use std::fmt;
use strum::IntoEnumIterator;
use strum_macros::{EnumIter, FromRepr};

#[derive(Debug, PartialEq, EnumIter, FromRepr)]
pub enum ResistorColor {
    Black,
    Brown,
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Violet,
    Grey,
    White,
}

impl From<ResistorColor> for usize {
    fn from(color: ResistorColor) -> usize {
        color as usize
    }
}

impl fmt::Display for ResistorColor {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:?}", self)
    }
}

pub fn color_to_value(color: ResistorColor) -> usize {
    color.into()
}

pub fn value_to_color_string(value: usize) -> String {
    match ResistorColor::from_repr(value) {
        Some(r) => r.to_string(),
        None => "value out of range".to_string(),
    }
}

pub fn colors() -> Vec<ResistorColor> {
    ResistorColor::iter().collect::<Vec<ResistorColor>>()
}
