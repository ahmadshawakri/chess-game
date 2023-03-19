import React from "react";
import { useSelector } from "react-redux";
export const History = () => {
  const { history } = useSelector((state) => state);
  return (
    <div>
      {history.map((element, index) => (
        <h1 key={index}>{element}</h1>
      ))}
    </div>
  );
};
