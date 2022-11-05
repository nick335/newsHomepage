

export default function FooterArticle({idx, image, header, summary }){
  return(
    <div className="flex mb-5 lg:max-w-[360px] xl:mb-0 ">
      <div className="min-w-[105px] w-105px bg-black h-fit mr-4">
        <img src={ image } alt='articlw-img' className=" object-fill w-full h-[140px] "/>
      </div>
      <div className=" flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-primaryTextColor ">{idx}</h2>
        <h3 className=" text-lg font-semibold my-auto text-primaryHeaderColor lg:cursor-pointer transition-colors duration-150 ease-in lg:hover:text-secondaryHighlightColor">{ header }</h3>
        <p className="leading-[1.55] font-medium text-[16px] text-secondaryTextColor">{ summary }</p>
      </div>
    </div>
  )
}