import Image from "next/image";

const Hero = () => {
    return(
        <section className="w-full h-full">
            <div className="flex flex-col text-center w-full py-5">
            <h1 className="md:text-3xl sm:text-2xl font-bold py-3 text-black font-serif">OUR STORY</h1>
            </div>
            <Image src={'/gifs/OUR-STORY-HERO.gif'} alt="" height={2900} width={1118} className="w-full h-auto"/>
        </section>
    )
}

export default Hero;