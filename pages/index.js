import Head from 'next/head';
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import marwan from '../public/marwan.png';
import Image from 'next/image';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Marwan Mostafa | Portfolio</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-3xl">MDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-teal-300 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Marwan Mostafa
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design
              content needs. Join me down below and {"let's"} get
              cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiOutlineMail />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={marwan}
                priority={1}
                alt="marwan"
                style={{ objectFit: 'cover', height: '100%' }}
              />
            </div>
          </div>
        </section>
        <Services />
        <Portfolio />
      </main>
    </div>
  );
}
