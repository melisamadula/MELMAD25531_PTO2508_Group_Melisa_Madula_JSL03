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

console.log(initialTasks);
