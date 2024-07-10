import Image from "next/image";

const Blogs = () => {
    return(
        <section className="text-gray-500 bg-[#f0f4ff] body-font w-full h-[105vh]">
        <div className="container px-5 py-24 mx-auto font-serif">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="md:text-4xl sm:text-2xl font-medium title-font mb-3 text-gray-900">Know More About Magnesium Salts!</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Enhance your shopping journey with insights and inspiration</p>
            </div>
            <div className="flex flex-wrap -m-4 px-36">
            <div className="p-5 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" height={600} width={400} src={'/images/salt-1.jpg'}/>
                <div className="w-full p-10">
                    <h2 className="title-font font-medium text-lg text-black">Enhancing Home Wellness With Magnesium Bath Salts During Stressful Times</h2>
                </div>
                </div>
            </div>
            <div className="p-5 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" height={600} width={400} src={'/images/salt-2.jpg'}/>
                <div className="w-full p-10">
                    <h2 className="title-font font-medium text-lg text-black">The Ultimate Guide To Magnesium Bath Flakes: Benefits, Uses, And Tips</h2>
                </div>
                </div>
            </div>
            <div className="p-5 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" height={600} width={400} src={'/images/salt-3.jpg'}/>
                <div className="w-full p-10">
                    <h2 className="title-font font-medium text-lg text-black">The Magic Of Magnesium: How Bath Salts Can Transform Your Wellness Routine</h2>
                </div>
                </div>
            </div>
            </div>
            <button className="flex mx-auto mt-2 text-black bg-transparent border border-black py-3 px-8 text-sm ">VIEW ALL</button>
        </div>
        </section>
    )
}

export default Blogs;