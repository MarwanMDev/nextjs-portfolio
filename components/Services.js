import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

const Services = () => {
  return (
    <section>
      <div>
        <h3 className="text-center text-3xl font-bold mb-10 py-1 dark:text-white">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance full stack
          developer, {"I've"} done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for{' '}
          <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital
          products for both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including building
          websites and mobile applications
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 transition-all ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-gradient-to-b from-teal-300 to-teal-800">
          <Image
            src={design}
            width={100}
            height={100}
            alt="design"
            style={{ margin: 'auto' }}
          />
          <h3 className="text-2xl font-bold pt-8 pb-2 dark:text-white">
            Beautiful Designs
          </h3>
          <p className="py-2 dark:text-white">
            Creating elegant designs suited for your needs following
            core design theory.
          </p>
          <h4 className="py-4 dark:text-white font-medium text-lg">
            Design Tools I Use
          </h4>
          <p className="text-gray-800 py-1 dark:text-white">
            Photoshop
          </p>
          <p className="text-gray-800 py-1 dark:text-white">
            Illustrator
          </p>
          <p className="text-gray-800 py-1 dark:text-white">Figma</p>
          <p className="text-gray-800 py-1 dark:text-white">
            Indesign
          </p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 transition-all ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-gradient-to-b from-teal-300 to-teal-800">
          <Image
            src={code}
            width={100}
            height={100}
            alt="code"
            style={{ margin: 'auto' }}
          />
          <h3 className="text-2xl font-bold pt-8 pb-2 dark:text-white">
            Code your dream project
          </h3>
          <p className="py-2 dark:text-white">
            Do you have an idea for your next great website? {"Let's"}
            make it a reality.
          </p>
          <h4 className="py-4 dark:text-white font-medium text-lg">
            Programming Languages
          </h4>
          <p className="text-gray-800 py-1 dark:text-white">
            JavaScript
          </p>
          <p className="text-gray-800 py-1 dark:text-white">PHP</p>
          <p className="text-gray-800 py-1 dark:text-white">HTML</p>
          <p className="text-gray-800 py-1 dark:text-white">CSS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 transition-all ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-gradient-to-b from-teal-300 to-teal-800">
          <Image
            src={consulting}
            width={100}
            height={100}
            alt="consulting"
            style={{ margin: 'auto' }}
          />
          <h3 className="text-2xl font-bold pt-8 pb-2 dark:text-white">
            Consulting
          </h3>
          <p className="py-2 dark:text-white">
            Are you interested in feedback for your current project? I
            can give you tips and tricks to level it up.
          </p>
          <h4 className="py-4 dark:text-white font-medium text-lg">
            Design Tools I Use
          </h4>
          <p className="text-gray-800 py-1 dark:text-white">
            Photoshop
          </p>
          <p className="text-gray-800 py-1 dark:text-white">
            Illustrator
          </p>
          <p className="text-gray-800 py-1 dark:text-white">Figma</p>
          <p className="text-gray-800 py-1 dark:text-white">
            Indesign
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
