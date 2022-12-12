use regex::Regex;

fn main() {
    // TODO: split data between header & move
    let data = include_str!("input.txt");
    let rgx_move = Regex::new(r"move (\d+) from (\d+) to (\d+)").unwrap();

    println!("part one result {:?}", stacks(data, &rgx_move, true)); // FCVRLMVQP
    println!("part two result {:?}", stacks(data, &rgx_move, false)); // RWLWGJGFD
}

fn stacks(data: &str, rgx_move: &Regex, reverse: bool) -> String {
    let mut values: Vec<Vec<char>> = vec![];
    data.lines().for_each(|line| {
        if line.contains('[') {
            let line = format!("{line} ");
            let chars = line.chars().collect::<Vec<char>>();
            chars.chunks(4).enumerate().for_each(|(pos, e)| {
                if values.get(pos).is_none() {
                    values.push(vec![]);
                }

                if !e[1].is_whitespace() {
                    // TODO: Find something cleaner (e.g.: push then reverse array when everything is populated)
                    let mut front = vec![e[1]];
                    front.append(&mut values[pos].drain(..).collect::<_>());
                    values[pos] = front;
                }
            });
        } else if line.contains("move") {
            let captures = rgx_move.captures(line).unwrap();
            let amount = captures.get(1).unwrap().as_str().parse::<usize>().unwrap();
            let from = captures.get(2).unwrap().as_str().parse::<usize>().unwrap() - 1;
            let to = captures.get(3).unwrap().as_str().parse::<usize>().unwrap() - 1;

            let len = values[from].len();
            let append = &mut values[from][len - amount..].to_vec();
            if reverse {
                append.reverse();
            }

            for val in append {
                let _ = values[from].pop().unwrap();
                values[to].push(*val);
            }
        };
    });

    println!("values {:?}", values);
    values
        .into_iter()
        .map(|mut v| v.pop().unwrap())
        .collect::<String>()
}
