import React, { useState } from "react";

interface Item {
  name: string;
  completed: boolean;
}

interface ListItemProps {
  name: string;
  completed: boolean;
  onCompleted: any;
  index: number;
}

const ListItem = ({ name, completed, onCompleted, index }: ListItemProps) => {
  return (
    <div className="item py-2">
      <input
        type={"checkbox"}
        onChange={() => {
          onCompleted({ name: name, completed: !completed }, index);
        }}
        checked={completed}
        className={"mr-2 text-xl"}
      />
      <span
        className={`text-lg ${completed ? "line-through text-gray-500" : ""}`}
      >
        {name}
      </span>
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

  const handleCompleted = (newItem: Item, index: number) => {
    const update = things.map((previous, i) =>
      i === index ? newItem : previous
    );
    setThings(update);
  };

  const renderList = () => {
    return things.map((item, index) => (
      <ListItem
        name={item.name}
        completed={item.completed}
        key={index}
        onCompleted={handleCompleted}
        index={index}
      />
    ));
  };

  const addTask = (e: any) => {
    e.preventDefault();
    setThings([{ name: task, completed: false }, ...things]);
    setTask("");
  };

  return (
    <div className={"container mx-auto max-w-xs mt-20"}>
      <h1 className={"text-center mb-6 font-bold text-xl"}>Todo List</h1>
      <div className="field">
        <form onSubmit={addTask}>
          <input
            type={"text"}
            placeholder={"Add your todo"}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className={
              "px-4 py-3 focus:shadow-outline w-full bg-gray-200 border-2"
            }
          />
        </form>
      </div>
      <div className={"list mt-5 px-4"}>{renderList()}</div>
    </div>
  );
};

export default App;
