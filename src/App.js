import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState();

  const listTasks = data => {
      const loadedTasks = [];

      for(const task in data) {
          loadedTasks.push({id: task, text: data[task].text});
      }

      setTasks(loadedTasks);
  }

  const {isLoading, error, fetchTasks: sendRequest} = useHttp({url: "https://react-http-3952a-default-rtdb.firebaseio.com/tasks.json"}, listTasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
