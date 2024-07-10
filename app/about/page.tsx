import Content from "@/components/pages/about/content"
import Hero from "@/components/pages/about/hero"

export default function About() {
    return (
      <main className="bg-[#eff3ff] flex min-h-screen flex-col items-center justify-between px-20">
        <Hero/>
        <Content/>
      </main>
    );
  }
  