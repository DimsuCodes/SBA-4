# Saomi Tasks

A simple task management app built with HTML, CSS, and vanilla JavaScript.

## Features
- Add tasks with name, category, deadline, and status
- Mark tasks as complete
- Auto-detects overdue tasks based on today's date
- Filter tasks by status
- Saves tasks in local storage (persists after refresh)

## How to Use
1. Fill out the form and click "Submit Your Task"
2. Click "Mark Complete" to update a task's status
3. Use the dropdown to filter tasks
4. Tasks save automatically — just refresh to see them persist

## Built With
HTML, CSS, JavaScript (DOM, arrays, objects, localStorage)

## What I'd Add Next
Editing tasks, deleting tasks, filtering by category

Overall, I found that the biggest challenge for me was JavaScript because it took me the longest to figure out why and how to begin the code.  For example,  I think the biggest challenge I faced was getting the status dropdown to dupate to the correct task without it affecting the others, since every task in the list needed its own independent dropdown. At first, clicking one dropdown seemed to update the wrong task. I worked through this by using console.log to check exactly which task object each event listener was referencing, which helped me realize the function needed to capture the specific task from the loop it was created in. But with the help of my resources I was able to break it down step by step in tiny peices in order to build this project and  learn from it.