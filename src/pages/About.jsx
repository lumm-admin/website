import Navbar from '../components/Navbar';
import { useGlitch } from 'react-powerglitch';

const About = () => {
  const assocText = (
    <>
      Fondée le 9 octobre 2023, <strong>LÜMM</strong> est une association à but{' '}
      <strong>non lucratif</strong> qui a pour mission de rendre la culture{' '}
      <strong>accessible</strong> tout en mettant en lumière des artistes{' '}
      <strong>émergents</strong>.{<br />}
      Les buts de l&apos;association incluent l&apos;organisation
      d&apos;événements hyper accessibles avec des prix très bas ou libres,
      ainsi que le soutien et la mise en lumière des artistes dans les domaines
      de la <strong>musique</strong>, de la <strong>mode</strong> et des{' '}
      <strong>arts visuels</strong> qui partagent ses valeurs.{<br />}Par
      ailleurs, elle s&apos;efforce de développer et de diffuser une identité
      audiovisuelle unique et accessible, contribuant ainsi à enrichir le
      paysage artistique, tout en encourageant la créativité et
      l&apos;inclusivité dans les domaines de l’art et de l’audiovisuel.
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
      <div className='flex flex-col items-center md:hidden section-container first-section '>
        <img
          src='/public/images/comite.jpg'
          className='max-w-sm mt-[10vh] mb-8'
          ref={glitch.ref}
        />
        <p className='text-center text-md'>{assocText}</p>
      </div>
      <div className='hidden md:flex w-full flex-row items-center space-between overflow-hidden'>
        <img
          src='/public/images/comite.jpg'
          className='h-screen absolute -top-5 -left-20 block'
          ref={glitch.ref}
        />
        <p className=' absolute top-1/2 left-1/2 -translate-1/2 text-center text-md w-2/3 max-w-[620px] bg-black px-10 py-6'>
          {assocText}
        </p>
      </div>
    </>
  );
};

export default About;
