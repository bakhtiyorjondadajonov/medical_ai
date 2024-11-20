import Header from "./components/header/Header.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import About from "./components/About/About.jsx";
import SectionContainer from "./components/SectionContainer/SectionContainer.jsx";
import SectionTitle from "./components/SectionTitle/SectionTitle.jsx";
import Services from "./components/Services/Services.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Header />
      <Services />
    </>
  );
}
export default App;
