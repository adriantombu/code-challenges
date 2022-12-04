/// various log levels
#[derive(Clone, PartialEq, Debug)]
pub enum LogLevel {
    Info,
    Warning,
    Error,
    Debug,
}

pub fn log(level: LogLevel, message: &str) -> String {
    match level {
        LogLevel::Warning => warn(message),
        LogLevel::Error => error(message),
        LogLevel::Debug => debug(message),
        _ => info(message),
    }
}

pub fn info(message: &str) -> String {
    format!("[INFO]: {}", message)
}

pub fn debug(message: &str) -> String {
    format!("[DEBUG]: {}", message)
}

pub fn warn(message: &str) -> String {
    format!("[WARNING]: {}", message)
}

pub fn error(message: &str) -> String {
    format!("[ERROR]: {}", message)
}