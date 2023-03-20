import { Link, useNavigate } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import Navbar from './Navbar'
import NavToggler from '#assets/icons/navToggler.svg'
import SearchBox from '#components/Searchbox/SearchBox'

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-background-2 min-h-[120px] w-full flex items-center">
                <div className="container py-4 flex flex-wrap items-center justify-between gap-4">
                    <img
                        src={NavToggler}
                        className={'w-6 h-fit cursor-pointer'}
                    />
                    <Link to="/">
                        <h1 className="text-white text-xl xs:text-4xl">
                            DeepWuxia
                        </h1>
                    </Link>
                    <div className="w-full md:max-w-[300px] lg:max-w-[400px] flex items-center flex-grow order-1 md:order-none">
                        <SearchBox
                            handleSearch={(val: string) =>
                                navigate(`/search?query=${val}`)
                            }
                            placeholder="Search for novels"
                            classString="rounded-lg flex w-full"
                            textStyle="appearance-none py-3 px-4 mb-1 text-[14px] leading-[21px] text-gray-800 border border-gray-200"
                        />
                    </div>
                    <div className="flex items-center lg:gap-4">
                        <HiOutlineUser className="text-white w-8 h-fit cursor-pointer" />
                        <FiShoppingCart className="text-white w-8 h-fit cursor-pointer" />
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Header
