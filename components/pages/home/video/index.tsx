const Video = () => {
    return(
        <section className="bg-gray-600 w-full h-full flex justify-center items-center">
            <ProductVideo/>
        </section>
    )
}

export function ProductVideo() {
    return (
      <video autoPlay loop preload="auto" className="w-full h-full">
        <source src="/videos/PRODUCTVID.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

export default Video;