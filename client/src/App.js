//import Prodinfo from "./Components/Prodinfo.js";
//import Navbar from "./Components/Navbar.js";
//import Footer from "./Components/Footer.js";
import Main from "./Components/Main.js";
//=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prodinfo from "./Components/Prodinfo.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Landing from "./Components/Landing.jsx";
import UserAcc from "./Components/UserAcc.js";
//>>>>>>> 67a0ba439bb9a151bdbd4b18a62657ed3793f311

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
