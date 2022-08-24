import React from "react";
import data from "../data";
import Item from "../Components/ScoreList";
//import Accordion from "../Components/Accordion";

export default function Scores() {
  return <Item value={data} />;
//return <Accordion value={data} />;
}
