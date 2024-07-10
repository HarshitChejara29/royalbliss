import Image from "next/image"
import Link from "next/link";

const Footer = () => {
    return(
        // <footer className="w-full h-full p-2 bg-gray-800 block md:flex  justify-between items-center gap-4">
        //     <div className="ml-10">
        //         <Image src={'/images/logo.png'} alt="" height={60} width={60} className="bg-gray-200 my-20"/>
        //     </div>
        //     <div className="block md:flex md:flex-col gap-4 text-white w-full items-center justify-start md:justify-center ">
        //         <Link href={'/about'} className="hover:text-blue-300">About</Link>
        //         <Link href={'/products'} className="hover:text-blue-200">Product</Link>
        //         <Link href={'/terms'} className="hover:text-blue-200">Terms & Conditions</Link>
        //         <Link href={'/policy'} className="hover:text-blue-200">Privacy Policy</Link>
        //     </div>
        //     <div className="flex items-center justify-start md:justify-center gap-4 md:mr-10 my-4">
        //         <div className="w-full h-full">
        //             <Image src={''} height={36} alt="instagram" width={36} className="bg-gray-400" />
        //         </div>
        //         <div className="w-full h-full">
        //             <Image src={''} height={36} alt="facebook" width={36} className="bg-gray-400" />
        //         </div>
        //         <div className="w-full h-full">
        //             <Image src={''} height={36} alt="amazon" width={36} className="bg-gray-400" />
        //         </div>
        //         <div className="w-full h-full">
        //             <Image src={''} height={36} alt="myntra" width={36} className="bg-gray-400" />
        //         </div>
        //     </div>
        // </footer>





    <footer className="text-white body-font bg-[#1f3b72]">
    <div className="container px-16 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first font-serif">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold mb-3">ComfortSalt</h2>
            <nav className="list-none mb-10 text-sm">
            <li>
                <a>📍 5528 South 3100 West, Roy UT 84067, United States</a>
            </li>
            <li className="mt-4">
                <a>📧 team@comfortsalt.com</a>
            </li>
            <li className="mt-4">
                <a>📞 3852896706</a>
            </li>
            </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold mb-3">Our Company</h2>
            <nav className="list-none mb-10 text-sm">
            <li>
                <a href={'/products'}>Shop</a>
            </li>
            <li className="mt-4">
                <a href={'/about'}>Our Story</a>
            </li>
            <li className="mt-4">
                <a href={'/contact'}>Contact Us</a>
            </li>
            <li className="mt-4">
                <a href={'/testimonials'}>Blogs</a>
            </li>
            </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold mb-3">Need Any Help?</h2>
            <nav className="list-none mb-10 text-sm">
            <li className="mt-4">
                <a href={'/policy'}>Privacy Policy</a>
            </li>
            <li className="mt-4">
                <a href={'/terms'}>Terms of Service</a>
            </li>
            </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold mb-3">Newsletter</h2>
            <p className="text-sm mb-5">Subscribe to our Newsletter for daily updates!</p>
            <input type="text" id="footer-field" placeholder="Your Email" name="footer-field" className="mb-5 w-full bg-white border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#292929] border-1 border-black py-2 px-6 hover:bg-white hover:text-[#292929]">SUBSCRIBE</button>
            <div className="mt-5">
            <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href={'https://www.facebook.com/'} target="_blank" className="text-white">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a href={'https://www.instagram.com/'} target="_blank" className="ml-3 text-white">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
            </div>
            </div>

        </div>
        </div>
    </div>


    <div className="bg-[#a5e1eb]">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4">Copyright ©
            <a href="#" rel="noopener noreferrer" className="text-black ml-1" target="_blank">Comfortsalt | Designed with 🤍 TheBrandFuzz</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <div className="flex items-center justify-start md:justify-center gap-4 md:mr-10">
                <div className="w-full h-full">
                    <Image src={'/images/apple_pay.png'} height={36} alt="instagram" width={36} className="bg-gray-400" />
                </div>
                <div className="w-full h-full">
                    <Image src={'/images/g_pay.png'} height={36} alt="facebook" width={36} className="bg-gray-400" />
                </div>
                <div className="w-full h-full">
                   <Image src={'/images/visa.png'} height={36} alt="amazon" width={36} className="bg-gray-400" />
                </div>
                <div className="w-full h-full">
                    <Image src={'/images/integrate.png'} height={36} alt="myntra" width={36} className="bg-gray-400" />
                </div>
                <div className="w-full h-full">
                    <Image src={'/images/discover.png'} height={36} alt="myntra" width={36} className="bg-gray-400" />
                </div>
             </div>
        </span>
        </div>
    </div>
    </footer>
    )
}

export default Footer;