import UIKit

//let celsius = 20.0;
//let farenheit = (celsius * 9.0 / 5.0) + 32.0
//print("\(celsius)°C - \(farenheit)°F")

//let luckyNumbers = [7, 4, 38, 21, 16, 15, 12, 33, 31, 49]
//print(luckyNumbers.filter{!$0.isMultiple(of: 2)}.sorted().map{String($0) + " is a lucky number"})

// Copies of structs are always unique
struct Car {
    let model: String
    let seats: Int
    private var currentGear: Int {
        didSet {
            print("Switched gear to \(currentGear)")
        }
    }
    
    init(model: String, seats: Int) {
        self.model = model
        self.seats = seats
        self.currentGear = 1
    }
    
    mutating func gearUp() {
        if (currentGear < 10) {
            currentGear += 1
        }
    }
    
    mutating func gearDown() {
        if (currentGear > 1) {
            currentGear -= 1
        }
    }
}

var car = Car(model: "Toyota", seats: 5)

car.gearUp()
car.gearUp()
car.gearUp()
car.gearDown()

// SwiftUI uses classes extensively, mainly for point 3: all copies of a class share the same data. This means many parts of your app can share the same information, so that if the user changed their name in one screen all the other screens would automatically update to reflect that change.
// SwiftUI relies very heavily on classes for its data, specifically because they can be shared so easily.
class Vehicle {
    let isElectric: Bool

    init(isElectric: Bool) {
        self.isElectric = isElectric
    }
    
    deinit {
        print("Vehicle \(id): I'm broken!")
    }
}

class Truck: Vehicle {
    let isConvertible: Bool

    init(isElectric: Bool, isConvertible: Bool) {
        self.isConvertible = isConvertible
        super.init(isElectric: isElectric)
    }
}

let volvo = Truck(isElectric: false, isConvertible: false)
