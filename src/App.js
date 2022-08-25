import "@aws-amplify/ui-react/styles.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Scores from "./pages/Scores";
import Experts from "./pages/Experts";
import Skills from "./pages/Skills";
import { Route, Routes } from "react-router-dom";
import { withAuthenticator, Image } from "@aws-amplify/ui-react";
import Logo from "./RELX 1 (LOGO).svg";

function App({ signOut }) {
  //	<Button onClick={signOut}>Sign Out</Button>
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Scores" element={<Scores />} />
          <Route path="/Experts" element={<Experts />} />
        </Routes>
      </div>
      <div><div className="logo_holder"><Image src={Logo} className="homelogo" alt="RELINK" /></div></div>;
    </>
  );
}

export default withAuthenticator(App);
