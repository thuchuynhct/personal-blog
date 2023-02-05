import Main from '../components/global/Main'
import HomeBlog from '../components/home/HomeBlog'
import HomeHero from '../components/home/HomeHero'

const Home = () => {
    return (
        <Main>
            <HomeHero />
            <HomeBlog />
        </Main>
    )
}

export default Home