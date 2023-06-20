import Foundation


var count = 0;

func readFile(_ name: String) -> String {
    let url = URL(filePath: name)
    let data = try! Data(contentsOf: url)
    return String(data: data, encoding: .utf8)!
}

let input = readFile("data01.txt")

let lines = input.split(whereSeparator: \.isNewline)

for i in 1..<lines.count {
    let currentElement = lines[i]
    let previousElement = lines[i - 1]
    if currentElement > previousElement {
        count = count + 1
    }
    print("\(currentElement) and \(previousElement) + \(currentElement > previousElement ? "(increased)" : "(decreased)")")
}

print(count)
