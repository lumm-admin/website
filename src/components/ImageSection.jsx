import PropTypes from 'prop-types';
import { useGlitch } from 'react-powerglitch';

const ImageSection = ({
  title,
  imgSrc,
  children,
  reverse,
  height = '100vh',
  className,
}) => {
  const glitch = useGlitch({
    timing: {
      duration: 5000,
    },
    glitchTimeSpan: {
      start: 0.9,
      end: 1,
    },
    shake: {
      velocity: 7,
      amplitudeX: 0.01,
      amplitudeY: 0.01,
    },
    slice: {
      velocity: 5,
      maxHeight: 0.13,
      hueRotate: false,
    },
  });

  return (
    <>
      {/* Mobile */}
      <div
        className={
          'flex flex-col items-center md:hidden overflow-hidden px-9 ' +
          className
        }
      >
        <img
          src={imgSrc}
          className='max-w-sm mt-[10vh] mb-8'
          ref={glitch.ref}
        />
        <h1 className='pb mr-auto'>/ {title} /</h1>
        <p className='text-start text-md'>{children}</p>
      </div>
      {/* Desktop */}
      <div
        className={`hidden md:flex w-screen flex-row items-center space-between overflow-hidden relative ${
          reverse ? 'justify-start' : 'justify-end'
        }`}
        style={{ height: height }}
      >
        <img
          src={imgSrc}
          ref={glitch.ref}
          style={{ height: height }}
          className={`absolute  top-0 ${
            reverse ? '-translate-x-1/2 left-1/5' : 'translate-x-1/2 right-1/5'
          }`}
        />
        <div
          className={`flex flex-col items-center absolute top-1/2 ${
            reverse ? '-translate-x-1/2 left-3/5' : 'translate-x-1/2 right-3/5'
          } -translate-1/2 w-2/3 max-w-[650px] bg-black px-6 py-2`}
        >
          <p className='text-start text-md'>
            <h1 className='pb'>- {title} -</h1>
            {children}
          </p>
        </div>
      </div>
    </>
  );
};

ImageSection.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  height: PropTypes.string,
  className: PropTypes.string,
};

export default ImageSection;
