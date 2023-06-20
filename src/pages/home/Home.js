import "./home.scss"
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";



function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>

    )
}
export default Home
