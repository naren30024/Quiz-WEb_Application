import { ChakraProvider } from "@chakra-ui/react";
import Header from "./componenets/Header";
import LandingSection from "./componenets/LandingSection";
import ProjectsSection from "./componenets/ProjectSection";
import ContactMeSection from "./componenets/ContactMeSection";
import Footer from "./componenets/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./componenets/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

