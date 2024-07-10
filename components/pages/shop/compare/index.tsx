import Image from "next/image";

const Compare = () => {
    return(
        <section className=" w-full bg-[#eff3ff]">
            <div className="w-full h-full flex items-center justify-center px-24">
                <Image alt="" src={'/banners/compare.png'} height={350} width={910} className="w-[290px] h-[371px] md:h-full md:w-full" />
            </div>
        </section>
    )
}

export default Compare;