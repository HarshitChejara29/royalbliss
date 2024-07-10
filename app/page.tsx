import Benefits from "@/components/pages/home/benefits"
import Blogs from "@/components/pages/home/blogs"
import Compare from "@/components/pages/home/compare"
import Features from "@/components/pages/home/features"
import Hero from "@/components/pages/home/hero"
import Intro from "@/components/pages/home/intro"
import SocialsGrid from "@/components/pages/home/socialsgrid"
import Uses from "@/components/pages/home/uses"
import Video from "@/components/pages/home/video"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between ">
    <Hero/>
    <Intro/>
    <Benefits/>
    <Uses/>
    <Video/>
    <Blogs/>
    <Compare/>
    <Features/>
    <SocialsGrid/>
    
    </main>
  );
}
