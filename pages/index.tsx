import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Footer from '../components/Footer';
import Button from '../components/Button';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>caio.io</title>
      </Head>
      <Layout>
        <section className="mt-10 animate-fadeInToRight">
          <div id="img-container" className="w-36 h-36 sm:w-56 sm:h-56 mx-auto">
            <Image
              priority
              layout="responsive"
              width={144}
              height={144}
              src="/images/profile.jpeg"
              className="rounded-full"
              alt="Profile Picture"
            />
          </div>

          <div className="pt-5 max-w-3xl px-4 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold">Caio Martins</h1>
            <p className="sm:text-lg pt-3 text-brand-grey-300">
              Hello 👋, I&apos;m <strong>Caio</strong>. I&apos;m a software
              engineer working as a Fullstack Developer for over a year. Feel
              free to contact me on{' '}
              <a
                href="https://www.linkedin.com/in/caiocdmartins/"
                target="blank"
                className="text-cta-blue-300"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 justify-center mt-10 px-8 sm:flex-row ">
            <Button text="My Projects" to="#" type="primary" />
            <Button text="About me" to="#" type="secondary" />
          </div>
        </section>
      </Layout>
    </>
  );
};

// const Home: NextPage = () => {
//   return (
//     <>
//       <Head>
//         <title>caio.io</title>
//       </Head>
//       <main
//         id="container"
//         className="w-screen h-screen flex items-center flex-col pt-10 justify-between"
//       >
//         <section id="content">
//           <div id="img-container" className="w-36 h-36 sm:w-56 sm:h-56 mx-auto">
//             <Image
//               priority
//               layout="responsive"
//               width={144}
//               height={144}
//               src="/images/profile.jpeg"
//               className="rounded-full"
//               alt="Profile Picture"
//             />
//           </div>

//           <div className="pt-5 max-w-3xl px-4 text-center">
//             <h1 className="text-3xl sm:text-5xl font-bold">Caio Martins</h1>
//             <p className="sm:text-lg pt-3 text-brand-grey-300">
//               Hello 👋, I&apos;m <strong>Caio</strong>. I&apos;m a software
//               engineer working as a Fullstack Developer for over a year. Feel
//               free to contact me on{' '}
//               <a
//                 href="https://www.linkedin.com/in/caiocdmartins/"
//                 target="blank"
//                 className="text-cta-blue-300"
//               >
//                 LinkedIn
//               </a>
//               .
//             </p>
//           </div>

//           <div className="flex flex-col items-center gap-3 justify-center mt-10 px-8 sm:flex-row ">
//             <Button text="My Projects" to="#" primary />
//             <Button text="About me" to="#" secondary />
//           </div>
//         </section>
//         <Footer />
//       </main>
//     </>
//   );
// };

export default Home;
