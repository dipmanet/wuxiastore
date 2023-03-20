import { navMenuCategories, navMenus } from '#/constants/navMenus'
import NavDropdown from './Dropdowns/NavDropdown'
const Navbar = () => {
    return (
        <>
            <div className="bg-background-3 w-full min-h-[53px] hidden md:flex">
                <div className="container flex justify-center lg:justify-between">
                    <div className="items-center hidden lg:flex">
                        {navMenus.length > 0 &&
                            navMenus.map((navMenu, idx) => (
                                <NavDropdown
                                    key={idx}
                                    title={navMenu.name}
                                    options={[...navMenu.children]}
                                    menuColor={'text-white'}
                                />
                            ))}
                    </div>
                    <div className="flex items-center">
                        {navMenuCategories.map((category, idx) => (
                            <NavDropdown
                                key={idx}
                                title={category.name}
                                options={[...category.children]}
                                menuColor={'text-white'}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
