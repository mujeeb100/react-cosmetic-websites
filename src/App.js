import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import CarouselComponent from "./components/Carousel/Carousel";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import ServicesDermatology from "./components/ServicesDermatology/ServicesDermatology";
import EasyPayment from "./components/EasyPayment/EasyPayment";
import ServiceSergary from "./components/ServiceSergery/ServiceSergary";
import ServiceAesthetic from "./components/ServiceAesthetics/ServiceAesthetic";
// import Testimonials from "./components/Testimonials/Testimonials";
import Aboutus from "./components/AboutUs/Aboutus";
import Footer from "./components/Footer/Footer";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  return (
    <div className="App h-100">
      <NavbarComponent />
      <CarouselComponent />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <ServicesDermatology />
      <EasyPayment />
      <ServiceSergary />
      <ServiceAesthetic />
      {/* <Testimonials /> */}
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
