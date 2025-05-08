import React from 'react'
import styles from './style'
import { Navbar, Footer, Hero, Projects} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Projects/>
        </div>
      </div>

      <div className={``}>
        <div className={``}>
            <Footer/>
        </div>
      </div>

      </div>
  )
}

export default App