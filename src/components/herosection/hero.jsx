import mobileHeroImg from '../../assets/image-web-3-mobile.jpg';
import desktopHeroImg from '../../assets/image-web-3-desktop.jpg'
import data from './data'
import ArticleDiv from './article';
import { nanoid } from 'nanoid';

export default function Hero({heroImgref, asideRef, asideheaderRef,      asidesubheaders, asidepara, herosubheaderRef, heropara, herobtn }){
  const dataelements = data.map(each => {
    const idx = each.idx - 1
    return <ArticleDiv 
              key = {nanoid()}
              idx = {each.idx}
              header = {each.header}
              summary = {each.para}
              asidesubheaderRef ={ asidesubheaders[idx] }
              asideparaRef = { asidepara[idx]}
    />
  })
  return(
    <div className='pb-4 lg:flex xl:gap-5 lg:gap-3'>
      <section className='xl:w-[69%] lg:w-[63%]'>
        <div className=' lg:overflow-hidden'>
          <picture>
            <source ref={ heroImgref } media='(min-width: 1000px)' srcSet={ desktopHeroImg } />
            <img src={ mobileHeroImg } ref={ heroImgref } alt='mobile-img' className=' w-full h-full object-fill lg:cursor-pointer lg:hover:scale-150 lg:transition-transform lg:ease-out lg:duration-500'
            />
          </picture>
        </div>
        <div className='pt-5 lg:flex lg:pt-3 xl:gap-9 lg:gap-4'>
          <div> 
            <h2 ref={ herosubheaderRef } className=' text-[40px] lg:text-[43px] xl:text-[50px] xl:leading-[1] xl:max-w-xs lg:leading-[1.1] leading-[1.05] font-extrabold text-primaryHeaderColor'>The Bright Future of Web 3.0?</h2>
          </div>
          <div className='pt-3 pb-6 lg:pb-0 lg:max-w-[340px] lg:flex-col'>
            <p ref = { heropara } className='text-[15px] leading-6 font-normal text-secondaryTextColor xl:leading-5'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button ref = { herobtn } className='mt-5 text-primaryBgColor font-normal px-8 py-3 text-[15px] uppercase tracking-[0.23rem]  bg-secondaryHighlightColor lg:cursor-pointer lg:hover:bg-primaryHeaderColor lg:transition-colors lg:ease-in lg:duration-150'>Read more</button>
          </div>
        </div>
      </section>
      <aside ref={ asideRef } className=' xl:w-[31%] lg:w-[37%] bg-primaryHeaderColor py-6 px-[23px]'>
        <h2 ref={ asideheaderRef } className=' text-primaryHighlightColor font-bold text-3xl' >New</h2>
        { dataelements }
      </aside>
    </div>
  )
}