import Link from 'next/link';
import "semantic-ui-css/semantic.css";
const Navbar = () => (
    <nav className='navbar'>
        <Link href="/"> 
            <a className="navbar-brand"> TFRs</a>
        </Link>
        <Link href="/new"> 
            <a className="create">Create TFR</a>
        </Link>
    </nav>
)

export default Navbar;