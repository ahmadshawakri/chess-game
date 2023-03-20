import React from "react";
import "./History.css";
import { useSelector } from "react-redux";
export const History = () => {
  const { history } = useSelector((state) => state);
  return (
    <div className="historyCont">
      <h3>Game Info</h3>
      <table className="gameInfoTable">
        <thead>
          <tr>
            <td>
              <span>Step</span>
            </td>
            <td>
              <span>Player</span>
            </td>
            <td>
              <span>Move</span>
            </td>
          </tr>
        </thead>
        <tbody>
          {history.map((element, index) => (
            <tr key={index}>
              <td>
                <span>{index + 1}</span>
              </td>
              <td>
                <span>{element.player}</span>
              </td>
              <td>
                <span>{element.movement}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
