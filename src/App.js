import Header from "./components/header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import About from "./components/About/About.jsx";
import SectionContainer from "./components/SectionContainer/SectionContainer.jsx";
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";
import Services from "./components/Services/Services.jsx";
import Features from "./components/Features/Features.jsx";
import Team from "./components/Team/Team.jsx";
import Connects from "./components/Connects/Connects.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Features />
      <Team />
      <Connects />
      <Footer />
    </>
  );
}
export default App;
