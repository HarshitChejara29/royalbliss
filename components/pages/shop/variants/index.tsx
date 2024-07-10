import Image from "next/image";

const Variants = () => {
    return(
        <section className="bg-[#eff3ff] w-full px-24 py-12">
            <Image alt="" src={'/banners/WHEN-TO-USE.jpg'} height={350} width={910} className="w-[290px] h-[371px] md:h-full md:w-full" />
        </section>
    )
}

export default Variants;