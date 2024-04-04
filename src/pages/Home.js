import About from "../components/About"
import Contact from "../components/Contact"
import Cover from "../components/Cover"
import Partners from "../components/Partners"
import Sales from "../components/Sales"
import Services from "../components/Services"
import Footer from "../components/Footer"


const Home = () => {
    return (
        <>
            <Cover />
            <About />
            <Services />
            <Sales />
            <Partners />
            <Contact />
            <Footer />
        </>
    )
}

export default Home