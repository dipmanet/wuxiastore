import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface TypeNavDropDown {
    title: string
    link?: string
    options?: any[]
    menuColor?: string
}

const NavDropdown = ({ title, link, options, menuColor }: TypeNavDropDown) => {
    const [showNavDropDown, setShowNavDropDown] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>()

    useEffect(() => {
        const handleHoverOutside = (event: any): void => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowNavDropDown(false)
            }
        }

        document.addEventListener('mouseover', handleHoverOutside)
        return () => {
            document.removeEventListener('mouseover', handleHoverOutside)
        }
    }, [])

    return (
        <>
            <div
                id={`${NavDropdown.name}`}
                ref={dropdownRef}
                className="flex flex-col h-full"
            >
                <div
                    className={`${
                        menuColor ? menuColor : 'text-black'
                    } inline-flex items-center font-bold uppercase text-sm  mx-2 h-full hover:text-red-500 ease-linear transition-all duration-150 cursor-pointer`}
                    onMouseOver={() => setShowNavDropDown(true)}
                >
                    {title}
                </div>
                {showNavDropDown && (
                    <div className="relative h-0">
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
                    className="w-[200px] flex cursor-pointer whitespace-nowrap px-5 py-1 hover:bg-gray-100 hover:pl-7 ease-in-out"
                    onMouseEnter={() => setShowChildren(true)}
                    onMouseLeave={() => setShowChildren(false)}
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
                                        className="min-w-[200px] flex cursor-pointer whitespace-nowrap pl-10  py-1 bg-purple-100 hover:bg-gray-100 hover:pl-14 ease-in-out"
                                    >
                                        {option.link ? (
                                            <Link to={option.link}>
                                                <h4 className="">
                                                    {option.name}
                                                </h4>
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
