import Baner from "./components/sections/Baner";
import Navigation from "./components/sections/Navigation";
import Footer from "./components/sections/Footer";
import Form from "./components/sections/Form";
import Questionnaire from "./components/sections/Questionnaire";
import Summary from "./components/sections/Summary";

const App = () => {
  return (
    <>
      <Navigation />
      <Baner />
      <Questionnaire />
      <Summary />
      <Form />
      <Footer />
    </>
  );
};

export default App;
