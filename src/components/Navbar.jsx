//import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className='flex-centered w-full absolute top-0 left-0'>
      <div className='flex flex-row flex-wrap justify-center w-full max-w-4xl relative px-4 my-8 gap-x-8 gap-y-2'>
        {[
          { to: '/#home', title: 'Accueil' },
          { to: '/#about', title: "L'association" },
          { to: '/shop', title: 'La Boutique' },
          { to: '/contact', title: 'Contact' },
        ].map(({ to, title }) => (
          <HashLink
            key={title}
            to={to}
            className='text-3xl font-bold uppercase text-neutral-400 hover:text-neutral-300 font-[Oswald] shift-hover'
          >
            {title}
          </HashLink>
        ))}
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
