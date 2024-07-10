import Image from "next/image";
import { reviewsData } from '../../../../data/reviews';

const Reviews = () => {
    return (
        <section className="text-gray-600 body-font w-full overflow-x-auto">
            <div className="container px-44 py-24 mx-auto font-serif">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Customer Reviews</h1>
                </div>
                <div className="flex space-x-4 overflow-x-auto">

                    {reviewsData.Reviews.map((review, index) => (
                        <div key={index} className="p-2 min-w-[250px]">
                            <div className="flex border bg-white p-4 flex-col shadow-xl">
                                <div className="flex items-center mb-3">
                                    <Image src="/images/flag.png" className="w-8 h-6 mr-2" width={10} height={10} alt="flag" />
                                    <h2 className="text-black title-font font-bold">{review.title}</h2>
                                </div>
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-[#f7a531]" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    ))}
                                    <span className="text-gray-600 ml-auto text-right text-sm">{review.date}</span>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-black title-font font-bold text-sm py-2">{review.subtitle}</h2>
                                    <p className="leading-relaxed text-sm">{review.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Reviews;
