import Image from "next/image";


const Hero = () => {
    return(
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 mt-8 mx-auto">
        <div className="px-16 mx-auto flex flex-wrap">
            <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center" width={600} height={600} src={'/images/insta-img-10.jpg'}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0 font-serif flex flex-col justify-between">
                <div>
                    <h1 className="text-[#114275] text-2xl title-font font-bold mb-1">Comfort Salt 100% Magnesium Bath Flakes</h1>
                    <div className="flex mb-2">
                        <span className="flex items-center">
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f7a531]" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            ))}
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f7a531]" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">(20 reviews)</span>
                        </span>
                    </div>
                    <div className="flex justify-left mb-1">
                        <button className="inline-flex text-black bg-[#b7e6ed] border-0 py-1 px-2 focus:outline-none text-xs">5K+ units sold</button>
                        <button className="ml-1 inline-flex text-black bg-[#fed8fb] border-0 py-1 px-2 focus:outline-none text-xs">Last 28 Units Left</button>
                    </div>
                    <span className="title-font font-medium text-2xl text-gray-900">$13.99</span>
                    <hr className="mt-5 mb-5"/>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/5 md:w-1/2 p-1">
                            <div className="p-2 rounded-lg border">
                                <Image className="object-cover object-left mb-2" width={50} height={50} src="/images/salt-4.jpg" alt="content"/>
                                <h3 className="tracking-widest text-sm font-medium title-font">2LB</h3>
                                <h2 className="text-black font-bold title-font">$13.99 USD</h2>
                                <p className="leading-relaxed text-xs">incl. of all taxes</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-1">
                            <div className="p-2 rounded-lg border">
                                <Image className="object-cover object-left mb-2" width={50} height={50} src="/images/salt-5.jpg" alt="content"/>
                                <h3 className="tracking-widest text-sm font-medium title-font">4LB</h3>
                                <h2 className="text-black font-bold title-font">$18.99 USD</h2>
                                <p className="leading-relaxed text-xs">incl. of all taxes</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-1">
                            <div className="p-2 rounded-lg border">
                                <Image className="object-cover object-left mb-2" width={50} height={50} src="/images/salt-6.jpg" alt="content"/>
                                <h3 className="tracking-widest text-sm font-medium title-font">8LB</h3>
                                <h2 className="text-black font-bold title-font">$26.99 USD</h2>
                                <p className="leading-relaxed text-xs">incl. of all taxes</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-1">
                            <div className="p-2 rounded-lg border">
                                <Image className="object-cover object-left mb-2" width={50} height={50} src="/images/salt-4.jpg" alt="content"/>
                                <h3 className="tracking-widest text-sm font-medium title-font">12LB</h3>
                                <h2 className="text-black font-bold title-font">$39.99 USD</h2>
                                <p className="leading-relaxed text-xs">incl. of all taxes</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-black py-4">
                        <p className="leading-relaxed">Spa Experience in the Comfort of Your Own Home.</p>
                        <p className="leading-relaxed">Our salt is the preferred salt for bath and body as it is composed of a more easily accessible magnesium (magnesium chloride).</p>
                    </div>
                    <div className="flex mt-5">
                        <span className="title-font font-bold text-sm text-[#114275] underline">Read More</span>
                    </div>
                </div>
                <div className="mt-auto">
                    <div className="flex mt-5">
                        <button className="inline-flex items-center justify-center text-white bg-[#292929] border-[#292929] border py-3 px-4 focus:outline-none hover:text-black hover:bg-gray-200 text-sm tracking-widest w-full">ADD TO CART</button>
                        <button className="ml-4 inline-flex items-center justify-center text-white bg-black border-[#292929] border py-3 px-6 focus:outline-none hover:text-black hover:bg-gray-200 text-sm w-full">Buy with
                            <Image className="ml-2" src="/images/google-pay-logo.png" width={50} height={50} alt="google- pay"/>
                        </button>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="inline-flex items-center justify-center py-3 px-4 focus:outline-none text-sm w-full underline text-black"></button>
                        <button className="inline-flex items-center justify-center py-3 px-4 focus:outline-none text-sm w-full underline text-black">More payment options</button>
                    </div>
                </div>
            </div>
        </div>




        <div className="px-16 py-5 mx-auto flex flex-wrap">

            <div className="flex flex-wrap lg:w-1/2 w-full">
                <div className="xl:w-1/4 md:w-1/2">
                    <Image className="object-cover object-left mb-2" width={150} height={150} src="/images/insta-img-10.jpg" alt="content"/>
                </div>
                <div className="xl:w-1/4 md:w-1/2">
                    <Image className="object-cover object-left mb-2" width={150} height={150} src="/images/salt-4.jpg" alt="content"/>
                </div>
                <div className="xl:w-1/4 md:w-1/2">
                    <Image className="object-cover object-left mb-2" width={150} height={150} src="/images/subscribe-form.png" alt="content"/>
                </div>
                <div className="xl:w-1/4 md:w-1/2">
                    <Image className="object-cover object-left mb-2" width={150} height={150} src="/images/power-detox.jpg" alt="content"/>
                </div>
                <div className="w-full">
                    <Image alt="code" className="w-full h-auto object-cover object-center" width={600} height={600} src="/images/codeBIG3_1.jpg"/>
                </div>
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:mt-0 font-serif">
                <div className="py-5 bg-[#e0e8f9] rounded-xl p-2">
                    <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span className="text-[#114275] font-bold">Available Offers</span>
                        <span className="ml-auto text-black bg-[#ffe655] px-2 py-1 rounded-lg flex items-center">
                            <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M10.773 21.585l-1.368 1.415-10.405-10.429v-8.571h2v7.719l9.773 9.866zm1.999-20.585h-9.772v9.772l12.074 12.228 9.926-9.85-12.228-12.15zm-4.772 7c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
                                </svg>
                            </span>
                            1 offers
                        </span>
                        <span className="transition group-open:rotate-180">
                            <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                            >
                            <path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                        </summary>
                        <hr className="mt-4 mb-4 border-gray-400 "/>
                        <div className="bg-[#cedeff] py-3 px-2 rounded-lg">
                        <p className="text-sm group-open:animate-fadeIn mb-6 text-[#114275] font-bold">
                        25% off for new customers. Avail Now. <span className="ml-2 text-black bg-[#36d55f] px-2 py-1 rounded-full">New 25</span>
                        </p>
                        </div>
                    </details>
                </div>
            </div>

        </div>

    </div>
    </section>
    )
}

export default Hero;