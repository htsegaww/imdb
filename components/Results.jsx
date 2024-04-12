import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.title}>
            <h1>{result.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
