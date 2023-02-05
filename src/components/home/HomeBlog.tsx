import React from 'react'
import { Link } from 'react-router-dom';
import { img1, img2, img3, img4, img5, img6 } from '../../assets';
import { BlogType, data } from '../../data/data'
import Container from '../global/Container'
import { Social } from '../header/Navbar';

const HomeCard = ({ item }: { item: BlogType }) => {
    const regex = /<p>(.*?)<\/p>/g;
    const match = regex.exec(item.content);
    const content = match ? match[1] : "";
    return (
        <Link to={`/blog/${item.id}`} className='flex laptop:flex-col border-1 border-gray-300'>
            <img src={item.image} alt="" className='w-2/4 laptop:w-full aspect-video' />
            <div className='p-5 flex flex-col gap-[clamp(5px,2vw,20px)]'>
                <span>{item.createAt}</span>
                <h3 className='line-2'>{item.title}</h3>
                <p className='opacity-80 line-3'>{content}</p>
            </div>
        </Link>
    )
}
const Subcribe = () => {
    return (
        <form className='w-9/10 max-w-sm p-12 pb-clamp-80 mx-auto text-center bg-w-brown text-white'>
            <h2 className='leading-10 mb-14'>Let the posts come to you.</h2>
            <label className='block text-left mb-5 font-semibold'>
                {` Email *`}
                <input className='block w-full py-1 border-2 border-transparent border-b-white' type="email" required />
            </label>
            <button type='submit' className='w-4/5 py-3 font-semibold text-w-brown text-lg bg-white hover:bg-black hover:text-white'>Subcribe</button>
        </form>
    )
}

const FindMe = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    return (
        <div className='grid grid-cols-[repeat(auto-fit_,minmax(100px,_1fr))] gap-2'>
            {images.map((item, index) => (
                <img className='w-full h-full' key={index} src={item} alt="" />
            ))}
        </div>
    )
}
const HomeBlog = () => {
    const blogs = data.slice(0, 3);
    return (
        <div>
            <Container width='lg' className='grid items-start grid-cols-[repeat(auto-fit_,minmax(325px,_1fr))] gap-10'>
                <div>
                    <div className='flex flex-col gap-10'>
                        {blogs.map(item => (<HomeCard key={item.id} item={item} />))}
                    </div>
                    <Link to="/blog" className='inline-block px-8 py-2 my-10 text-white font-semibold text-lg bg-w-brown hover:bg-black'>
                        All Posts
                    </Link>
                </div>
                <div className='bg-w-pink pt-clamp-50'>
                    <Subcribe />
                    <div className='w-9/10 max-w-sm py-12  mx-auto flex flex-col gap-8'>
                        <h3 className='text-center'>Find me on Instagram</h3>
                        <FindMe />
                        <Social className='text-black text-2xl gap-8 mx-auto' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeBlog