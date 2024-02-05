import Header from "./components/Header/Header.tsx";
import Landing from "./components/Landing/Landing.tsx";
import Ratings from "./components/Ratings/Ratings.tsx";
import "./App.css";
import PartnerOrganization from "./components/PartnerOrganization/PartnerOrganization.tsx";
import Path from "./components/Path/Path.tsx";
import Team from "./components/Team/Team.tsx";
import Call from "./components/Call/Call.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Domains from "./components/OurServices/Domains.tsx";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Domains />
      <PartnerOrganization />
      <Ratings />
      <Path />
      <Team />
      <Call />
      <Footer />
    </>
  );
}

export default App;
