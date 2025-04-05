//import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const links = [
    { to: '/', title: 'Accueil' },
    { to: '/about', title: "L'association" },
    //{ to: '/shop', title: 'La Boutique' },
    { to: '/contact', title: 'Contact' },
  ];

  return (
    <nav className='flex-centered w-full fixed top-0 left-0 z-10 '>
      <div className='flex flex-row flex-wrap justify-center w-full max-w-4xl relative px-4 my-8 gap-x-6 gap-y-2'>
        {links.map(({ to, title }, id) => (
          <>
            <HashLink
              key={title}
              to={to}
              className={`text-3xl font-bold uppercase font-[Oswald] shift-hover bg-black px-1 ${
                location.pathname === to
                  ? 'text-neutral-100'
                  : 'text-neutral-300 hover:text-neutral-100'
              }`}
            >
              {title}
            </HashLink>
            {id < links.length - 1 && (
              <h2 className='hidden md:block bg-black px-1 '> / </h2>
            )}
          </>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
