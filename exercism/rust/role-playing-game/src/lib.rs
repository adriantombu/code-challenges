pub struct Player {
    pub health: u32,
    pub mana: Option<u32>,
    pub level: u32,
}

impl Player {
    pub fn revive(&self) -> Option<Player> {
        match self.health {
            0 => Some(Self {
                health: 100,
                mana: match self.level {
                    ..=9 => None,
                    _ => Some(100),
                },
                level: self.level,
            }),
            1.. => None,
        }
    }

    pub fn cast_spell(&mut self, mana_cost: u32) -> u32 {
        match self.mana {
            Some(mana) if mana >= mana_cost => {
                self.mana = Some(mana - mana_cost);
                mana_cost * 2
            }
            Some(_) => 0,
            None => {
                self.health = self.health.saturating_sub(mana_cost);
                0
            }
        }
    }
}
