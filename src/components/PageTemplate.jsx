import Footer from "./footer/footer";
import Nav from "./header/nav";
import Hero from "./herosection/hero";
import { gsap } from "gsap";
import React from "react";


export default function PageTemplate(){
  const logoRef = React.useRef();
  const item1Ref = React.useRef();
  const item2Ref = React.useRef();
  const item3Ref = React.useRef();
  const item4Ref = React.useRef();
  const item5Ref= React.useRef();
  const heroImgref = React.useRef();
  const asideRef = React.useRef();
  const herosubheadeRef = React.useRef();
  const asideheaderRef = React.useRef();
  const asidesubheaderRef1 = React.useRef();
  const asidesubheaderRef2 = React.useRef();
  const asidesubheaderRef3 = React.useRef();
  const asidesubparaRef1 = React.useRef();
  const asidesubparaRef2 = React.useRef();
  const asidesubparaRef3 = React.useRef();
  


  const asidesubheaders = [
    asidesubheaderRef1,
    asidesubheaderRef2,
    asidesubheaderRef3,
  ]
  const asidepara = [
    asidesubparaRef1,
    asidesubparaRef2,
    asidesubparaRef3
  ]

  React.useEffect(() => {
    const tl = gsap.timeline({defaults:{duration: 1}});
    tl.fromTo(logoRef.current, {opacity: 0, scale:0}, {opacity:1, scale:1, duration:0.4})
    tl.fromTo(item1Ref.current, {opacity:0, y:-17, stagger:0},{opacity:1, y:0, duration:0.19, ease:"bounce-in", stagger:0.5 })
    tl.fromTo(item2Ref.current, {opacity:0, y:-17, stagger:0.1},{opacity:1, y:0, duration:0.19, ease:"bounce-in", stagger:0.1 }, "-=0.1")
    tl.fromTo(item3Ref.current, {opacity:0, y:-17, stagger:0.1},{opacity:1, y:0, duration:0.19, ease:"bounce-in", stagger:0.1 }, "-=0.1")
    tl.fromTo(item4Ref.current, {opacity:0, y:-17, stagger:0.1},{opacity:1, y:0, duration:0.19, ease:"bounce-in", stagger:0.1 }, "-=0.1")
    tl.fromTo(item5Ref.current, {opacity:0, y:-17, stagger:0.1},{opacity:1, y:0, duration:0.19, ease:"bounce-in", stagger:0.1 }, "-=0.1")
    tl.fromTo(heroImgref.current, {opacity:0,}, {opacity:1, duration:0.5, ease:"bounce-out" })
    tl.fromTo(asideRef.current, {opacity: 0, y:100,}, {opacity:1, y:0, stagger:0.6, duration:0.3, ease:"bounce-in"}, "-=0.5")
    tl.fromTo(asideheaderRef.current, {opacity:0, y:-10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"})
    tl.fromTo(asidesubheaderRef1.current, {opacity:0, y:-10, autoAlpha:0}, {opacity:1, y:0, autoAlpha:1, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubheaderRef2.current, {opacity:0, y:-10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubheaderRef3.current, {opacity:0, y:-10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubparaRef1.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubparaRef2.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubparaRef3.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
  },);



  return(
    <div className=" overflow-hidden w-11/12 mx-auto xl:w-10/12">
      <Nav 
          logoRef = { logoRef }
          item1Ref = { item1Ref }
          item2Ref = { item2Ref }
          item3Ref = { item3Ref }
          item4Ref = { item4Ref }
          item5Ref = { item5Ref }
      />
      <Hero 
          heroImgref = { heroImgref }
          asideRef = { asideRef }
          asideheaderRef = { asideheaderRef }
          asidesubheaders = { asidesubheaders }
          asidepara = {asidepara}

      />
      <Footer />
    </div>
  )
}