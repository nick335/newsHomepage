import gsap from "gsap"
import React from "react"


export default function FooterArticle({idx, image, header, summary,imgdivRef, contentdivRef, footeridxRef, footerheaderRef, footerparaRef }){

 



  return(
    <div className="flex mb-5 lg:max-w-[345px] lg:w-[345px] xl:mb-0">
      <div ref={ imgdivRef } className="min-w-[100px]  bg-black h-fit mr-4">
        <img src={ image } alt='articlw-img' className=" object-fill w-full h-[140px] "/>
      </div>
      <div  ref={ contentdivRef }  className=" flex flex-col justify-between">
        <h2 ref={ footeridxRef } className="text-3xl font-bold text-primaryTextColor ">{idx}</h2>
        <h3 ref={ footerheaderRef } className=" text-lg font-semibold my-auto text-primaryHeaderColor lg:cursor-pointer transition-colors duration-150 ease-in lg:hover:text-secondaryHighlightColor">{ header }</h3>
        <p ref= { footerparaRef } className="leading-[1.55] font-medium text-[16px] text-secondaryTextColor">{ summary }</p>
      </div>
    </div>
  )
}