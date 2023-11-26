/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import Home from "./pages/Home/Home";
import NotThing from "./pages/NotThing";

function App() {
    return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotThing />} />
                </Routes>
            </BrowserRouter>
    );
}

export default App;
