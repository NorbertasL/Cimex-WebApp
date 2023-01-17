import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth";
import Header from "./components/Header";
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
