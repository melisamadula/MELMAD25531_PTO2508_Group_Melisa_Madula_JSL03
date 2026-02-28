# Task Board Application – Step-by-Step Pseudo Code Guide

---

## STEP 1 – Keep Adding Tasks Until There Are 6

### Goal:

Continue prompting the user to add tasks until the array contains 6 total tasks.

### Pseudo Code:

* WHILE the number of items inside `initialTasks` is less than 6

  * Call the `addTask()` function
* The loop should stop automatically once the length becomes 6

### Key Concepts:

* `.length` gives the number of items in an array
* A `while` loop runs as long as its condition is true
* When the condition becomes false, the loop stops automatically

---

## STEP 2 – Alert the User When the Board Is Full

### Goal:

Notify the user once there are exactly 6 tasks.

### Pseudo Code:

* IF the number of tasks in `initialTasks` equals 6

  * Show an alert message telling the user there are enough tasks

### Key Concepts:

* `if` statements run only when a condition is true
* The loop guarantees we stop at 6, but the `if` confirms it

---

## STEP 3 – Create the addTask Function

### Goal:

Create a function that collects user input, validates it, creates a task object, and adds it to the array.

### Pseudo Code Structure:

* Create a function called `addTask`

Inside the function:

1. Ask the user for:

   * Task title
   * Task description
   * Task status

2. Convert the task status to lowercase

   * This ensures values like "DONE" or "Done" still work

3. Validate the status

   * WHILE the status is NOT equal to:

     * "todo"
     * "doing"
     * "done"
   * Show an alert explaining valid options
   * Ask for the status again

4. Create a new task object

   * id → current array length + 1
   * title → user input
   * description → user input
   * status → validated status

5. Add the new task to `initialTasks`

   * Use the `.push()` method

### Key Concepts:

* Functions group reusable logic
* Input validation loops prevent incorrect data
* Objects store structured data
* `.push()` adds items to an array

---

## STEP 4 – Create getCompletedTasks Function

### Goal:

Return only tasks with a status of "done".

### Pseudo Code:

* Create a function called `getCompletedTasks`
* Use the `.filter()` method on `initialTasks`
* Return only tasks where `task.status` equals "done"

### Important Notes:

* `.filter()` returns a new array
* It does NOT change the original array
* The function should return the filtered result

---

## STEP 5 – Display the Results

### Goal:

Show both all tasks and completed tasks in the console.

### Pseudo Code:

* Log "All tasks:" and the entire `initialTasks` array
* Log "Completed tasks:" and call `getCompletedTasks()`

### Key Concepts:

* Functions must be called using parentheses
* Console logging helps with debugging and verification

---

# Full Logical Flow Overview

1. Start with the provided `initialTasks` array.
2. Use a `while` loop to keep adding tasks until there are 6.
3. Alert the user once the board is full.
4. Use a function to safely add validated tasks.
5. Use another function to filter completed tasks.
6. Display everything in the console.