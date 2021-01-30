import Link from "next/link";
import "semantic-ui-css/semantic.css";
const Navbar = () => (
  <nav className="navbar">
    <img src="/logo.png" className="logo" />
    <Link href="/">
      <a className="navbar-brand">Home</a>
    </Link>
    <Link href="/tfr/new">
      <a className="create">Create TFR</a>
    </Link>
  </nav>
);

export default Navbar;
