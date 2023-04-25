import "./styles.css";
import BasicTable from "./Table";
import { React, useState, useEffect } from "react";
import MyModal from "./MyModal";

import * as opportunities from "./opportunities.json";

export default function App() {
  const data = opportunities.default;
  const [visible, setVisible] = useState(false);
  const [card, setCard] = useState({});

  function leftCard() {
    if (card.oppId === 1) {
      setCard(data[data.length - 1]);
    } else {
      setCard(data[card.oppId - 2]);
    }
  }

  function rightCard() {
    if (card.oppId === data.length) {
      setCard(data[0]);
    } else {
      setCard(data[card.oppId]);
    }
  }

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <div className="App">
      {visible && (
        <MyModal
          card={card}
          setVisible={setVisible}
          rightCard={rightCard}
          leftCard={leftCard}
        />
      )}

      <h2>PILYTIX Scored Opportunities</h2>
      <BasicTable setCard={setCard} setVisible={setVisible}></BasicTable>
    </div>
  );
}
