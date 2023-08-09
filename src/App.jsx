import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Team from "./pages/team/team";
import Opportunity from "./pages/opportunity/opportunity";
import Faq from "./pages/faq/faq";
import Contact from "./pages/contact/contact";
import GetInvolved from "./pages/get-involved/get-involved";

function App() {
  return (
    <div className="">
      <div></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
