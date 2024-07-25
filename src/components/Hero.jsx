import React from 'react'
import styles from '../style';
import {pfp} from '../assets';

const Hero = () => {
  return (
    
    
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px=0 sm:px-0 px-0`}>

            <div className='flex flex-row items-center py-[10px] px-4 bg-discount-gradient rounded-[10px] mb-14 '>
              <p className={`${styles.tagline} ml-4`}>
                <span className='text-white'>Senior </span>Automation Engineer {" "}
                  <span className='text-white'>in</span> Healthcare {" "}
                  <span class="animate-ping ml-2 mb-4 inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </p>
            </div>

            <div className='flex flex-row justify-between items-center w-full mb-3'>
              <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[70px] leading-[40px]'>
              
              <span className="text-gradient ">Rahul Ramesh</span>{" "}
              </h1>
            </div>

            <h1 className='font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[57px] leading-[55px] w-full'>
                  Texas based, Global minded. 🌎
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-8`}>
              B.S. in Computer Science from the University of Texas at Dallas,
              <span className='text-gradient'> 5+ years</span> creating Javascript bots, web projects, & trying to climb rocks better 🤙🏾.
            </p>
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} md:my-60 my-10 relative`}>
              <img src={pfp} alt="profilepic" className='w-[80%] h-[100%] relative z-[5] rounded-full'/>
          
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom_40 '></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
          
          </div>

      </section>


  )
}

export default Hero