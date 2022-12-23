import React from 'react'
import styles from './style'
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
               NavBar
          </div>
       </div>

       <div className={`bg-primary  ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              Hero
          </div>
       </div>
       <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              Stats
          </div>
       </div>
    </div>
  )
}

export default App
