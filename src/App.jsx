import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final"
import Outro from "./sections/Outro";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />

            <FirstVideo />
            <Jason />

            <SecondVideo />
            <Lucia />

            <PostCard />

            <Final />
            <Outro />
            <h4 className="bg-[rebeccapurple] h-12 mt-4 text-center text-white text-[1.1rem] font-semibold flex items-center justify-center">Made with GSAP by Bhanu Benak</h4>
        </main>
    )
}


export default App