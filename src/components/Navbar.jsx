import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-xl font-semibold text-primary-900 tracking-tight uppercase">
            Tommy Comeau
          </Link>
          <div className="flex space-x-10">
            <Link
              to="/"
              className={`px-1 py-2 text-sm font-medium tracking-wide uppercase transition-colors border-b-2 ${
                isActive('/')
                  ? 'text-primary-900 border-primary-900'
                  : 'text-gray-600 border-transparent hover:text-primary-800 hover:border-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-1 py-2 text-sm font-medium tracking-wide uppercase transition-colors border-b-2 ${
                isActive('/about')
                  ? 'text-primary-900 border-primary-900'
                  : 'text-gray-600 border-transparent hover:text-primary-800 hover:border-gray-300'
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`px-1 py-2 text-sm font-medium tracking-wide uppercase transition-colors border-b-2 ${
                isActive('/projects')
                  ? 'text-primary-900 border-primary-900'
                  : 'text-gray-600 border-transparent hover:text-primary-800 hover:border-gray-300'
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

