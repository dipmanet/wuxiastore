import loaderImage from '#assets/icons/loader.gif'

const Loader = ({ fallback }: any) => {
    return fallback ? (
        <>
            {fallback}
            <div className="flex w-screen h-screen  absolute top-0 justify-center items-center bg-[#EAEAEA91] z-50">
                <img
                    src={loaderImage}
                    alt=""
                    className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
                />
            </div>
        </>
    ) : (
        <div className="flex w-screen h-screen  absolute top-0 justify-center items-center bg-[#EAEAEA91] z-50">
            <img
                src={loaderImage}
                alt=""
                className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]"
            />
        </div>
    )
}

export default Loader
