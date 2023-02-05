import React from 'react'
import { img1, img10, img11, img8 } from '../../assets'

const HomeHero = () => {
    return (
        <div className='relative grid grid-cols-3 sm:grid-cols-1 gap-2'>
            <img className='w-full aspect-[.9] sm:hidden' src={img10} alt="" />
            <img className='w-full aspect-[.9]' src={img8} alt="" />
            <img className='w-full aspect-[.9] sm:hidden' src={img11} alt="" />
            <h1 className='sm:w-full px-10 py-5 absolute bottom-0 left-2/4 bg-white -translate-x-2/4 translate-y-2/4 sm:translate-y-full text-center'>My Life. My Blog.</h1>
        </div>
    )
}

export default HomeHero