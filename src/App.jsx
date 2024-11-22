import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MultiStepForm from "./pages/MultiStepForm";
import { Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen">
      <Typography variant="h3" style={{ fontFamily : "Peggy , sans-serif"}}>MultiStep Form</Typography>
      <MultiStepForm />
    </div>
  );
}

export default App;
