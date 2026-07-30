# Notes App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)

## Short description

A simple notes app built with plain HTML, CSS, and JavaScript. Add notes, delete them, and they stick around between visits thanks to localStorage.

## Technologies

HTML5, CSS3, JavaScript (DOM manipulation, localStorage)

## Features

- Add new notes with a single click
- Delete notes you no longer need
- Notes persist across page reloads using localStorage
- Notes render instantly and dynamically as they're added or removed
- A clean, minimal interface with a search bar already in place in the UI

## The process

The main focus was getting note data to survive a page refresh without a backend, which meant reading from and writing to localStorage every time a note is added or deleted, and keeping that in sync with what's rendered on the page. Keeping the rendering logic simple (re-drawing the note list from the stored array) made it easier to avoid the DOM and the stored data drifting out of sync with each other.

## What I learned

- Reading from and writing to localStorage, and keeping it in sync with in-memory state
- Rendering a dynamic list of items from an array and re-rendering it after changes
- Structuring small, focused functions for adding, deleting, and displaying notes
- Designing UI elements (like the search bar) ahead of the feature that will use them

## How it can be improved

- Wire up the search bar that's already in the UI to actually filter notes
- Add the ability to edit an existing note instead of only adding and deleting
- Add timestamps to show when each note was created
- General UI/UX polish

## How to run the project

1. Clone the repo
2. Open `index.html` directly in your browser
