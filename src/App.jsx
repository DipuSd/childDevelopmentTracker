import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import LoginPage from "./LoginPage";
import CreateAccountStep1 from "./CreateAccountStep1";
import CreateAccountStep2 from "./CreateAccountStep2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CreateAccountStep2 />
    </>
  );
}

export default App;
