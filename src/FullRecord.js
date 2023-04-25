import React from "react";
import ProbHistory from "./ProbHistory";
import IncFactors from "./IncFactors";
import DecFactors from "./DecFactors";

export default function FullRecord({ card }) {
  const history = card.probabilityHistory !== null;
  const inWin = card.pilytixFactorsIncreasingWin !== null;
  const decWin = card.pilytixFactorsDecreasingWin !== null;

  return (
    <div className="card">
      <ul className="common--inf card--element">
        <li>Opp Name:</li>
        <li>{card.oppName}</li>
        <li>Opp Stage:</li>
        <li>{card.stage}</li>
        <li>Rep Probability:</li>
        <li>{card.repProbability}</li>
        <li>PX Probability:</li>
        <li>{card.pilytixProbability}</li>
        <li>PX Tier:</li>
        <li>{card.pilytixTier}</li>
        <li>Amount:</li>
        <li>{card.amount}</li>
        <li>Product:</li>
        <li>{card.product}</li>
        <li>Sales rep:</li>
        <li>{card.salesRepName}</li>
      </ul>
      {history && (
        <div className="prob--history card--element">
          <h3>Probability History</h3>
          <p>*in days before</p>
          <ProbHistory card={card} />
        </div>
      )}
      {inWin && (
        <div className="inc--win card--element">
          <h3>Pilytix Factors Increasing Win:</h3>
          <IncFactors card={card} />
        </div>
      )}
      {decWin && (
        <div className="dec--win card--element">
          <h3>Pilytix Factors Decreasing Win:</h3>
          <DecFactors card={card} />
        </div>
      )}
    </div>
  );
}
