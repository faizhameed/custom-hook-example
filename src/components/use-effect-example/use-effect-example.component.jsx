import React, { useState, useEffect } from "react";

import Card from "../card/card.component";

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("Bret");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
      );
      const resJson = await response.json();
      setUser(resJson[0]);
      console.log("fetching runs");
    };

    fetchFunc();
  }, [searchQuery]);
  useEffect(() => {
    console.log("counting:", counter);
  }, [counter]);
  const addCount = () => {
    console.log("adding");
    setCounter(counter + 1);
  };

  return (
    <Card>
      <input
        type="search"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
      <p>{counter}</p>
      <button onClick={addCount}>count</button>
    </Card>
  );
};

export default UseEffectExample;
