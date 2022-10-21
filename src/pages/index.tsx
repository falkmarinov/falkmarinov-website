import { NextPage, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useRef, ChangeEventHandler } from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { BsFillPersonFill } from 'react-icons/bs';
import Typed from 'react-typed';

import Title from '../components/Title';
import LinkList from '../components/LinkList';

const Home: NextPage = () => {
  const router = useRouter();
  const t = useTranslations('Index');
  const typedRef = useRef<any>(null);

  const links = [
    {
      icon: <BsFillPersonFill key={'0-person-icon'} />,
      label: t('personal-resume'),
      url:
        router.locale === 'de'
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

  const formatSlogan = (slogan: string, delay: number = 1000): string => {
    let sloganParts = slogan.split(' ');
    let formattedSlogan = `^${delay} ${sloganParts.join(`^${delay} `)}`;

    return formattedSlogan;
  };

  const localeSelectChangeHandler: ChangeEventHandler<HTMLSelectElement> =
    async (e) => {
      await router.push('', '', { locale: e.target.value });
      typedRef.current.reset();
    };

  return (
    <>
      <Head>
        <title>Falk Marinov</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Personal website of Falk Marinov' />
      </Head>

      <main className='relative h-screen font-mono selection:bg-gray-300 sm:text-xl lg:text-2xl'>
        <div className='h-full divide-y-2 divide-black lg:divide-y-0 lg:divide-x-2 lg:columns-2 lg:gap-0'>
          {/* left section */}
          <div className='grid bg-gray-200 bg-repeat place-content-center h-1/2 lg:h-full bg-circuit-board'>
            <div className='min-h-[84px] max-w-[233.73px] sm:min-h-[96px] sm:max-w-[280.48px] lg:min-h-[112px] lg:max-w-[373.97px]'>
              <Title>Falk Marinov</Title>
              <Typed
                typedRef={(ref: any) => {
                  typedRef.current = ref;
                }}
                strings={[formatSlogan(t('slogan'))]}
                showCursor
                typeSpeed={50}
                backSpeed={50}
                cursorChar='|'
                loop
              />
            </div>
          </div>
          {/* right section */}
          <div className='grid place-content-center h-1/2 lg:h-full bg-gray-50 '>
            <LinkList linkItems={links} />
          </div>
        </div>

        <div className='absolute top-[3vh] right-[3vh] font-bold lg:font-normal'>
          <select
            defaultValue={router.locale}
            onChange={localeSelectChangeHandler}
            className='bg-transparent'
          >
            {router.locales?.sort().map((locale, index) => {
              return (
                <option value={locale} key={`${locale}-${index}`}>
                  {locale.toUpperCase()}
                </option>
              );
            })}
          </select>
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
