import Image from "next/image";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductList from "./components/ProductList";
import ExtraProduct from "./components/ExtraProduct";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <ProductList/>
      <ExtraProduct/>
      <Footer/>
      

    </main>
  );
}
