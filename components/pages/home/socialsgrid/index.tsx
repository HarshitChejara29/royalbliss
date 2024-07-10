import Image from "next/image";
import { socialsData } from '../../../../data/socialsgrid';

const SocialsGrid = () => {
    return(
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 font-serif">Connect with us on Instagram</h1>
            </div>
            <div className="flex flex-wrap -m-4">
            {socialsData.SocialsGrid.map((socials, index) => (
            <div key={index} className="lg:w-1/6 sm:w-1/2">
                <div className="flex relative">
                {socials.images && socials.images.map((image, imgIndex) => (
                    <Image alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" width={200} height={200} key={imgIndex} src={image} />
                ))}
                <div className="px-12 py-24 relative z-10 w-full bg-black opacity-0 hover:opacity-60 flex justify-center items-center">
                    <a href="https://www.instagram.com/" target="_blank" className="text-white">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                </div>
                </div>
            </div>
            ))}
            </div>
        </div>
        </section>
    )
}

export default SocialsGrid;