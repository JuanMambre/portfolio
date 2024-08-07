import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'contact'
    }
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black'>
      <div>
        <h1 className='text-5xl font-signature ml-7'></h1>
      </div>

      <ul className='hidden md:flex '>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='px-4 cursor-pointer capitalize font-medium text-white relative group'
          >
            <Link
              to={link}
              smooth
              duration={500}
            >
              {' '}
              {link}{' '}
            </Link>
            <span className=' absolute -bottom-0 top-[1.30rem] w-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all group-hover:w-full' />
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-white-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=' px-4 cursor-pointer capitalize py-6 text-4xl'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {' '}
                {link}{' '}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar
