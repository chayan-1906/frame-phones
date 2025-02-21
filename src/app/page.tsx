import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

function Home() {
    return (
        <main className={'overflow-x-hidden'}>
            <Navbar/>
            <Hero/>
            <Services/>
        </main>
    );
}

export default Home;
