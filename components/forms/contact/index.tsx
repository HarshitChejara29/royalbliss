const ContactForm = () => {
    return(
        // <section className=" w-full h-[80vh]">
        //     <form className="grid grid-cols-2 gap-4">
        //         <div className="flex flex-col gap-2 col-start-1 col-span-1">
        //             <label htmlFor="firstname">First Name</label>
        //             <input type="text" id="firstname"/>
        //         </div>
        //         <div className="flex flex-col gap-2 col-start-2 col-span-1">
        //             <label htmlFor="firstname">First Name</label>
        //             <input type="text" id="firstname"/>
        //         </div>
        //         <div className="flex flex-col gap-2 col-start-1 row-start-2 col-span-2">
        //             <label htmlFor="firstname">First Name</label>
        //             <input type="text" id="firstname"/>
        //         </div>
        //         <div className="flex flex-col gap-2 col-start-1 row-start-3 col-span-1">
        //             <label htmlFor="firstname">First Name</label>
        //             <input type="text" id="firstname"/>
        //         </div>
        //         <div className="flex flex-col gap-2 col-start-2 row-start-3 col-span-1">
        //             <label htmlFor="firstname">First Name</label>
        //             <input type="text" id="firstname"/>
        //         </div>
        //     </form>
        // </section>




<section className="text-gray-500 body-font relative font-serif">
  <div className="container py-10 px-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-12 text-black tracking-wide">CONTACT US</h1>
      <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-black tracking-widest">LEAVE US A MESSAGE</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">-Good For Nature, Good For You-</p>
    </div>
    <div className="mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/3">
          <div className="relative">
            <input type="text" id="name" name="name" placeholder="Name" className="w-full bg-white border border-gray-300 focus:border-black focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3">
          <div className="relative">
            <input type="email" id="email" name="email" placeholder="Email" className="w-full bg-white border border-gray-300 focus:border-black focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/3">
          <div className="relative">
            <input type="text" id="phone" name="phone" placeholder="Phone number" className="w-full bg-white border border-gray-300 focus:border-black focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <textarea id="comment" name="comment" placeholder="Comment" className="w-full bg-white border border-gray-300 focus:border-black focus:bg-white h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full mb-10">
          <button className="flex mx-auto text-white hover:text-[#292929] bg-[#292929] border-2 border-[#292929] py-2 px-5 focus:outline-none hover:bg-white text-md">SEND</button>
        </div>
      </div>
    </div>
  </div>
</section>





    )
}

export default ContactForm;