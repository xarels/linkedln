import React, {useEffect} from "react";
import {
  Card,
} from "@aws-amplify/ui-react";
function PersonCard(props) {
  return <Card variation="elevated"><h3>{props.value.name}</h3><a>{props.value.email}</a></Card>; 
};
export default PersonCard;