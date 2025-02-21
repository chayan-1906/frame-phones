import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

function Home() {
    return (
        <main className={'overflow-x-hidden'}>
            <Navbar/>
            <Hero/>
        </main>
    );
}

export default Home;
