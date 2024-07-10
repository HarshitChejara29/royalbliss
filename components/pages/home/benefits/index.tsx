import Image from "next/image";

const Benefits = () => {
    return(
        <section className=" w-full flex items-center">
            <Image src={'/banners/BENEFITS.jpeg'} height={1579} width={4096} alt="" className="w-full h-full" />
            <div className="flex flex-col items-center justify-center w-full md:grid md:grid-cols-4 gap-4">
                <div className="h-60 bg-red-200"></div>
                <div className="h-60 bg-red-200"></div>
                <div className="h-60 bg-red-200"></div>
                <div className="h-60 bg-red-200"></div>
            </div>
        </section>
    )
}

export default Benefits;