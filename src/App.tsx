import Header from "./components/Header.tsx";
import Landing from "./components/Landing.tsx";
import Ratings from "./components/Ratings/Ratings.tsx";
import PageTwo from "./components/PageTwo.tsx";
import PageTwoExtend from "./components/PageTwoExtend.tsx";
import "./App.css";
import PartnerOrganization from "./components/PartnerOrganization.tsx";
import Path from "./components/Path/Path.tsx";
import Team from "./components/Team/Team.tsx";
import Call from "./components/Call/Call.tsx";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <PageTwo />
      <PageTwoExtend />
      <PartnerOrganization />
      <Ratings />
      <Path />
      <Team />
      <Call />
    </>
  );
}

export default App;
