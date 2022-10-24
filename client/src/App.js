import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prodinfo from "./components/Prodinfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import UserAcc from "./components/UserAcc";

function App() {
  return (
    <div className="App h-fit">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/userInfo" element={<UserAcc />} />
          <Route path="/prodinfo" element={<Prodinfo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
