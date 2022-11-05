import Footer from "./footer/footer";
import Nav from "./header/nav";
import Hero from "./herosection/hero";


export default function PageTemplate(){
  return(
    <div className=" overflow-hidden w-11/12 mx-auto xl:w-10/12">
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}