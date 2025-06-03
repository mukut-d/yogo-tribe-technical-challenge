import { useState } from "react";

const baseUrl = "https://catfact.ninja/fact";

const App = () => {
  const [fact, setFact] = useState("This is just placeholder for random fact");

  const fetchFactsHandler = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();

      if (data?.length > 0) {
        setFact(data?.fact);
      }
    } catch (error) {
      console.log("Failed to fetch random Facts: " + error);
    }
  };

  return (
    <div className="root">
      My Random Facts App
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span className="factBox">{fact}</span>
        <button onClick={fetchFactsHandler}>Get Fact</button>
      </div>
    </div>
  );
};

export default App;
