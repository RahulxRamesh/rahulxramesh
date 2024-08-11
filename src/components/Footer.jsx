import React from 'react'
import styles from '../style';
import {pfp} from '../assets';
import star from '../assets/starstar.gif'

const Footer = () => {
  return (
    
    <section id='footer' className={`${styles.flexCenter}flex md:my80 my-80`}>

    <div className={`md:my80 my-80`}>
    <img src={star} alt="profilepic" className={``}/>
    </div>

    </section>


  )
}

export default Footer