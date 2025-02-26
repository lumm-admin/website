import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';

const DetailedButton = ({ emoji, title, description, onClick, to }) => {
  return (
    <button
      className='fly-hover border rounded-md text-center items-stretch'
      onClick={onClick}
    >
      <HashLink to={to}>
        <div className='h-full w-full p-4'>
          <p className='!text-3xl m-4'>{emoji}</p>
          <p className='font-bold text-lg mt-2'>{title}</p>
          <p className='!text-sm text-gray-600 my-1 max-w-40'>{description}</p>
        </div>
      </HashLink>
    </button>
  );
};

DetailedButton.propTypes = {
  emoji: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default DetailedButton;
