import React from "react";
import data from "./data";
import Question from "./Question";

export default function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((question) => {
            return <Question id={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
