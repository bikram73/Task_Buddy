# Task Buddy 📝

A simple and modern task management application built with React and Vite. Keep track of your daily to-dos with a clean, intuitive, and persistent interface.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://bikram73.github.io/Task_Buddy/)

---

## ✨ Features

- **Full CRUD Functionality**: Add, edit, and delete your tasks with ease.
- **Complete & Undo**: Toggle tasks between completed and active states.
- **Progress Tracker**: A visual progress bar shows how many tasks you've completed.
- **Persistent Storage**: Tasks are saved in your browser's `localStorage`, so they're always there when you return.
- **Smooth Animations**: Enjoy fluid slide-in/out animations when adding or removing tasks.
- **Clean UI**: A modern, responsive, and user-friendly design.
- **Input Validation**: Prevents adding empty tasks.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **Styling**: Plain CSS with CSS Variables
- **Animations**: react-transition-group
- **Deployment**: GitHub Pages

---

## 📂 File Structure

The project follows a standard Vite + React structure.

```
Task_Buddy/
├── public/
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Progresstracker.jsx
│   │   ├── Taskform.jsx
│   │   └── Tasklist.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── Style.css
├── .gitignore
├── index.html
├── package.json
├── readme.md
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- Git

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/bikram73/Task_Buddy.git
    cd Task_Buddy
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📦 Deployment

This project is configured for easy deployment to GitHub Pages.

Simply run the following command:
```sh
npm run deploy
```
This will build the project and push the contents of the `dist` folder to the `gh-pages` branch of your repository.
