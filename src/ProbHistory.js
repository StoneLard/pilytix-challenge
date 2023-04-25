import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function ProbHistory({ card }) {
  const history = card.probabilityHistory;

  return (
    <div className="prob--chart">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={history}>
          <XAxis dataKey="daysAgo" />
          <YAxis tickSize={3} interval={1} />
          <Bar dataKey="pilytixProb" stackId="b" fill="#74AEFA" />
          <Bar dataKey="repProb" stackId="b" fill="#4BDDB5" />
        </BarChart>
      </ResponsiveContainer>
      <div className="chart--desc">
        <span className="pilytix--prob"> - Pilytix Probability</span>
        <span className="rep--prob"></span> - Rep Probability
      </div>
    </div>
  );
}
