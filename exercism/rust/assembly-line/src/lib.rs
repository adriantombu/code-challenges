pub fn production_rate_per_hour(speed: u8) -> f64 {
    let base_per_hour: u16 = 221;
    let current_speed = (base_per_hour * speed as u16) as f64;

    match speed {
        1..=4 => current_speed,
        5..=8 => current_speed * 0.9,
        9..=10 => current_speed * 0.77,
        _ => 0.0,
    }
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    production_rate_per_hour(speed) as u32 / 60
}
