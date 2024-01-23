//
//  ContentView.swift
//  RockerPaperScissors
//
//  Created by Adrian Tombu on 05/12/2023.
//

import SwiftUI

struct ContentView: View {
    private let maxRounds = 3
    private let actions = ["Rock", "Paper", "Scissors"]
    private let winningActions = ["Paper", "Scissors", "Rock"]
    
    @State private var currentAction = Int.random(in: 0...2)
    @State private var score = 0
    @State private var currentRound = 1
    @State private var scoreTitle = ""
    @State private var scoreMessage = ""
    @State private var showingScore = false
    @State private var showingEnd = false
    
    var body: some View {
        VStack {
            HStack {
                ForEach(actions, id: \.self) { action in
                    Button {
                        actionTapped(action)
                    } label: {
                        Text(action)
                    }
                    .font(.system(size: 30))
                }
            }
        }
        .alert(scoreTitle, isPresented: $showingScore) {
            Button("Next round", action: nextRound)
        } message: {
            Text(scoreMessage)
        }
        .alert("End of the game", isPresented: $showingEnd) {
            Button("Restart", action: restart)
        } message: {
            Text("Your final score is \(score)/\(currentRound)")
        }
    }
    
    func actionTapped(_ action: String) {
        print("user: \(action) (\(winningActions.firstIndex(of: action)!)) - game: \(actions[currentAction]) (\(currentAction))")
        
        if (winningActions.firstIndex(of: action)! == currentAction) {
            scoreTitle = "You win"
            score += 1
        } else {
            scoreTitle = "You lose"
        }
                
        scoreMessage = "Your score \(score)/\(currentRound)"
        showingScore = true
    }
    
    func nextRound() {
        if (currentRound >= maxRounds) {
            showingEnd = true
            return
        }
        
        currentAction = Int.random(in: 0...2)
        currentRound += 1
    }
    
    func restart() {
        score = 0
        currentRound = 0
        nextRound()
    }
}

#Preview {
    ContentView()
}
