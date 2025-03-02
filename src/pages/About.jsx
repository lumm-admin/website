import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useGlitch } from 'react-powerglitch';

const About = () => {
  const assocText = (
    <>
      Fondée le 9 octobre 2023 par 7 étudiants, <strong>LÜMM</strong> est une
      association à but <strong>non lucratif</strong> qui a pour mission de
      rendre la culture <strong>accessible</strong> tout en mettant en lumière
      des artistes <strong>émergents</strong>.{<br />}
      Les <strong>buts</strong> de l’association incluent l’organisation
      d’événements <strong>hyper accessibles</strong> avec des prix très bas ou
      libres, ainsi que le soutien et la mise en lumière des{' '}
      <strong>artistes</strong> dans les domaines de la <strong>musique</strong>
      , de la <strong>mode</strong> et des <strong>arts visuels</strong>.
      {<br />}Par ailleurs, elle s’efforce de développer et de diffuser une
      identité <strong>audiovisuelle unique</strong>, contribuant ainsi à
      enrichir le paysage artistique, tout en encourageant la créativité et
      l’inclusivité.
    </>
  );

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
      <Navbar />
      {/* Mobile */}
      <div className='flex flex-col items-center md:hidden section-container first-section overflow-hidden'>
        <img
          src='/images/comite.jpg'
          className='max-w-sm mt-[10vh] mb-8'
          ref={glitch.ref}
        />
        <h1 className='pb mr-auto'>- Notre histoire</h1>
        <p className='text-start text-md'>{assocText}</p>
      </div>
      {/* Desktop */}
      <div className='hidden md:flex w-screen h-screen flex-row items-center space-between overflow-hidden relative'>
        <img
          src='/images/comite.jpg'
          className='h-screen absolute -top-5 -right-[calc(200px-10vw)] block'
          ref={glitch.ref}
        />
        <div className='flex flex-col items-start absolute top-1/2 left-2/5 -translate-1/2 w-2/3 max-w-[650px] bg-black px-10 py-6'>
          <h1 className='pb'>- Notre histoire</h1>
          <p className='text-start text-md'>{assocText}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
