import PropTypes from 'prop-types';
import { useGlitch } from 'react-powerglitch';

const GlitchyWrapper = ({ children }) => {
  const glitch = useGlitch({
    timing: {
      duration: 300,
    },
    slice: {
      hueRotate: false,
    },
    playMode: 'hover',
  });

  return <div ref={glitch.ref}>{children}</div>;
};

GlitchyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlitchyWrapper;
