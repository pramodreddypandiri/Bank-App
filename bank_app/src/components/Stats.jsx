import React from 'react'
import { stats } from '../constants'
import styles from '../style'
const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
         <div key={stat.id} className={` items-center flex-1 flex justify-start flex-row m-3`}>
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
         </div>
      ))}

    </section>
    // <div className='flex flex-row justify-between items-center'>
    //   <div className='flex flex-row justify-between'>
    //     <p className='text-white font-bold'>3800+</p>
    //     <p className='text-gradient font-bold'>USER ACTIVE</p>
    //   </div>
    //   <div className='w-[2px] h-[25px] bg-blue-gradient'/>
    //   <div className='flex flex-row justify-between'>
    //     <p className='text-white font-bold'>230+</p>
    //     <p className='text-gradient font-bold'>TRUSTED BY COMPANY </p>
    //   </div>
    //   <div className='w-[2px] h-[25px] bg-blue-gradient'/>
    //   <div className='flex flex-row justify-between'>
    //     <p className='text-white font-bold'>$230M+</p>
    //     <p className='text-gradient font-bold'>TRANSACTION </p>
    //   </div>

    // </div>
  )


export default Stats