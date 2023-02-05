import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { img19 } from '../assets';
import { BlogCard } from '../components/global/BlogCard';
import Container from '../components/global/Container';
import Main from '../components/global/Main';
import { Social } from '../components/header/Navbar';
import { BlogType, data } from '../data/data';



const Read = () => {
    const { id } = useParams();
    const post = data.find(s => s.id === Number(id));
    if (!post)
        return <Navigate to="/blog" />

    const recentPosts = data.filter(s => s.id !== Number(id)).slice(0, 2);
    return (
        <Main>
            <Container width='md' className='mt-20 grid grid-cols-3 laptop:grid-cols-1 gap-10 items-start'>
                <div className='col-span-2 flex flex-col gap-8'>
                    <span>{post.createAt}</span>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content }}
                        className="blog border-1 border-transparent border-b-gray-800 pb-20"
                    />
                    <div>
                        <div className='flex justify-between items-center mb-5'>
                            <h4>Recent posts</h4>
                            <Link to="/blog">See all</Link>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            {recentPosts.map(item => (
                                <Link to={`/blog/${item.id}`} key={item.id} className="hover:text-w-brown">
                                    <img src={item.image} alt="" className="w-full aspect-video mb-5" />
                                    <h3 className='text-[clamp(16px,_2vw,_20px)] line-2'>{item.title}</h3>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='p-8 bg-w-pink laptop:hidden'>
                    <div className='flex flex-col items-start gap-5 mb-16'>
                        <div className='overflow-hidden aspect-square'>
                            <img className='scale-[2] translate-y-10 w-full' src={img19} alt="" />
                        </div>
                        <h4 className='font-bold text-xl font-playfair-display'>Hi, thanks for stopping by!</h4>
                        <p className='font-medium'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <Link to="/about" className='px-8 py-2 border-1 border-black hover:border-w-brown hover:bg-w-brown hover:text-white ease-linear duration-300'>Read more</Link>
                    </div>
                    <form action="" className='px-5 pt-8 pb-16 bg-w-brown flex flex-col gap-5 text-white mb-10'>
                        <h4 className='text-center text-xl font-bold font-playfair-display'>Let the posts come to you.</h4>
                        <label>
                            Email*
                            <input type="email" required className='w-full border-2 border-transparent border-b-white' />
                        </label>
                        <button type='submit' className='bg-white text-w-brown py-2 font-semibold'>Subcribe</button>
                    </form>
                    <Social className='text-black justify-center' />
                </div>
            </Container>
        </Main>
    )
}

export default Read