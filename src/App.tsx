import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { History } from "./routes/History";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Staff } from "./routes/Staff";
import { UnderConstruction } from "./routes/UnderConstruction";
import { Drawer } from "./components/Drawer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[#121212] w-screen center flex flex-col items-center text-white ">
      <BrowserRouter>
        <Header />
        <Drawer />
        <div className="bg-[#212121] px-12 py-6 w-full shadow-sm mb-16 shadow-black md:w-7/12 md:my-10 md:p-4 md:mb-0">
          <Routes>
            <Route path="/" element={<History />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/uc" element={<UnderConstruction />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
