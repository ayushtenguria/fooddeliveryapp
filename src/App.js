/**Modules */
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

/**Components */
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import CreateContainer from "./components/CreateContainer";

/**static Files */
import "./App.css";

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto bg-slate-300 flex flex-col">
        <Header />

        <Routes>
          <Route path="./*" element={<MainContainer />} />
          <Route path="./createItem" element={<CreateContainer />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
