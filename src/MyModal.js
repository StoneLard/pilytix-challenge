import { React, useEffect } from "react";
import FullRecord from "./FullRecord";

export default function MyModal(props) {
  function keyHandler({ key }) {
    if (key === "ArrowRight") {
      props.rightCard();
    }
    if (key === "ArrowLeft") {
      props.leftCard();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  return (
    <div className="modal" onClick={() => props.setVisible(false)}>
      <div className="modal--content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => props.setVisible(false)}
          className="close--button"
        >
          X
        </button>
        <div className="cards--control">
          <button className="btn btn--prev" onClick={() => props.leftCard()}>
            prev
          </button>
          <button className="btn btn--next" onClick={() => props.rightCard()}>
            next
          </button>
        </div>
        <FullRecord card={props.card} />
      </div>
    </div>
  );
}
