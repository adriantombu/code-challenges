use std::fmt;

#[derive(Debug, PartialEq)]

pub struct Clock {
    time: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        let mut m = minutes + hours * 60;

        m %= 24 * 60;

        if m < 0 {
            m += 24 * 60;
        }

        Clock { time: m }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(0, self.time + minutes)
    }
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:02}:{:02}", self.time / 60, self.time % 60)
    }
}
