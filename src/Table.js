import { React, useState, useEffect } from "react";
import DesktopTable from "./DesktopTable";
import MobileTable from "./MobileTable";

export default function BasicTable({ setCard, setVisible }) {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 810);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 810)
    );
    return () => {
      window.removeEventListener("resize", () =>
        setIsMobile(window.innerWidth < 810)
      );
    };
  });

  function handleRowClick(event, row) {
    setCard(row);
    setVisible(true);
  }

  return (
    <div className="table">
      {isMobile ? (
        <MobileTable handleRowClick={handleRowClick} />
      ) : (
        <DesktopTable handleRowClick={handleRowClick} />
      )}
    </div>
  );
}
