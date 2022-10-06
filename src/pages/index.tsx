import { NextPage, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';

import Title from '../components/Title';
import LinkList from '../components/LinkList';

const Home: NextPage = () => {
  const { locale } = useRouter();
  const t = useTranslations('Index');

  const links = [
    {
      icon: <BsFillPersonFill key={'0-person-icon'} />,
      label: t('personal-resume'),
      url:
        locale === 'de'
          ? '/documents/personal-resume-german.pdf'
          : '/documents/personal-resume-english.pdf',
    },
    {
      icon: <GrMail key={'1-mail-icon'} />,
      label: 'mail@falkmarinov.de',
      url: 'mailto:mail@falkmarinov.de',
    },
    {
      icon: <FaLinkedinIn key={'2-linkedin-icon'} />,
      label: '/falkmarinov',
      url: 'https://www.linkedin.com/in/falkmarinov',
    },
    {
      icon: <FaGithub key={'3-person-icon'} />,
      label: '/falkmarinov',
      url: 'https://github.com/falkmarinov',
    },
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
        <div className='h-full divide-y-2 divide-black lg:divide-y-0 lg:divide-x-2 lg:columns-2 lg:gap-0'>
          {/* left section */}
          <div className='grid bg-gray-200 bg-repeat place-content-center h-1/2 lg:h-full bg-circuit-board'>
            <div>
              <Title>Falk Marinov</Title>
              <TypeAnimation repeat={Infinity} sequence={sequence} />
            </div>
          </div>
          {/* right section */}
          <div className='grid place-content-center h-1/2 lg:h-full bg-gray-50 '>
            <LinkList linkItems={links} />
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

export default Home;
