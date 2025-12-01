import React from 'react'
import styles from '../style';
import {pfp} from '../assets';

const Hero = () => {
  return (
    
    
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
          <div className={`flex-1 ${styles.flexStart} flex-col xl:px=0 sm:px-0 px-0`}>

            <div className='flex flex-row items-center py-[10px] px-4 bg-discount-gradient rounded-[10px] mb-14 '>
              <p className={`${styles.tagline} ml-4`}>
                  <span className='text-white'>Automation | QA | Release</span> Engineer 
                  <span className="animate-ping ml-2 mb-4 inline-flex rounded-full h-2 w-2 bg-sky-500"></span> <br></br>
                  <span className='text-gradient text-white ss:text-[15px]'>[currently ➜ Telehealth]</span>
              </p>
            </div>

            <div className='flex flex-row justify-between items-center w-full mb-3'>
              <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[70px] leading-[40px]'>
              
              <span className="text-gradient ">Rahul Ramesh</span>{" "}
              </h1>
            </div>

            <h1 className='font-poppins font-semibold ss:text-[50px] text-[60px] text-white ss:leading-[57px] leading-[55px] w-full'>
                  Texas based <br></br> Global minded🌎
            </h1>
            <p className={`${styles.paragraph} max-w-[500px] mt-8`}>
              B.S. in Computer Science - University of Texas at Dallas
              <span className='text-gradient'> 5+ years</span> creating javascript bots, web projects,
              <br></br> & trying to climb rocks better🤙🏾
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