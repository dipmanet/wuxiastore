import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

type Props = {
    handleSearch: (value: string) => void
    placeholder: string
    classString?: string
    textStyle?: string
}

const SearchBox = ({
    handleSearch,
    placeholder,
    classString,
    textStyle,
}: Props) => {
    const [searchKeyVal, setSearchKeyVal] = useState('')
    const onSearch = (e: any) => {
        e.preventDefault()
        handleSearch(searchKeyVal)
    }

    return (
        <form
            onSubmit={onSearch}
            className={`flex items-center justify-between w-full h-fit bg-white border border-gray-300 ${
                classString ? classString : ''
            }`}
        >
            <input
                value={searchKeyVal}
                onChange={(e) => {
                    setSearchKeyVal(e.target.value)
                }}
                placeholder={placeholder ? placeholder : 'Search'}
                className={`${
                    textStyle
                        ? textStyle
                        : 'text-base pl-4 pr-2 text-black lg:text-xs'
                } w-full outline-none border-none bg-transparent `}
                type="text"
                onSubmit={onSearch}
            />
            <button
                onClick={onSearch}
                type="button"
                className="px-4 py-[10px] bg-greenTwo flex justify-center items-center lg:px-0 lg:w-6 lg:h-6"
            >
                <span className="text-sm text-white lg:text-xs">
                    <BsSearch />
                </span>
            </button>
        </form>
    )
}

export default SearchBox
