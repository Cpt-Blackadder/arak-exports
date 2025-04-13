import { Link } from 'react-router-dom';
import { useManifest } from '../context/ManifestContext';

function Header() {
  const { manifest } = useManifest();

  return (
    <nav className="bg-green-700 text-white p-4 shadow-lg w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div></div> {/* Placeholder for spacing */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-300">Products</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
          <li>
            <Link to="/manifest" className="hover:text-yellow-300">
              Manifest ({manifest.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;