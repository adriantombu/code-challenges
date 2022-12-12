use std::collections::HashSet;

const PACKET_MARKER: usize = 4;
const MESSAGE_MARKER: usize = 14;

fn main() {
    let data = include_str!("input.txt");

    // Part one
    assert_eq!(
        get_first_marker("mjqjpqmgbljsphdztnvjfqwrcgsmlb", PACKET_MARKER),
        7
    );
    assert_eq!(
        get_first_marker("bvwbjplbgvbhsrlpgdmjqwftvncz", PACKET_MARKER),
        5
    );
    assert_eq!(
        get_first_marker("nppdvjthqldpwncqszvftbrmjlhg", PACKET_MARKER),
        6
    );
    assert_eq!(
        get_first_marker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", PACKET_MARKER),
        10
    );
    assert_eq!(
        get_first_marker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", PACKET_MARKER),
        11
    );
    assert_eq!(get_first_marker(data, PACKET_MARKER), 1042);

    // Part two
    assert_eq!(
        get_first_marker("mjqjpqmgbljsphdztnvjfqwrcgsmlb", MESSAGE_MARKER),
        19
    );
    assert_eq!(
        get_first_marker("bvwbjplbgvbhsrlpgdmjqwftvncz", MESSAGE_MARKER),
        23
    );
    assert_eq!(
        get_first_marker("nppdvjthqldpwncqszvftbrmjlhg", MESSAGE_MARKER),
        23
    );
    assert_eq!(
        get_first_marker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", MESSAGE_MARKER),
        29
    );
    assert_eq!(
        get_first_marker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", MESSAGE_MARKER),
        26
    );
    assert_eq!(get_first_marker(data, MESSAGE_MARKER), 2980);
}

fn get_first_marker(subroutine: &str, marker_length: usize) -> usize {
    let mut i = 0;
    while i < subroutine.len() - marker_length - 1 {
        let chunk = subroutine.as_bytes()[i..=i + marker_length - 1]
            .iter()
            .collect::<HashSet<_>>();

        if chunk.len() == marker_length {
            i += marker_length;
            break;
        }

        i += 1;
    }

    i
}
