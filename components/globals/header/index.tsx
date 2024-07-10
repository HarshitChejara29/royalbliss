"use client"
import Image from "next/image"
import Link from "next/link"

// Header
    // Logo + nav + actions
// - hover on nav : text-blue-600
// - action on logo click : navigateHome()
// - cursor on logo hover

const Header = () => {

    const navigateToPage = () => {
        window.location.href = '/'
    }

    const navigateToPageRoute = () => {
        window.location.href = '/contact'
    }

    return(
        <header className="bg-[#1f3b72] w-full h-[10vh] p-2 border-b block md:flex items-center justify-between px-24">

            <nav className="flex gap-10 font-serif text-sm text-white">
                <Link href={'/about'}>OUR STORY</Link>
                <Link href={'/products'}>SHOP</Link>
                <Link href={'/contact'}>CONTACT</Link>
                <Link href={'/testimonials'}>TESTIMONIALS</Link>
            </nav>
            <div onClick={navigateToPage} className="hover:cursor">
                <Image src={'/images/logo.png'} alt="" height={120} width={120} className="" />
            </div>
            <div className="flex md:px-8">
                {/* md:mr-10 */}
                {/* <button className=" px-6 py-1 bg-blue-600" onClick={navigateToPageRoute}>Buy Now</button> */}
                <svg className="h-6 w-6" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z" fill-rule="nonzero"/></svg>
                <svg className="h-6 w-6 ml-2" onClick={navigateToPageRoute} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z"/></svg>
            </div>
        </header>
    )
}

export default Header;