import { BlogCard } from '../components/global/BlogCard';
import Container from '../components/global/Container';
import Main from '../components/global/Main'
import { data } from '../data/data'

const Blog = () => {
    return (
        <Main>
            <Container width='md'>
                <h2 className='text-center mt-20 mb-clamp-80'>The Feed</h2>
                <div className='grid gap-5 items-start grid-cols-fill-250'>
                    {data.map(item => (
                        <BlogCard key={item.id} item={item} />
                    ))}
                </div>
            </Container>
        </Main>
    )
}

export default Blog