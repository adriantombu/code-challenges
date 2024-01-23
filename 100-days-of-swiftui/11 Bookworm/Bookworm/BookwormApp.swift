//
//  BookwormApp.swift
//  Bookworm
//
//  Created by Adrian Tombu on 15/12/2023.
//

import SwiftUI
import SwiftData

@main
struct BookwormApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: Book.self)
    }
}
