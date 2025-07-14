import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NPCEditor from "./pages/NPCEditor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/npcs" element={<NPCEditor />} />
    </Routes>
  );
}

export default App;
