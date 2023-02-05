import { Link } from "react-router-dom";
import { BlogType } from "../../data/data";

export const BlogCard = ({ item }: { item: BlogType }) => {
    const regex = /<p>(.*?)<\/p>/g;
    const match = regex.exec(item.content);
    const content = match ? match[1] : "";
    return (
        <Link to={`/blog/${item.id}`} className='border-1 border-gray-200 hover:text-w-brown'>
            <img className='w-full lg:aspect-video' src={item.image} alt="" />
            <div className='p-5 flex flex-col gap-[clamp(5px,2vw,20px)]'>
                <span>{item.createAt}</span>
                <h3 className="line-2">{item.title}</h3>
                <p className="line-3">{content}</p>
            </div>
        </Link>
    )
}