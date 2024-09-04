import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-white">
            Music App
          </Link>
          <button className="bg-white hover:bg-gray-200 text-[#080808] font-bold py-2 px-4 rounded transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar