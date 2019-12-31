import React, { useState, useEffect } from "react";
import "./use-effect.styles.css";
import Card from "../card/card.component";

const UseEffectExample = () => {
  const [user, setUser] = useState(null);
  const [favourite, setFavourite] = useState([]);
  /*  useEffect(() => {}, [favourite]); */
  const addFavourite = item => {
    setFavourite([...favourite, item]);
  };
  const removeFavourite = item => {
    let temp = favourite.filter(post => post !== item);
    setFavourite([...temp]);
  };

  const fetchFunc = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5`
    );
    const resJson = await response.json();
    setUser(resJson);
    if (user) console.log("fetching runs", user[0].name);
  };

  return (
    <>
      <div className="grid-display">
        {user
          ? user.map(item => {
              return (
                <Card key={item.id}>
                  <div>
                    <h3>{item.id}</h3>
                    <h3> {item.title} </h3>
                    <h3> {item.body} </h3>
                  </div>
                  <button onClick={() => addFavourite(item)}>Favourite</button>
                </Card>
              );
            })
          : null}
      </div>
      <button onClick={fetchFunc}>Fetch</button>
      {
        <div className="grid-display">
          {favourite
            ? favourite.map(item => {
                return (
                  <Card key={item.id}>
                    <div>
                      <h3>{item.id}</h3>
                      <h3> {item.title} </h3>
                      <h3> {item.body} </h3>
                    </div>
                    <button onClick={() => removeFavourite(item)}>
                      Remove
                    </button>
                  </Card>
                );
              })
            : null}
        </div>
      }
    </>
  );
};

export default UseEffectExample;
