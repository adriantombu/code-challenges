import UIKit

class Animal {
    let legs: Int
    
    init(legs: Int) {
        self.legs = legs
    }
}

class Dog: Animal {
    func speak(){
        print("I'm a generic dog")
    }
}

class Corgi: Dog {
    override func speak(){
        print("I'm a corgi")
    }
}

class Poodle: Dog {
    override func speak(){
        print("I'm a poodle")
    }
}

class Cat: Animal {
    var isTame: Bool
    
    init(legs: Int, isTame: Bool) {
        self.isTame = isTame
        super.init(legs: legs)
    }
    
    func speak(){
        print("I'm a generic cat")
    }
}

class Persian: Cat {
    override func speak(){
        print("I'm a persian")
    }
}

class Lion: Cat {
    override func speak(){
        print("I'm a lion")
    }
}
