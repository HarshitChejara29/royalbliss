const VirtualBtn = () => {
    return(
        <div className="flex flex-col gap-4 absolute right-0 bottom-0 p-4 z-0 ">
            <button className="relative z-10 bg-green-200">Whatsapp</button>
            <button className="relative z-10 bg-green-200">Video</button>
        </div>
    )
}

export default VirtualBtn;