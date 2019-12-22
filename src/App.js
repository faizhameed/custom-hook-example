import React from "react";

import User from "./components/user/user.component";
import Post from "./components/post/post.component";

import "./App.css";
import UseEffectExample from "./components/use-effect-example/use-effect-example.component";

const App = props => {
  return (
    <div className="App">
      <UseEffectExample />
    </div>
  );
};

export default App;
