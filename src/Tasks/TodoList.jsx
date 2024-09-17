import React, { useEffect } from 'react';

export default function TodoList() {
  const [title, setTitle] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    // Load tasks from localStorage when the component mounts
    const storedTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const task = JSON.parse(localStorage.getItem(key));
      storedTasks.push(task);
    }
    setTasks(storedTasks);
  }, []);

  const handleTask = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      title,
      description: desc,
      completed: false,
    };
    localStorage.setItem(task.id, JSON.stringify(task));
    setTasks([...tasks, task]);
    setTitle('');
    setDesc('');
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
        localStorage.setItem(task.id, JSON.stringify(task));
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    localStorage.removeItem(taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Enter task title</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <h2>Enter description</h2>
      <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <br />
      <button onClick={handleTask}>Save</button>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span>{task.title}: {task.description}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
