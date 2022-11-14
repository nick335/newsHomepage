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
  const herosubheaderRef = React.useRef();
  const heropara = React.useRef();
  const herobtn = React.useRef();
  const asideheaderRef = React.useRef();
  const asidesubheaderRef1 = React.useRef();
  const asidesubheaderRef2 = React.useRef();
  const asidesubheaderRef3 = React.useRef();
  const asidesubparaRef1 = React.useRef();
  const asidesubparaRef2 = React.useRef();
  const asidesubparaRef3 = React.useRef();
  const imgdivRef1 = React.useRef()
  const imgdivRef2= React.useRef()
  const imgdivRef3 = React.useRef()
  const contentdivRef1 = React.useRef()
  const contentdivRef2 = React.useRef()
  const contentdivRef3 = React.useRef()
  const footeridxRef1 = React.useRef()
  const footeridxRef2 = React.useRef()
  const footeridxRef3 = React.useRef()
  const footerheaderRef1 = React.useRef()
  const footerheaderRef2 = React.useRef()
  const footerheaderRef3 = React.useRef()
  const footerparaRef1 = React.useRef()
  const footerparaRef2 = React.useRef()
  const footerparaRef3 = React.useRef()

  const listIntialani = {
    opacity:0, 
    y:-17, 
  }
  const listFinalani1= {
    y:0,
    opacity:1,
    duration:0.19,
    ease:"bounce-in"
  }
  const asidesubheaderIntialani = {
    opacity:0, 
    y:-10
  }

  const asidesubheaderFinalani = {
    opacity:1,
     y:0,
    duration:0.2, 
    ease:"bounce-in"
  }

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
const footerimgdiv = [
  imgdivRef1,imgdivRef2,imgdivRef3
]
const footercontentdiv = [
  contentdivRef1,contentdivRef2,contentdivRef3
]
const footerheader = [
  footerheaderRef1,footerheaderRef2,footerheaderRef3
]
const footerpara = [
  footerparaRef1,footerparaRef1,footerparaRef3
]
const footeridx = [
  footeridxRef1,footeridxRef2,footeridxRef3
]
  React.useEffect(() => {
    const tl = gsap.timeline({defaults:{duration: 1}});
    tl.fromTo(logoRef.current, {opacity: 0, scale:0}, {opacity:1, scale:1, duration:0.4})
    tl.fromTo(item1Ref.current, listIntialani, listFinalani1)
    tl.fromTo(item2Ref.current, listIntialani, listFinalani1, "-=0.1")
    tl.fromTo(item3Ref.current, listIntialani, listFinalani1, "-=0.1")
    tl.fromTo(item4Ref.current, listIntialani, listFinalani1, "-=0.1")
    tl.fromTo(item5Ref.current, listIntialani, listFinalani1, "-=0.1")
    tl.fromTo(heroImgref.current, {opacity:0,}, {opacity:1, duration:0.5, ease:"bounce-out" })
    tl.fromTo(asideRef.current, {opacity: 0, y:100,}, {opacity:1, y:0, stagger:0.6, duration:0.3, ease:"bounce-in"}, "-=0.5")
    tl.fromTo(asideheaderRef.current, asidesubheaderIntialani, {opacity:1, y:0, duration:0.3, ease:"bounce-in"})
    tl.fromTo(asidesubheaderRef1.current, asidesubheaderIntialani, asidesubheaderFinalani, "-=0.2")
    tl.fromTo(asidesubheaderRef2.current, asidesubheaderIntialani, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubheaderRef3.current, asidesubheaderIntialani, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubparaRef1.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubparaRef2.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(asidesubparaRef3.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.2, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(herosubheaderRef.current, {opacity:0, scaleY:0}, {opacity:1, scaleY:1, duration:0.2, ease:"bounce-out"}, "-=0.2")
    tl.fromTo(heropara.current, {opacity:0, scale:0},{opacity:1, scale:1, duration:0.2, ease:"bounce-in"},"-=0.2")
    tl.fromTo(herobtn.current, {opacity:0, y:-50 }, {opacity:1, y:0, duration:0.4, ease:"bounce-in"}, "-=0.2")
    tl.fromTo(imgdivRef1.current, {width:"345px", opacity:0}, {opacity:1,width:"100px", duration:1, ease:"bounce-out"}, )
    tl.fromTo(imgdivRef2.current, {width:"345px",opacity:0}, {opacity:1, width:"100px", duration:1, ease:"bounce-out"},"-=1" )
    tl.fromTo(imgdivRef3.current, {width:"345px",opacity:0}, {opacity:1, width:"100px", duration:1, ease:"bounce-out"},"-=1" )
    tl.fromTo(contentdivRef1.current, {display:"none"}, {display:"flex", duration:0.2,})
    tl.fromTo(contentdivRef2.current, {display:"none"}, {display:"flex", duration:0.2,}, "-=0.2")
    tl.fromTo(contentdivRef3.current, {display:"none"}, {display:"flex", duration:0.2,}, "-=0.2")
    tl.fromTo(footeridxRef1.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"})
    tl.fromTo(footeridxRef2.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-0.3")
    tl.fromTo(footeridxRef3.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-0.3")
    tl.fromTo(footerheaderRef1.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-=0.3")
    tl.fromTo(footerheaderRef2.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-=0.3")
    tl.fromTo(footerheaderRef3.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-=0.3")
    tl.fromTo(footerparaRef1.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-=0.3")
    tl.fromTo(footerparaRef2.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-=0.3")
    tl.fromTo(footerparaRef3.current, {opacity:0, y:10}, {opacity:1, y:0, duration:0.3, ease:"bounce-in"}, "-=0.3")
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
          herosubheaderRef = { herosubheaderRef }
          heropara = { heropara }
          herobtn = { herobtn }

      />
      <Footer 
        imgdiv = { footerimgdiv }
        contentdiv = { footercontentdiv }
        footerheaders = { footerheader }
        footeridxs = { footeridx }
        footerparas = { footerpara }
      />
    </div>
  )
}