import React from 'react'
import Contact from '../home/Contact'

const Footer = () => {
    return (
        <footer>
            <Contact />
            <div className='h-16 bg-w-brown flex justify-center items-center'>
                <span className='text-white text-base text-center'>©2023 Copyright by Thuc Huynh. All rights reserved.</span>
            </div>
        </footer>
    )
}

export default Footer