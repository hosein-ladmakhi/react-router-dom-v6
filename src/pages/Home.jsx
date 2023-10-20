import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = (props) => {
  const data = useLoaderData();
  return (
    <div>
      <h1>Home</h1>
      {React.Children.toArray(data.map((d) => <p>{d.title}</p>))}
    </div>
  );
};

export default Home;
