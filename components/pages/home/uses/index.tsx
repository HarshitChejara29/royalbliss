import Image from "next/image";

const Uses = () => {
    return(
        <section className="text-gray-500 bg-[#f0f4ff] body-font w-full h-[90vh]">
        <div className="container px-5 py-24 mx-auto font-serif">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="md:text-4xl sm:text-2xl font-medium title-font mb-4 text-gray-900">Use It As You Like!</h1>
            </div>
            <div className="flex flex-wrap -m-4 px-36">
            <div className="p-5 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-left">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" height={600} width={400} src={'/gifs/FULL-BODY-BATH.gif'}/>
                <div className="w-full">
                    <h2 className="title-font font-semibold text-lg text-black">Full Body Bath</h2>
                    <p className="py-2 text-sm">Mix two full cups of magnesium salt flakes into a warm bath, adjusting proportions to preference. Soak in the solution for 30 minutes for optimal benefit.</p>
                </div>
                </div>
            </div>
            <div className="p-5 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-left">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" height={600} width={400} src={'/gifs/FOOT-BATHS.gif'}/>
                <div className="w-full">
                    <h2 className="title-font font-semibold text-lg text-black">Foot Baths</h2>
                    <p className="py-2 text-sm">Mix a cup of magnesium chloride flakes into 3-5 litres of warm water. Ensure it's not too hot nor too cold for quick dissolution. Fully immerse your feet and relax for 15-20 minutes.</p>
                </div>
                </div>
            </div>
            <div className="p-5 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-left">
                <Image alt="team" className="flex-shrink-0 rounded-lg w-full h-80 object-cover object-center mb-4" height={600} width={400} src={'/gifs/DIY-BODY-SCRUB.gif'}/>
                <div className="w-full">
                    <h2 className="title-font font-semibold text-lg text-black">Diy Body Scrub</h2>
                    <p className="py-2 text-sm">Blend bath flakes and coconut oil equally until thoroughly combined, then store in an airtight container. Apply and scrub onto the body in circular motions.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Uses;