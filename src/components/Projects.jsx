import React from 'react'
import styles from '../style';
import {coffee} from '../assets';

const Projects = () => {
  return (
    
      <section id='projects' className={`flex md:flex-row flex-col ${styles.paddingProjectsY} ${styles.paddingX}`}>

          <div className={`flex-1 flex-col xl:px=0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[35px] leading-[35px] w-full'>
                  Drink a lot of caffeine? <br></br> 
                  <img src={coffee} alt="coffeesite" onClick={() => window.open('https://coffee-time-ochre.vercel.app/')} className={`w-[80%] h-[100%] ${styles.paddingY} relative z-[5] cursor-pointer`}/>
                  <a href='https://coffee-time-ochre.vercel.app/' target="_blank">
                  <p className={`${styles.paragraph} max-w-[500px] mt-8`} >Checkout how long that ☕ lasts</p>
                  </a>
            </h1>
          </div>

          <div className={`flex-1 flex-col xl:px=0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[35px] leading-[35px] w-full'>
                  Data & insights <br></br> 
                  <p className={`${styles.paragraph} max-w-[500px] mt-8`}>W I P ! ⚠️ </p>
            </h1>
          </div>

          <div className={`flex-1 flex-col xl:px=0 sm:px-0 px-0`}>
            <h1 className='font-poppins font-semibold ss:text-[30px] text-[30px] text-white ss:leading-[35px] leading-[35px] w-full'>
                  Media Projects <br></br> 
                  <p className={`${styles.paragraph} max-w-[500px] mt-8`}>W I P ! ⚠️ </p>
            </h1>
          </div>
          
      </section>

  )
}

export default Projects