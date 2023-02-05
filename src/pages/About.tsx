import React from 'react'
import { img19 } from '../assets'
import Main from '../components/global/Main'

const About = () => {
    return (
        <Main>
            <div className='max-w-4xl mx-auto bg-w-pink px-clamp-50 py-clamp-80 mt-20'>
                <div className='grid grid-cols-2 laptop:grid-cols-1 items-center gap-8'>
                    <div className='flex flex-col gap-5 laptop:order-2'>
                        <h1 className='text-center'>Meet the face behind the posts</h1>
                        <p className='opacity-90 tracking-widest text-sm leading-[1.8]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <p className='opacity-90 tracking-widest text-sm leading-[1.8]'>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are</p>
                    </div>
                    <div>
                        <img className='w-full scale-[1.2] translate-x-[25%] laptop:translate-x-0 laptop:scale-100' src={img19} alt="" />
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default About