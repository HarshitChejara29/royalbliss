import Image from "next/image";

const Intro = () => {
    return(
        <section className="bg-gray-600 w-full h-[80vh]">
            <Image src={'/banners/COMFORT.jpeg'} height={1579} width={4096} alt="" className="w-full h-full" />
        </section>
    )
}

export default Intro;