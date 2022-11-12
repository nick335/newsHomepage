

export default function ArticleDiv(props){
  return(
    <div className={`${ 
      props.idx === 1 || props.idx === 2 ? ' pb-6 xl:pb-7 border-b  border-primaryBgColor' : ''
    } pt-6 xl:pt-7 `}>
      <h3  ref={ props.asidesubheaderRef } className="ani1 text-primaryBgColor text-xl font-bold lg:cursor-pointer lg:hover:text-primaryHighlightColor lg:transition-colors lg:ease-in lg:duration-150">{ props.header }</h3>
      <p ref={props.asideparaRef} className="text-primaryTextColor pt-2 text-[15px] leading-[1.6]">{ props.summary }</p>
    </div>
  )
}