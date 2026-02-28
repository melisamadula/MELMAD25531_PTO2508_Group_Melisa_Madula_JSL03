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

// Function to add a new task to the initialTasks array
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

// Displaying All Tasks in the console
console.log("All Tasks:", initialTasks);

// Displaying Alert Message for the last task added to the board
const lastTask = initialTasks[initialTasks.length - 1];
alert("These are your last tasks on your board, please check them on your console");

// Filtering tasks based on their status and displaying them in the console
const doneTasks = initialTasks.filter(task => task.status === "done");
console.log("Completed Tasks:", doneTasks);



