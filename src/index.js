// index.jsに以下を記載する

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MyGrid } from "./MyGrid";


const App = () => {
  return (
    <div>
<h1>Parent component</h1>
<MyGrid></MyGrid>
    </div>
  )
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
