import logo from '../../assets/logo.svg';
import React from 'react';
export default function Nav(){

  const [menu, setMenu] =React.useState(false)

  function toggleMenu(){
    setMenu(prev => !prev)
  }

  return(
    <nav className='flex items-center justify-between py-6 lg:py-0 lg:my-10 lg:items-end'>
      <div>
        <img alt='logo' src = { logo } className=' object-cover w-13 h-7 lg:w-16 lg:h-10' />
      </div>
      <div className={`fixed z-10 top-0 left-0 bg-modalBgColor h-screen w-screen overflow-hidden transition-all ease-in duration-300 ${
        menu ? 'block' : 'hidden'
      } lg:static lg:block lg:h-fit lg:w-fit lg:bg-transparent`}>
        <div className={ `absolute top-0 transition-all duration-300 delay-100 ease-in-out  h-screen  ml-auto w-[70%] bg-primaryBgColor overflow-hidden ${
          menu ? ' animate-[comeout_0.5s_ease-in-out_0.1s_both]' : 'animate-[goout_0.5s_ease-in-out_both]'
        } lg:static lg:w-fit lg:h-fit lg:bg-transparent`}>
          <ul className=' pt-36 lg:pt-0 lg:flex'>
            <li className=' pb-4 lg:pb-0 lg:cursor-pointer lg:text-[15px] hover:text-secondaryHighlightColor lg:pl-0 lg:ml-8 lg:transition-colors lg:ease-in lg:duration-150 text-base font-medium pl-8 text-primaryHeaderColor '>Home</li>
            <li className=' pb-4 lg:pb-0 lg:cursor-pointer lg:text-[15px] hover:text-secondaryHighlightColor lg:pl-0 lg:ml-8 lg:transition-colors lg:ease-in lg:duration-150 text-base font-medium pl-8 text-primaryHeaderColor '>New</li>
            <li className=' pb-4 lg:pb-0 lg:cursor-pointer lg:text-[15px] hover:text-secondaryHighlightColor lg:pl-0 lg:ml-8 lg:transition-colors lg:ease-in lg:duration-150 text-base font-medium pl-8 text-primaryHeaderColor '>Popular</li>
            <li className=' pb-4 lg:pb-0 lg:cursor-pointer lg:text-[15px] hover:text-secondaryHighlightColor lg:pl-0 lg:ml-8 lg:transition-colors lg:ease-in lg:duration-150 text-base font-medium pl-8 text-primaryHeaderColor '>Trending</li>
            <li className=' pb-4 lg:pb-0 lg:cursor-pointer lg:text-[15px] hover:text-secondaryHighlightColor lg:pl-0 lg:ml-8 lg:transition-colors lg:ease-in lg:duration-150 text-base font-medium pl-8 text-primaryHeaderColor '>Categories</li>
          </ul>
        </div>
      </div>
      <div className={`h-fit ${
        menu ? 'fixed top-7 right-[8.2%]' : ''
      } z-30 lg:hidden`} onClick={ toggleMenu }>
        <div className={ `h-[3px] w-9 bg-primaryHeaderColor transition-all ease-in-out duration-300 mb-1 ${
          menu ? ' translate-y-[7px] rotate-45' : ''
        } ` } ></div>
        <div className={`h-[3px] w-9 bg-primaryHeaderColor transition-all ease-in-out duration-300 mb-1 ${ 
          menu ? 'opacity-0' : ''
        } `}></div>
        <div className={`h-[3px] w-9 bg-primaryHeaderColor transition-all ease-in-out duration-300 mb-1 ${
          menu ? ' -translate-y-[7px] -rotate-45' : ''
        } `}></div>
      </div>
    </nav>
  )
}