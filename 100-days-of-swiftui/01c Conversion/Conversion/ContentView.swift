//
//  ContentView.swift
//  Conversion
//
//  Created by Adrian Tombu on 04/12/2023.
//

import SwiftUI

struct ContentView: View {
    @FocusState private var amountIsFocused: Bool
    @State private var inputValue = 100
    @State private var inputLength = "meters"
    @State private var outputLength = "meters"

    let length_list = [ "centimeters", "meters", "kilometers" ]

    var computed: Double {
        var x = inputValue
        if (inputLength == "meters") {
            x *= 100
        } else if (inputLength == "kilometers") {
            x *= 10000
        }
        
        if (outputLength == "meters") {
            return Double(x / 100)
        } else if (outputLength == "kilometers") {
            return Double(x / 10000)
        }
        
        return Double(x)
    }
    
    // computed property  that conforms to the View protocol
    var body: some View {
        NavigationStack {
            Form {
                Section("Input unit") {
                    Picker("Input unit", selection: $inputLength) {
                        ForEach(length_list, id: \.self) {
                            Text($0)
                        }
                    }
                    .pickerStyle(.segmented)
                    TextField("Input", value: $inputValue, format: .number)
                        .keyboardType(.decimalPad)
                        .focused($amountIsFocused)
                }
                
                Section("Output unit") {
                    Picker("Output unit", selection: $outputLength) {
                        ForEach(length_list, id: \.self) {
                            Text($0)
                        }
                    }
                    .pickerStyle(.segmented)
                    Text(computed, format: .number)
                }
            }
            .navigationTitle("WeSplit")
            .toolbar {
                if amountIsFocused {
                    Button("Done") {
                        amountIsFocused = false
                    }
                }
            }
        }

    }
}

#Preview {
    ContentView()
}
