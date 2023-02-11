import { navMenus } from '#src/constants/navMenus'
import NavDropdown from './Dropdowns/NavDropdown'
const Navbar = () => {
    return (
        <div className="flex">
            {navMenus.length > 0 &&
                navMenus.map((navMenu, idx) => (
                    <NavDropdown
                        key={idx}
                        title={navMenu.name}
                        options={[...navMenu.children]}
                    />
                ))}
        </div>
    )
}

export default Navbar
