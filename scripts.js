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

// Function to add new tasks to the initialTasks array
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

// Helper function to repeatedly prompt user until a valid status is entered
function getValidStatus() {
  const validStatuses = ['todo', 'doing', 'done'];
  let statusInput;
  // Loop until a valid status is entered
  while (true) {
    statusInput = prompt("Enter task status (todo, doing, done):").toLowerCase();
    if (validStatuses.includes(statusInput)) {
      break; // Exit the loop if the input is valid
    } else {
      alert("Invalid status entered. Please use 'todo', 'doing', or 'done'.");
    }
  }
  return statusInput;
};

initialTasks.push(
  {
    id: 4,
    title: prompt("enter task title"),
    description: prompt("enter task description"),
    status: getValidStatus(), // Use the validation function
  },
  {
    id: 5,
    title: prompt("enter task title"),
    description: prompt("enter task description"),
    status: getValidStatus(), // Use the validation function
  },
  {
    id: 6,
    title: prompt("enter task title"),
    description: prompt("enter task description"),
    status: getValidStatus(), // Use the validation function
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
