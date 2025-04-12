# 2048 Testing

## Overview

- This document provides the requirements for the **Playwright Testing Assignment**
- Target Application: [2048 Game](https://play2048.co/)

## Goals

- Automate end-to-end tests using **Playwright**
- Simulate real user interactions in a browser
- Verify UI state, game logic, and storage persistence

## Timeline

- Estimated time: **1–2 days**

## Technical Stack

- **Runtime & Tools**
  - Node.js
  - Playwright
- **Browsers**
  - Chromium (required)
  - Firefox, WebKit (optional)
- **Artifacts**
  - Screenshots for key test steps and failures
  - HTML reports
- **Editor**
  - VSCode

## Requirements

### Feature: Game Initialization and Verification

#### Scenario: User launches and verifies the game

- User opens `https://play2048.co/`
- User sees the page title contains "2048"

#### Scenario: User verifies the initial game state

- User sees the score starts at 0
- User sees the game board contains tiles with values 2 or 4

---

### Feature: Gameplay Simulation

#### Scenario: User simulates gameplay with 10 random moves

- User performs 10 random arrow key moves
- User captures the score after the moves
- User takes a screenshot of the game board

---

### Feature: Game State Persistence

#### Scenario: User verifies game state persistence after reloading

- User reloads the page
- User verifies the score remains the same
- User verifies the board state persists using localStorage

---

### Feature: Game Reset

#### Scenario: User resets the game

- User clicks the "New Game" button
- User sees the score reset to 0
- User sees the game board is re-initialized

---

### Feature: Tutorial Completion

#### Scenario: User completes the game tutorial

- User opens the top-left menu
- User clicks "Tutorial"
- User follows the tutorial steps
- User captures a screenshot at the end of the tutorial

---

### Feature: Tile Swap Functionality

#### Scenario: User uses the "SWAP TWO TILES" feature

- User clicks the "SWAP TWO TILES" button
- User selects two tiles to swap
- User hovers over the button again
- User sees the tooltip showing "0 uses left"

## Getting Started

| Command                      | Action                       |
| ---------------------------- | ---------------------------- |
| `npm install`                | Install project dependencies |
| `npx playwright install`     | Install browser binaries     |
| `npx playwright test`        | Run the full test suite      |
| `npx playwright show-report` | Open the HTML test report    |

## Authors

- Thuan Dang
- Email: [thuandang97.dev@gmail.com](mailto:thuandang97.dev@gmail.com)

## Documents

- [Report Documents](https://drive.google.com/drive/folders/1e14KfdHNqod0RzATCTLzIuIgq_J7hNAj?usp=drive_link)
