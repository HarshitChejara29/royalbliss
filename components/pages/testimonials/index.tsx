import Image from "next/image";

const Testimonials = () => {
    return(
        <section className="w-full h-full">
            <div className="flex flex-col text-center w-full py-5">
            <h1 className="md:text-3xl sm:text-2xl font-bold py-3 text-black font-serif">News</h1>
            </div>

            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4 font-serif">
                <div className="p-4 md:w-1/3">
                    <div className="h-full overflow-hidden">
                    <Image className="lg:h-72 md:h-36 w-full object-cover object-center" width={400} height={400} src="/images/salt-1.jpg" alt="blog"/>
                    <div className="mt-2">
                        <h1 className="title-font font-medium text-gray-900 py-3">Enhancing Home Wellness with Magnesium Bath Salts During Stressful Times</h1>
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 flex items-center space-x-2">
                            <span className="flex items-center space-x-1">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/>
                                </svg>
                                <span>21 Apr 2024</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/>
                                </svg>
                                <span>Saeed Ahmed</span>
                            </span>
                        </h2>

                        <p className="leading-relaxed py-3 text-sm">Enhancing Home Wellness with Magnesium Bath Salts During Stressful Times</p>
                        <div className="flex items-center flex-wrap ">
                        <a className="text-gray-500 font-bold inline-flex items-center md:mb-2 lg:mb-0 underline text-sm">READ MORE</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full overflow-hidden">
                    <Image className="lg:h-72 md:h-36 w-full object-cover object-center" width={400} height={400} src="/images/salt-2.jpg" alt="blog"/>
                    <div className="mt-2">
                        <h1 className="title-font font-medium text-gray-900 py-3">The Ultimate Guide to Magnesium Bath Flakes: Benefits, Uses, and Tips</h1>
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 flex items-center space-x-2">
                            <span className="flex items-center space-x-1">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/>
                                </svg>
                                <span>29 Dec 2023</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/>
                                </svg>
                                <span>Saeed Ahmed</span>
                            </span>
                        </h2>

                        <p className="leading-relaxed py-3 text-sm">The Ultimate Guide to Magnesium Bath Flakes: Benefits, Uses, and Tips</p>
                        <div className="flex items-center flex-wrap ">
                        <a className="text-gray-500 font-bold inline-flex items-center md:mb-2 lg:mb-0 underline text-sm">READ MORE</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="h-full overflow-hidden">
                    <Image className="lg:h-72 md:h-36 w-full object-cover object-center" width={400} height={400} src="/images/salt-3.jpg" alt="blog"/>
                    <div className="mt-2">
                        <h1 className="title-font font-medium text-gray-900 py-3">The Magic of Magnesium: How Bath Salts Can Transform Your Wellness Routine</h1>
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 flex items-center space-x-2">
                            <span className="flex items-center space-x-1">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/>
                                </svg>
                                <span>29 Dec 2023</span>
                            </span>
                            <span className="flex items-center space-x-1">
                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                    <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/>
                                </svg>
                                <span>Comfort Salt</span>
                            </span>
                        </h2>

                        <p className="leading-relaxed py-3 text-sm">The Magic of Magnesium: Discover the transformative power of magnesium in your daily wellness routine. Magnesium, an essential mineral, plays a...</p>
                        <div className="flex items-center flex-wrap ">
                        <a className="text-gray-500 font-bold inline-flex items-center md:mb-2 lg:mb-0 underline text-sm">READ MORE</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </section>
    );
}

export default Testimonials;