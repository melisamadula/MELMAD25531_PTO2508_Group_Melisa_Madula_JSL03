const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

const addTask = (title, description, status) => {
  const newTask = {
    id: initialTasks.length + 1, 
    title,
    description,
    status,
  };
  initialTasks.push(newTask);
};

// Adding 3 new tasks to the initialTasks array
initialTasks.push(
  {
    id: 4,
    title: prompt("enter task title"),
    description: prompt("enter task description"),
    status: prompt("Enter task status (todo, doing, done):").toLowerCase(),
  },
  {
    id: 5,
    title: prompt("enter task title"),
    description: prompt("enter task description"),
    status: prompt("Enter task status (todo, doing, done):").toLowerCase(),
  },
  {
    id: 6,
    title: prompt("enter task title"),
    description: prompt("enter task description"),
    status: prompt("Enter task status (todo, doing, done):").toLowerCase(),
  },
);

console.log("All Tasks:", initialTasks);

/*
// Keep asking until the user enters a valid status for task
while (addTask !== "done" && addTask !== "todo" && addTask !== "doing") {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  addTask = prompt("Enter task status (todo, doing, done):").toLowerCase();
}

if (addTask === "done" || addTask === "todo" || addTask === "doing") {
  console.log("All Tasks:");
  initialTasks.forEach(task => {
    console.log(`- ${task.title}: ${task.description} (${task.status})`);
  });
}

else if (addTask === "done") {
  console.log("Completed Tasks:");
  initialTasks.forEach(task => {
    if (task.status === "done") {
      console.log(`- ${task.title}: ${task.description}`);
    }
  });
}
*/

// Displaying Alert Message for the last task added to the board
const lastTask = initialTasks[initialTasks.length - 1];
alert("These are your last tasks on your board, please check them on your console");

// Filtering tasks based on their status and displaying them in the console
/*const todoTasks = initialTasks.filter(task => task.status === "todo");
const doingTasks = initialTasks.filter(task => task.status === "doing");*/
const doneTasks = initialTasks.filter(task => task.status === "done");
console.log("Completed Tasks:", doneTasks);



/*
//example to be deleted
const doneTasks = initialTasks.filter(task => task.status === "done");
console.log("Completed Tasks:");
doneTasks.forEach(task => {
  console.log(`- ${task.title}: ${task.description}`);
});
*/

/* //from the previous code, to be deleted for just before alert message
console.log("Last Task Added:");
console.log(`- ${lastTask.title}: ${lastTask.description} (${lastTask.status})`);
*/