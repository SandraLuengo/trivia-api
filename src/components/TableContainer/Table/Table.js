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
      <table className="table">
        <thead>
          <tr>
            <th>
              ID <i className="table__sort fa fa-sort" />
            </th>
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
                  <td className="table__id">{i}</td>
                  <td className="table__category">{questions.category}</td>
                  <td className="table__type">{questions.type}</td>
                  <td className="table__difficulty">{questions.difficulty}</td>
                  <td className="table__question">{questions.question}</td>
                  <td className="table__created">Sandra</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
