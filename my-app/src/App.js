import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Data from "./data";

export default function App() {
  const cards = Data.map((trip) => {
    return <Card key={trip.id} {...trip} />;
  });

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
