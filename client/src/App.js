import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prodinfo from "./Components/Prodinfo.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Landing from "./Components/Landing.js";
import UserAcc from "./Components/UserAcc.js";
import Main from "./Components/Main.js";
import Forms from "./Components/Forms.js";
import Card from "./Components/Card.js";


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
