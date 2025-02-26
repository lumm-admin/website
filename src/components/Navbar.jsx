import PropTypes from 'prop-types';
import { FaHouse } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ pageName, hideHome }) => {
  return (
    <nav className='flex-centered w-full absolute top-0 left-0 border-b-1 border-b-gray-300'>
      <div className='flex flex-row justify-start w-full max-w-4xl relative px-4 my-4'>
        {!hideHome && (
          <HashLink
            className='text-2xl hover:cursor-pointer flex-centered p-2'
            to='/'
          >
            <FaHouse />
          </HashLink>
        )}
        <h1 className='text-xl absolute translate-x-[-50%] top-0 left-[50%]'>
          {pageName}
        </h1>
        <h1 className='!text-transparent text-xl'>{pageName}</h1>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  pageName: PropTypes.string.isRequired,
  hideHome: PropTypes.bool,
};

export default Navbar;
