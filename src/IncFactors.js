import React from "react";

export default function IncFactors({ card }) {
  const factors = card.pilytixFactorsIncreasingWin;
  if (factors === null) {
    return <div>No data</div>;
  }

  return (
    <ul className="factors--list">
      {factors.map((factor, index) => (
        <li key={index}>
          <p>
            <span>{factor.name}</span>
          </p>
          <p>{factor.message}</p>
          <p
            className={`${factor.weight.value === 1 ? "weak--positive" : ""}${
              factor.weight.value === 2 ? "medium--positive" : ""
            }${factor.weight.value === 3 ? "strong--positive" : ""}`}
          >
            {factor.weight.value} | {factor.weight.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
