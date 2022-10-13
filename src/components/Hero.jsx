import React from 'react'
import styles from '../style';
import {discount, robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

          <div className={`flex-1 ${styles.flexStart} flex-col xl:px=0 sm:px-16 px-6`}>

            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
              <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
              <p className={`${styles.paragraph} ml-2`}>
                <span className='text-white'>QA</span> Engineer {" "}
                  <span className='text-white'>in</span> Healthcare
              </p>
            </div>

            <div className='flex flex-row justify-between items-center w-full'>
              <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[70px] leading-[40px]'>
              
              <span className="text-gradient">Rahul Ramesh</span>{" "}
              </h1>
              <div className='ss:flex hidden md:mr-2 mr-0'>
                <GetStarted/>
              </div>
            </div>

            <h1 className='font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[50px] leading-[55px] w-full'>
                  Texas based, Global minded.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              B.S. in Computer Science from the University of Texas at Dallas,
              Creating Javascript bots, web projects, & trying to climb rocks better 🤙🏾.
            </p>
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
              <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
          
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom_40 '></div>
                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
          
          </div>


              <div className={`ss:hidden ${styles.flexCenter}`}>
                    <GetStarted/>
               </div>

      </section>


  )
}

export default Hero