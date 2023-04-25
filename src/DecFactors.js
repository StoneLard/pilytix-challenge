import React from "react";

export default function DecFactors({ card }) {
  const factors = card.pilytixFactorsDecreasingWin;
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
            className={`${factor.weight.value === -1 ? "weak--negative" : ""}${
              factor.weight.value === -2 ? "medium--negative" : ""
            }${factor.weight.value === -3 ? "strong--negative" : ""}`}
          >
            {factor.weight.value} | {factor.weight.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
