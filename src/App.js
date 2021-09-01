import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "what is react?",
    content: "react is a framework",
  },
  {
    title: "why use react?",
    content: "React is a favorite JS library",
  },
  {
    title: "how do you use react?",
    content: "to create components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
