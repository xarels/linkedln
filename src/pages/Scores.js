import React from "react";
import data from "../data";
import Item from "../Components/ScoreList";

export default function Scores() {
  return <Item value={data} />;
}
