import Link from "next/link"

const Banner = () => {
    return(
        <div className="w-full h-[3vh] bg-[#a5e1eb] font-serif flex gap-4 items-center justify-start p-6 text-xs px-24">
            <p>Free Shipping on all orders</p>
            <Link href={'/contact'} className="font-thin underline">Buy Now</Link>
        </div>
    )
}

export default Banner;