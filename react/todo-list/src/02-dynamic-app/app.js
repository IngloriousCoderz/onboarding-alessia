import { useState } from "react";
import classNames from "classnames";

import classes from "./app.module.scss";

const INITIAL_TASKS = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Look for a job", completed: false },
  { id: 3, text: "Forget everything" },
];

function App({ name }) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    // clone
    // const clone = [...tasks];
    // const newTask = { id: 4, text: "New Task" };
    // clone.push(newTask);
    // setTasks(clone);

    // sandwich
    setTasks((tasks) => {
      const maxId = tasks.length ? tasks[tasks.length - 1].id : 0;
      return [...tasks, { id: maxId + 1, text }];
    });

    setText("");
  };

  const handleSpanClick = (id) => {
    // clone
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   const clone = [...tasks];
    //   const task = { ...clone[index] };
    //   task.completed = !task.completed;
    //   return clone;
    // });

    // sandwich
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   const task = tasks[index];
    //   return [
    //     ...tasks.slice(0, index),
    //     { ...task, completed: !task.completed },
    //     ...tasks.slice(index + 1),
    //   ];
    // });

    // array method
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleButtonClick = (id) => {
    // clone
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   const clone = [...tasks];
    //   clone.splice(index, 1);
    //   return clone;
    // });

    // sandwich
    // setTasks((tasks) => {
    //   const index = tasks.findIndex((task) => task.id === id);
    //   return [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    // });

    // array method
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>{name}'s Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What next?"
          autoFocus
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(({ id, text, completed }) => (
          <li key={id}>
            <span
              className={classNames({ [classes.completed]: completed })}
              onClick={() => handleSpanClick(id)}
            >
              {text}
            </span>
            &nbsp;
            <button onClick={() => handleButtonClick(id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
