import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Route, Routes } from "react-router";
import { AdminPanel } from "./Pages/Admin/AdminPanel";
import { AdminLogin } from "./Pages/Admin/AdminLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel/>}/>
      </Routes>
    </div>
  );
}

export default App;
