import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import Container from '../global/Container'
import { TfiFacebook } from "react-icons/tfi"
import { FiInstagram, FiMenu } from "react-icons/fi"
import { FaTwitter, FaPinterestP } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"
import { Link } from 'react-router-dom'
import { BlogType, data } from '../../data/data'

const SearchResults = (props: { posts: BlogType[], className?: string, onClick?: () => void }) => {
    return (
        <div className={`${props.className || ""}`}>
            <div className='flex items-center justify-between'>
                <span className='block text-base font-maven'>Search Results</span>
                <MdOutlineClose onClick={props.onClick} className='cursor-pointer' size={20} />
            </div>
            {
                props.posts.map(item => (
                    <div key={item.id} className='flex items-center gap-2 mt-3'>
                        <img className='w-28 aspect-video' src={item.image} alt="" />
                        <div>
                            <h3 className='text-base overflow-hidden overflow-ellipsis'>{item.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
const Search = () => {
    const [posts, setPosts] = useState<BlogType[]>([]);

    const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        const results = value ? data.filter(s => s.title.toLowerCase().includes(value)) : [];
        setPosts(results);
    }
    return (
        <div className='flex items-center gap-3 text-white'>
            <BsSearch />
            <input onChange={searchHandle} className='se:!w-[120px]' type="text" placeholder='Search...' />
            {posts.length > 0 &&
                <SearchResults
                    onClick={() => setPosts([])}
                    className='bg-black px-clamp-80 absolute left-0 w-full max-w-xl top-12 pb-5 max-h-[440px] overflow-y-auto no-scrollbar'
                    posts={posts} />
            }
        </div>
    )
}
export const Social = (props: { className?: string }) => {
    const socials = [
        <TfiFacebook cursor={"pointer"} key="facebook" />,
        <FiInstagram cursor={"pointer"} key="instagram" />,
        <FaTwitter cursor={"pointer"} key="twitter" />,
        <FaPinterestP cursor={"pointer"} key="pinterest" />
    ];
    return (
        <div className={`text-xl text-white flex items-center gap-5 ${props.className || ""}`}>
            {socials}
        </div>
    )
}

const menu = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "My Blog", href: "/blog" },
    { id: 3, title: "About", href: "/about" },
];
const Navbar = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [anchor, setAnchor] = useState<number>(menu[0].id);

    const linkClickHandle = (index: number) => {
        setAnchor(index);
        setIsToggle(false);
    }
    return (
        <header className='fixed w-screen top-0 left-0 z-10 font-playfair-display'>
            <div className='bg-black'>
                <Container width='lg' className='h-12 flex items-center justify-between'>
                    <Search />
                    <Social />
                </Container>
            </div>
            <nav className='bg-white'>
                <Container width='lg' className='h-20 flex items-center justify-between'>
                    <Link to="/" className='text-5xl text-[26px] font-bold'>Turning Heads</Link>
                    <ul className={`flex items-center gap-8 ease-in duration-300
                    md:absolute md:w-4/5 h-screen ${isToggle ? "md:right-0" : "md:-right-full"} md:top-full md:py-10 md:flex-col md:bg-white`}>
                        {
                            menu.map(item => (
                                <li key={item.id}>
                                    <Link
                                        onClick={() => linkClickHandle(item.id)}
                                        className={`font-bold ${anchor === item.id ? "text-w-brown" : ""}`}
                                        to={item.href}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                        <li>
                            <a onClick={() => linkClickHandle(-1)}
                                className={`font-bold ${anchor === -1 ? "text-w-brown" : ""}`}
                                href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button onClick={() => setIsToggle(!isToggle)} className='hidden md:block'>
                        {isToggle ? <MdOutlineClose size={30} /> : <FiMenu size={30} />}
                    </button>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar