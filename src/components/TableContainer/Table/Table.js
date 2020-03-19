import React, { useState, useEffect } from "react";
import { tableTitle } from "../../../languages/en";
import { useGlobalState } from ".././../../state/useGlobalState";
import { getQuestions } from "../../../services/questionsService";

const Table = ({ className }) => {
  const [{ token }] = useGlobalState();
  const [questions, setQuestions] = useState(false);
  useEffect(() => {
    getQuestions(token).then(questions => setQuestions(questions));
  }, [token]);
  return (
    <div className={className}>
      <h1>{tableTitle}</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Type</th>
            <th>Difficulty</th>
            <th>Question / Statement</th>
            <th>Created By</th>
          </tr>
        </thead>
        <tbody>
          {questions &&
            questions.map((questions, i) => {
              return (
                <tr key={`row-${i}`}>
                  <td>{i}</td>
                  <td>{questions.category}</td>
                  <td>{questions.type}</td>
                  <td>{questions.difficulty}</td>
                  <td >{questions.question}</td>
                  <td className='table__created'>Sandra</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
