//
//  ContentView.swift
//  MultiplicationTables
//
//  Created by Adrian Tombu on 11/12/2023.
//

import SwiftUI

struct ContentView: View {
    @State private var multiplier = 2
    @State private var maxQuestions = 5
    @State private var answer = 0
    @State private var currentStep = 1
    @State private var currentQuestion = 0
    @State private var currentScore = 0
    @State private var started = false
    
    @State private var messageTitle = ""
    @State private var messageContent = ""
    @State private var showMessage = false
    
    var body: some View {
        NavigationStack {
            VStack {
                if (!started) {
                    Stepper("multiplication table of \(multiplier)", value: $multiplier, in: 2...12)
                    Stepper("\(maxQuestions) questions", value: $maxQuestions, in: 5...20, step: 5)
                    
                    Button("Start playing", action: start)
                } else {
                    Text("What is the result of \(currentQuestion) x \(multiplier) ?")
                    TextField("Type your answer", value: $answer, format: .number)
                        .keyboardType(.decimalPad)
                    
                    Button("Check answer", action: checkAnswer)
                }

            }.navigationTitle("Multiplier challenge")
            .padding()
            .alert(messageTitle, isPresented: $showMessage) { } message: {
                Text(messageContent)
            }
        }
    }
    
    func start() {
        started.toggle()
        currentQuestion = Int.random(in: 1..<13)
    }
    
    func restart() {
        currentQuestion = 1
        currentScore = 0
        answer = 0
        multiplier = 2
        maxQuestions = 5
        started.toggle()
    }
    
    func checkAnswer() {
        let correct = multiplier * currentQuestion
        print(correct)
        
        if correct != answer {
            messageTitle = "Wrong"
            messageContent = "The correct answer is \(correct)"
        } else {
            currentScore += 1
            messageTitle = "Huzzah!"
            messageContent = "You chose the correct answer!"
        }
        
        messageContent += "\nYour have a score of \(currentScore)/\(currentStep)"
        
        showMessage.toggle()
        
        if (currentStep == maxQuestions) {
            // TODO: show final score alert and restart button game
            return
        }
        
        answer = 0
        currentStep += 1
        currentQuestion = Int.random(in: 1..<13)
    }
}

#Preview {
    ContentView()
}
