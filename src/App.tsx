import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header, Drawer } from "./components";
import { History, Rules, Staff, UnderConstruction } from "./routes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App w-screen center flex flex-col items-center text-white ">
      <BrowserRouter>
        <Header />
        <Drawer />
        <div className="bg-[#212121] px-12 py-6 w-full shadow-sm mb-16 shadow-black md:w-7/12 md:my-10 md:p-4 md:mb-0">
          <Routes>
            <Route path="/" element={<History />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/uc" element={<UnderConstruction />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
