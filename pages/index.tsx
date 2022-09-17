import type { NextPage } from 'next';
import Head from 'next/head';

import { FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';

import Title from '../components/Title';

const Home: NextPage = () => {
  const links: (JSX.Element | string)[][] = [
    [
      <GrMail key={'mail-icon'} />,
      'mail@falkmarinov.de',
      'mailto:mail@falkmarinov.de',
    ],
    [
      <FaLinkedinIn key={'linkedin-icon'} />,
      '/falkmarinov',
      'https://www.linkedin.com/in/falkmarinov',
    ],
    [
      <BsFillPersonFill key={'person-icon'} />,
      'personal resume (german)',
      '/documents/personal-resume-german.pdf',
    ],
  ];

  const sequence = [
    '',
    1000,
    'focussed.',
    1000,
    'focussed. adaptable.',
    1000,
    'focussed. adaptable. logical.',
    1000,
    'focussed. adaptable. logical. keen.',
    2000,
  ];

  return (
    <>
      <Head>
        <title>Falk Marinov</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Personal website of Falk Marinov' />
      </Head>

      <main className='h-screen font-mono selection:bg-gray-300 sm:text-xl lg:text-2xl'>
        <div className='h-full lg:columns-2 lg:gap-0'>
          {/* left section */}
          <div className='grid bg-gray-200 bg-repeat place-content-center h-1/2 lg:h-full bg-circuit-board'>
            <div>
              <Title>Falk Marinov</Title>
              <TypeAnimation repeat={Infinity} sequence={sequence} />
            </div>
          </div>
          {/* right section */}
          <div className='grid place-content-center h-1/2 lg:h-full bg-gray-50 '>
            <div className='flex flex-col gap-5'>
              {links.map(([icon, text, url]) => {
                return (
                  <a
                    key={text as string}
                    className='flex items-center gap-5 group'
                    href={url as string}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <div className='grid w-12 h-12 transition duration-300 bg-gray-200 rounded-full place-content-center lg:text-lg group-hover:bg-gray-300'>
                      {icon}
                    </div>
                    <span className='group-hover:underline'>{text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
