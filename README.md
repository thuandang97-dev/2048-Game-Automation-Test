# Playwright Testing Assignment: 2048 Game

## Objective

This assignment assesses your ability to use [Playwright](https://playwright.dev/) to automate testing of a modern, interactive, client-side rendered (CSR) web application. You will test the **2048 Game** using Playwright with focus on:

- Multi-step interaction
- State persistence
- Basic inspection of browser storage

---

## Timeframe

**Estimated completion time:** 1 to 2 days.

---

## Scope

You will use Playwright to:

- Simulate game interactions
- Verify UI behavior
- Inspect internal storage states

---

## Test Requirements

### 1. Environment Setup

- Use **Playwright with Node.js** (preferred) or **Python**
- Tests **must** run on **Chromium**
  - Optional: Firefox and WebKit
- Use **Page Object Model (POM)** if necessary
- Include **video or screenshot evidence** of the test flow

---

### 2. Test Scenarios

#### Test 1: Open the game and verify the title

- Navigate to: `https://play2048.co/`
- Verify the page title contains `"2048"`

---

#### Test 2: Verify the initial game state

- Assert the score is `0` at the beginning
- Assert that the game board contains **2 or 4 tiles**

---

#### Test 3: Simulate a sequence of 10 moves

- Perform **10 consecutive moves** using arrow keys  
  _(e.g., ArrowRight, ArrowDown, ArrowLeft, ArrowUp in random order)_
- After the 10th move:
  - Capture the current **score** and **highest tile**
  - Take a **screenshot** of the board

---

#### Test 4: Reload the page and verify state persistence

- Reload the browser tab
- Verify:
  - The **score** remains the same
  - The **board state** remains the same  
    _(Hint: The game uses `localStorage`)_

---

#### Test 5: Reset the game and validate the reset

- Click the **"New Game"** button
- Assert:
  - Score has reset to `0`
  - Board is re-initialized
  - Previous state has been **removed from localStorage**

---

#### Test 6: Follow "Tutorial"

- Use the mouse to:
  - Click on the **top-left menu**
  - Select **Tutorial**
- Follow and finish the tutorial
- Capture a **screenshot** at the end

---

#### Test 7: Use the "SWAP TWO TILES" feature

- Click on the **New Game** button (top-right corner)
- Perform **10 consecutive moves** using arrow keys
- Click the **"SWAP TWO TILES"** button (under the game board)
- Select **2 tiles** to swap
- Hover over the **SWAP TWO TILES** button again
- Assert:
  - A tooltip or popup appears
  - The popup contains text like `"0 uses left"`

---

### 3. Reporting & Deliverables

- Include:
  - Logs and assertions
  - Screenshots for all **major steps** and **test failures**
- Provide a `README.md` with:
  - Setup instructions
  - How to install dependencies
  - How to run the tests
- Include a **short report** summarizing:
  - What was tested
  - What the outcomes were

---

### 4. Submission Guidelines

- Submit as a **GitHub repository**
- Include:
  - All test code
  - Assets
  - Documentation
  - Output files (screenshots, logs)
- Ensure the test code is:
  - **Readable**
  - **Maintainable**
