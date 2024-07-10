import Image from "next/image";

const Hero = () => {
    return(
        <section className="bg-gray-600 w-full h-[80vh]">
            <Image src={'/banners/COMFORTSALT-HERO.jpeg'} height={688} width={1600} alt="" className="w-full h-full"/>
        </section>
    )
}

export default Hero;