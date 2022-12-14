import { NextPage, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { BsFillPersonFill, BsPersonFill } from 'react-icons/bs';
import Typed from 'react-typed';

import Title from '../components/Title';
import LinkList from '../components/LinkList';
import LocaleSelect from 'components/LocaleSelect';
import { LinkListItemProps } from 'components/LinkList/LinkList';

const Home: NextPage = () => {
  const [hoveredLinkListRow, setHoveredLinkListRow] =
    useState<number | undefined>(undefined);

  const router = useRouter();
  const t = useTranslations('Index');
  const typedRef = useRef<any>(null);

  const links: LinkListItemProps[] = [
    {
      icon: <BsFillPersonFill key={'0-links-person-icon'} />,
      label: t('personal-resume'),
      url:
        router.locale === 'de'
          ? '/documents/personal-resume-german.pdf'
          : '/documents/personal-resume-english.pdf',
    },
    {
      icon: <MdMail key={'1-links-mail-icon'} />,
      label: 'mail@falkmarinov.de',
      url: 'mailto:mail@falkmarinov.de',
    },
    {
      icon: <FaLinkedinIn key={'2-links-linkedin-icon'} />,
      label: '/falkmarinov',
      url: 'https://www.linkedin.com/in/falkmarinov',
    },
    {
      icon: <FaGithub key={'3-links-person-icon'} />,
      label: '/falkmarinov',
      url: 'https://github.com/falkmarinov',
    },
  ];

  const formatSlogan = (slogan: string, delay: number = 1000): string => {
    let sloganParts = slogan.split(' ');
    let formattedSlogan = `^${delay} ${sloganParts.join(`^${delay} `)}`;

    return formattedSlogan;
  };

  return (
    <>
      <Head>
        <title>Falk Marinov</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={t('description')} />
      </Head>

      <header>
        <nav className='fixed z-10 flex items-center justify-end w-screen font-mono font-bold sm:text-xl lg:text-2xl lg:font-normal'>
          <div className='p-5'>
            <LocaleSelect
              onChange={() => {
                typedRef.current.reset();
              }}
            />
          </div>
        </nav>
      </header>

      <main className='font-mono selection:bg-gray-300 sm:text-xl lg:text-2xl'>
        <section className='relative h-screen lg:columns-2 lg:gap-0'>
          {/* left section */}
          <div className='flex items-center justify-center bg-gray-200 bg-repeat border-b-[1px] border-black lg:border-b-0 lg:border-r-[1px] h-1/2 lg:h-full bg-circuit-board'>
            <div>
              <Title>Falk Marinov</Title>
              <div className='flex'>
                <div className='w-0 h-8 grow'>
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
            </div>
          </div>
          {/* right section */}
          <div className='relative flex items-center justify-center border-t-[1px] border-black lg:border-t-0 lg:border-l-[1px] h-1/2 lg:h-full bg-gray-50'>
            <div className='z-20'>
              <LinkList
                linkItems={links}
                onRowHover={(index: number | undefined) => {
                  setHoveredLinkListRow(index);
                }}
              />
            </div>
            <div className='absolute z-10 flex items-center justify-center w-2/3 h-2/3'>
              {typeof hoveredLinkListRow === 'number' &&
                [
                  <BsFillPersonFill
                    key={'0-listhover-person-icon'}
                    className='w-full h-full text-gray-100'
                  />,
                  <MdMail
                    key={'1-listhover-mail-icon'}
                    className='w-full h-full text-gray-100'
                  />,
                  <FaLinkedinIn
                    key={'2-listhover-linkedin-icon'}
                    className='w-full h-full text-gray-100'
                  />,
                  <FaGithub
                    key={'3-listhover-person-icon'}
                    className='w-full h-full text-gray-100'
                  />,
                ][hoveredLinkListRow]}
            </div>
          </div>
        </section>
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
