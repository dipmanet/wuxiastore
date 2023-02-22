import Navbar from './Navbar'
import NavToggler from '#assets/icons/navToggler.svg'
import { Link, useNavigate } from 'react-router-dom'
import { TbAlignLeft } from 'react-icons/tb'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'

import SearchBox from '#components/Searchbox/SearchBox'

const Header = () => {
    const navigate = useNavigate()
    const handleSearchAll = (searchKey: string) => {
        navigate(`/search?query=${searchKey}`)
        console.log('damn')
    }
    return (
        <>
            <div className="bg-background2 min-h-[120px] w-full flex items-center">
                <div className="container flex flex-col justify-between items-center">
                    <div className="w-full py-4 flex items-center justify-between gap-4">
                        {/* <TbAlignLeft className={'w-[50px] h-fit text-white'} /> */}
                        <img src={NavToggler} className={'w-6 h-fit'} />
                        <Link to="/">
                            <h1 className="text-white text-xl xs:text-4xl">
                                DeepWuxia
                            </h1>
                        </Link>
                        <div className="hidden w-full lg:flex items-center">
                            <SearchBox
                                handleSearch={handleSearchAll}
                                placeholder="Search for novels"
                                classString="rounded-lg flex w-full"
                                textStyle="appearance-none py-3 px-4 mb-1 text-[14px] leading-[21px] text-gray-800 border border-gray-200"
                            />
                        </div>
                        <div className="flex items-center">
                            <FaRegUser className="text-white w-8 h-fit" />
                            <BsCart3 className="text-white w-8 h-fit" />
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-center my-3 lg:hidden">
                        <SearchBox
                            handleSearch={handleSearchAll}
                            placeholder="Search for novels"
                            classString="rounded-lg flex md:w-1/2"
                            textStyle="appearance-none py-3 px-4 mb-1 text-[14px] leading-[21px] text-gray-800 border border-gray-200"
                        />
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Header
