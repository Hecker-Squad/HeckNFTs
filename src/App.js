import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prodinfo from "./components/Prodinfo.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Landing from "./components/Landing.js";
import UserAcc from "./components/UserAcc.js";
import Main from "./components/Main.js";
import Forms from "./components/Forms.js";

function App() {
  return (
    <div className="App h-fit">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Main />} />
          <Route path="/userInfo" element={<UserAcc />} />
          <Route path="/prodinfo" element={<Prodinfo />} />
          <Route path="/create" element={<Forms />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
