import React from "react";

export default function Heading() {
  const date = new Date();
  const hours = date.getHours();
  var message = "";

  const customStyle = {
    color: "",
    borderBottom: "5px solid black"
  };

  if (hours < 12) {
    message = "Good Morning";
    customStyle.color = "red";
  } else if (hours < 18) {
    message = "Good Afternoon";
    customStyle.color = "green";
  } else {
    message = "Good Evening";
    customStyle.color = "blue";
  }

  return <h1 style={customStyle}> {message}</h1>;
}
