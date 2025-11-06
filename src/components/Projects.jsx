import React from 'react'
import styles from '../style';
import {coffee, macros, wip} from '../assets';

const Projects = () => {
  return (
    
      <section id='projects' className={`flex md:flex-row flex-col gap-6 md:gap-10 items-start ${styles.paddingProjectsY} ${styles.paddingX}`}>

          <div className={`flex-1 flex flex-col xl:px-0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[25px] text-[25px] text-white ss:leading-[35px] leading-[35px] w-full'>
                  Drink caffeine? ☕  <br></br> 
                  <img src={coffee} alt="coffeesite" onClick={() => window.open('https://coffee-time-ochre.vercel.app/')} className={`w-[80%] h-[200px] object-contain ${styles.paddingY} relative z-[5] cursor-pointer`}/>
            </h1>
            <a href='https://coffee-time-ochre.vercel.app/' target="_blank">
              <p className={`${styles.paragraph} max-w-[500px] mt-8`} >Checkout how long that  lasts</p>
            </a>
          </div>

          <div className={`flex-1 flex flex-col xl:px-0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[25px] text-[25px] text-white ss:leading-[35px] leading-[35px] w-full'>
                  Calorie Calculator <br></br> 
                  <img src={macros} alt="macros" onClick={() => window.location.href = '#calculator'} className={`w-[80%] h-[200px] object-contain ${styles.paddingY} relative z-[5] cursor-pointer`}/>
            </h1>
            <p className={`${styles.paragraph} max-w-[500px] mt-8`} >Calculate your calore goals</p>
          </div>

          <div className={`flex-1 flex flex-col xl:px-0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[25px] text-[25px] text-white ss:leading-[35px] leading-[35px] w-full min-h-[120px]'>
                  Data & insights <br></br> 
                  <img src={wip} alt="wip" onClick={() => window.location.href = '#projects'} className={`w-[60%] h-[200px] object-contain ${styles.paddingY} relative z-[5] cursor-pointer`}/>
            </h1>
            <p className={`${styles.paragraph} max-w-[500px] mt-8`}>W I P ! ⚠️ </p>
          </div>

          <div className={`flex-1 flex flex-col xl:px-0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[25px] text-[25px] text-white ss:leading-[35px] leading-[35px] w-full min-h-[120px]'>
                  Media Projects <br></br> 
                  <img src={wip} alt="wip" onClick={() => window.location.href = '#projects'} className={`w-[60%] h-[200px] object-contain ${styles.paddingY} relative z-[5] cursor-pointer`}/>
            </h1>
            <p className={`${styles.paragraph} max-w-[500px] mt-8`}>W I P ! ⚠️ </p>
          </div>
          
      </section>

  )
}

export default Projects