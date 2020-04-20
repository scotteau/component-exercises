import React, { useState } from "react";

interface myProps {}

const LoginForm = (props: myProps) => {
  //region Style
  // const debug = `border border-red-500`;
  const input = `shadow border rounded w-full py-3 px-3 focus:outline-none focus:shadow-outline leading-tight`;
  const center = `container mx-auto`;
  const label = `mb-2 block`;
  const field = `mb-5`;
  const button = `font-bold py-3 px-5 bg-blue-500 text-white rounded hover:bg-blue-700`;
  const container = `${center} max-w-md p-8 flex-auto item-center shadow mt-8`;
  //endregion

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remembered, setRemembered] = useState("");

  const _state = { username, password, remembered };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(_state);
  };

  return (
    <div className={container}>
      <form className={`p-6`} onSubmit={handleSubmit}>
        <div className={field}>
          <label className={`${label}`}>Username:</label>
          <input
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            className={input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`mb-5`}>
          <label className={label}>Password:</label>
          <input
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            className={input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={field}>
          <label>
            <input
              type={"checkbox"}
              className={"mr-2 leading-tight"}
              value={remembered}
              onClick={() => setRemembered("yes")}
            />
            Remember me
          </label>
        </div>
        <button type={"submit"} className={button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
