import React, { useState } from "react";

interface Item {
  name: string;
  completed: boolean;
}

interface ListItemProps {
  name: string;
  completed: boolean;
}

const ListItem = ({ name, completed }: ListItemProps) => {
  const [done, setDone] = useState(completed);
  return (
    <div className="item">
      <input
        type={"checkbox"}
        checked={done}
        onChange={() => setDone(!completed)}
      />
      <span>{name}</span>
    </div>
  );
};

const App = () => {
  const [task, setTask] = useState("");
  const [things, setThings] = useState([
    { name: "Go to pharmacy", completed: false },
    { name: "Grab the milk", completed: false },
    { name: "Fix the tv", completed: false },
  ] as Item[]);

  const renderList = () => {
    return things.map((item, index) => (
      <ListItem name={item.name} completed={item.completed} key={index} />
    ));
  };

  const addTask = (e: any) => {
    e.preventDefault();
    setThings([{ name: task, completed: false }, ...things]);
    setTask("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <div className="field">
        <form onSubmit={addTask}>
          <input
            type={"text"}
            placeholder={"Add your todo"}
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
      </div>
      <div className={"list"}>{renderList()}</div>
    </div>
  );
};

export default App;
