//
//  SwiftDataProjectApp.swift
//  SwiftDataProject
//
//  Created by Adrian Tombu on 16/12/2023.
//

import SwiftUI
import SwiftData

@main
struct SwiftDataProjectApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: User.self)
    }
}
