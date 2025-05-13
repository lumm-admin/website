import Marquee from 'react-fast-marquee';

function Footer() {
  return (
    <div className={'w-full flex flex-col items-center'}>
      <div className='w-full overflow-hidden pt-16'>
        <Marquee gradient={false} speed={10}>
          <p className='text-[1.2rem]'>
            ------------------------------------------------------------------------------------------------------------------------
          </p>
        </Marquee>
      </div>
      <div className='flex flex-col px-5 max-w-5xl w-full'>
        <div className='flex flex-row justify-stretch items-start my-10'>
          <div className='flex flex-col justify-between items-start flex-grow'>
            <h3>LÜMM</h3>
            <p>
              Avenue du Tir-Fédéral 25,
              <br />
              1024 Ecublens,
              <br />
              Suisse
            </p>
          </div>
          <div className='flex flex-col justify-between items-end flex-grow'>
            <a
              href='mailto:contact@lumm.love'
              target='_blank'
              rel='noreferrer'
              className='mx-2 text-link h4'
            >
              -Email
            </a>
            <a
              href='https://www.tiktok.com/@lumm.love'
              target='_blank'
              rel='noreferrer'
              className='mx-2 text-link h4'
            >
              -tiktok
            </a>
            <a
              href='https://www.youtube.com/@LUMMMMM'
              target='_blank'
              rel='noreferrer'
              className='mx-2 text-link h4'
            >
              -Youtube
            </a>
            <a
              href='https://www.instagram.com/lumm.love/'
              target='_blank'
              rel='noreferrer'
              className='mx-2 text-link h4'
            >
              -Instagram
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-start px-5 pb-1 max-w-5xl text-center w-full'>
        <p className='font-inkination uppercase text-[0.8rem]'>
          Copyright © LÜMM 2025
        </p>
        <p className='uppercase text-[0.8rem]'>
          Site web designé par{' '}
          <a className='text-link' href='https://mateo.tiedra.com/'>
            Mateo Tiedra
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
