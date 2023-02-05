import React from 'react'
import Container from '../global/Container'

const ContactInput = (props: { text: string, type: string }) => {
    return (
        <label>
            <span className='block text-base'>{props.text}</span>
            <input className='py-1 border-2 border-transparent border-b-w-brown text-black font-normal w-full focus:border-b-black' type={props.type} required />
        </label>
    )
}
const Contact = () => {
    return (
        <section id="contact" className='py-[clamp(40px,5vw,80px)] bg-w-pink-dark'>
            <Container width='lg'>
                <form className='max-w-2xl m-auto text-black' >
                    <h2 className='mb-clamp-80 text-center'>Let me know what's on your mind</h2>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-14 mb-12'>
                        <ContactInput text='First Name' type='text' />
                        <ContactInput text='Last Name' type='text' />
                        <ContactInput text='Email' type='email' />
                        <ContactInput text='Leave us a message...' type='text' />
                    </div>
                    <button
                        type='submit'
                        className='block py-3 px-16 text-white font-medium bg-w-brown mx-auto mb-10 hover:bg-black'>
                        Submit
                    </button>
                </form>
            </Container>
        </section>
    )
}

export default Contact