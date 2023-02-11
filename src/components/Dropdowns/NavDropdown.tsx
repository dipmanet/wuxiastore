import { useState, useRef, useEffect } from 'react'
import { createPopper } from '@popperjs/core'
import { Link } from 'react-router-dom'

interface TypeNavDropDown {
    title: string
    link?: string
    options?: any[]
}

const NavDropdown = ({ title, link, options }: TypeNavDropDown) => {
    const [showNavDropDown, setShowNavDropDown] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>()

    useEffect(() => {
        const handleClickOutside = (event: any): void => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowNavDropDown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div ref={dropdownRef} className="">
                <button
                    className="text-black font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 hover:text-red-500 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowNavDropDown(!showNavDropDown)}
                >
                    {title}
                </button>
                {showNavDropDown && (
                    <div className="relative">
                        <div className="absolute top-0">
                            {options &&
                                options.length > 0 &&
                                options.map((option, idx) => (
                                    <SideMenu
                                        key={idx}
                                        title={option.name}
                                        link={option.link}
                                        options={[...option.children]}
                                    />
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

const SideMenu = ({ title, link, options }: TypeNavDropDown) => {
    const [showChildren, setShowChildren] = useState(false)
    const submenuRef = useRef<HTMLDivElement>()

    return (
        <>
            <div className="w-fit flex bg-purple-100">
                <div
                    className="min-w-[150px] flex cursor-pointer whitespace-nowrap px-5 py-1 hover:bg-gray-100 hover:pl-7 ease-in-out"
                    onMouseEnter={() => setShowChildren(true)}
                    onMouseLeave={(e) => setShowChildren(false)}
                >
                    {link ? <Link to={link}>{title}</Link> : title}
                </div>
                {showChildren && (
                    <div
                        className="relative"
                        onMouseLeave={() => setShowChildren(false)}
                        onMouseEnter={() => setShowChildren(true)}
                    >
                        <div className="absolute left-full flex flex-col">
                            {options &&
                                options.length > 0 &&
                                options.map((option, idx) => (
                                    <div
                                        ref={submenuRef}
                                        key={idx}
                                        className="bg bg-purple-100 min-w-[150px] flex cursor-pointer whitespace-nowrap px-5 py-1 hover:bg-gray-100 hover:pl-7 ease-in-out"
                                    >
                                        {option.link ? (
                                            <Link to={option.link}>
                                                {option.name}
                                            </Link>
                                        ) : (
                                            option.name
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default NavDropdown
