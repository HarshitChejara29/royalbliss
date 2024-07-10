import Image from "next/image";

const Discover = () => {
    return(
        <section className="bg-[#eff3ff] w-full item-center px-24">
            <Image src={'/banners/DISCOVER.jpg'} alt="" height={2900} width={1118} className="w-full h-auto"/>
        </section>
    )
}

export default Discover;