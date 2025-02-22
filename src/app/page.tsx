import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Banner from "@/components/banner/Banner";
import BannerText from "@/components/banner/BannerText";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/footer/Footer";

function Home() {
    return (
        <main className={'overflow-x-hidden'}>
            <Navbar/>
            <Hero/>
            <Services/>
            <Banner/>
            <BannerText/>
            <Blogs/>
            <Footer/>
        </main>
    );
}

export default Home;
