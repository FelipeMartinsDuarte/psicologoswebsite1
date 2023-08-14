import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { InstagramFeed } from '../components/InstagramFeed';
import { ContactModal } from '../components/ContactModal';


export async function getStaticProps(context) {

  const url = `https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={%22id%22:%2218137662785%22,%22first%22:3,%22after%22:%22%22}`

  const res = await fetch(url)
  const json = await res.json();

  const posts = json.data.user.edge_owner_to_timeline_media.edges;

  return {
    props: {
      instagramPosts: posts
    },
    revalidate: 33200
  }

}
export default function Home({ instagramPosts }) {

  const [navbarClass, setNavbarClass] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // console.log(instagramPosts)
  useEffect(function onFirstMount() {
    function changeNavBarOnScroll() {
      setNavbarClass(window.scrollY >= 80);
    }

    window.addEventListener("scroll", changeNavBarOnScroll);

    return () => {
      window.removeEventListener("scroll", changeNavBarOnScroll);
    }
  }, []);

  function scrollToAbout(event): void {
    event.preventDefault();
    const id = 'sobre';
    const yOffset = -60;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function scrollToService(event): void {
    event.preventDefault();
    const id = 'servicos';
    const yOffset = -20;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function openContactModal() {
    setModalOpen(true);
  }

  return (
    <div className=" antialiased">
      <Head>
        <title>Brenda Fernanda - Psicóloga de Crianças e Adolescentes</title>
        <link rel="icon" href="favicon.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content=" Sou Psicóloga e Mestre em Psicologia e trabalho com psicoterapia para infantojuvenil. Meu principal objetivo é promover saúde mental para crianças e adolescentes!" />
        <meta name="keywords" content="psicóloga infantil,psicologia infantil,psicologia infantojuvenil,psicoterapia criança,psicoterapia adolescente,saúde criança,saúde adolescente,terapia,desenvolvimento humano,saúde mental,vitória da conquista" />
        <meta name="LANGUAGE" content="pt-br" />
        <meta name="ROBOT" content="Index,Follow" />
        <meta name="author" content="SEU NOME AQUI" />
        <meta name="google-site-verification" content="bCgF986MCL-BnVaW2bc95HNwlSoiKdUD1UTTXUzpPco" />
      </Head>


      <header className={(navbarClass ? 'active' : '') + ' navbar lg:px-16 px-2 xm:px-5 flex flex-wrap items-center fixed w-full z-40'}>
        <div className="flex-1 flex justify-between items-center">
          <a href="/">
            <Image src="/images/logo.png" className="header-logo" alt="Logo" width={70} height={70} priority={true} />
          </a>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="flex items-center justify-end lg:w-auto w-full my-auto" id="menu">
            <nav>
              <ul
                className="nav-items flex items-center justify-between text-base text-gray-700  font-bold">
                <li><a className="nav-link lg:p-4 py-3 px-0 hidden md:block border-b-2 border-transparent mx-2" href="#sobre"
                  onClick={scrollToAbout}>Sobre mim</a></li>
                <li><a  onClick={scrollToService} className="nav-link lg:p-4 py-3 px-0 block border-b-2 border-transparent mx-3 "
                  href="#servicos">Serviços</a></li>
                <li>
                  <a onClick={openContactModal} className="cta flex text-center font-normal  py-2 xm:py-3 px-3 xm:px-5  block border-b-2 border-transparent bg-complementary rounded-full  focus:outline-none"
                  >Vamos conversar!</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>


      <section id="presentation" className="w-full flex antialiased">
        <div className="w-full md:w-3/5 relative h-full flex presentation-text">
          <div className=" h-auto my-auto md:mx-auto z-10">
            <div className=" font-extrabold presentation-text-margin">
              <h1 className=" presentation-subtitle  color-primary inline">Olá! Sou </h1>
              <h1 className=" presentation-subtitle  color-complementary inline">SEU NOME AQUI </h1>
              <h1 className=" presentation-subtitle color-primary md:inline ">e trabalho com</h1>
              <h1 className=" color-primary mt-4 xm:mt-9 presentation-title">Psicoterapia para</h1>
              <h1 className=" color-complementary mt-1 md:inline presentation-title">Crianças e </h1>
              <h1 className=" color-complementary mt-1 md:inline presentation-title">Adolescentes</h1>
            </div>
            <div className="text-base xl:text-xl mt-9 xm:mt-12">
              <button className="cta bg-complementary rounded-full  px-6 py-3 presentation-text-margin focus:outline-none" onClick={openContactModal}>
                Entre em contato
              </button>
            </div>
          </div>
          <div className="presentation-img-container-mobile">
            <div className=" flex md:hidden z">
              <Image src="/images/brenda-mobile.png" className="presentation-img-mobile" alt="Brenda Fernanda" width={317} height={618} priority={false} quality={100} loading="eager" />
            </div>
          </div>

        </div>
        <div className="w-0 md:w-2/5 h-full flex pink-background">
          <div className="w-full items-end hidden md:flex">
            <div className="mx-auto presentation-img-container flex">
              <Image src="/images/brenda.png" className="presentation-img" alt="Brenda Fernanda" width={317} height={618} priority={false} quality={100} loading="eager" />
            </div>
          </div>
        </div>

      </section>

      <section id="servicos" className="w-full flex antialiased flex-col  items-center justify-center py-8 xm:py-10 my:pd-12 lg:py-20">

        <div className="w-full mb-4 md:mb-16 text-center  items-center justify-center flex">
          <span className="colored-line mr-3"></span>
          <h1 className="section-title font-extrabold color-primary"> Meus Serviços</h1>
          <span className="colored-line ml-3"></span>
        </div>


        <div className="w-11/12 lg:w-9/12  xxl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8 service-grid font-medium color-primary mb-3 md:mb-20">

          <ServiceCard title_1={'Atendimento'} title_2={'Presencial'} image="/images/services/atendimento-presencial.png" imageAlt="Psicóloga atendendo uma criança">
            <p className=" mt-9">
              Atendimento psicoterápico presencial para crianças e adolescentes, visa a restaurar a saúde mental e promover desenvolvimento saudável.
            </p>
            <div className=" mt-6">
              <p className="inline">
                Atendimentos em&nbsp;
              </p>
              <p className="inline font-bold color-complementary">
                Vitória da Conquista - BA.
               </p>
            </div>
          </ServiceCard>

          <ServiceCard title_1={'Atendimento'} title_2={'Online'} image="/images/services/atendimento-online.png" imageAlt="Chamada de vídeo">
            <div className=" mt-9">
              <p className="inline">
                Realizado via celular ou computador, não há necessidade de deslocamento. Atendimento a&nbsp;
            </p>
              <p className="inline font-bold color-complementary">
                crianças, adolescentes e adultos.
            </p>
            </div>
            <p className=" mt-6">
              Pode ser feito com pessoas de todo o Brasil!
            </p>
          </ServiceCard>

          <ServiceCard title_1={'Atendimento'} title_2={'Social'} image="/images/services/atendimento-social.png" imageAlt="Duas pessoas conversando sentadas">
            <div className=" mt-9">
              <p className=" mt-9 inline">
                Visa atender pessoas com renda mais baixa que não podem pagar o valor completo da sessão.
              </p>
              <p className="mt-9 inline font-bold color-complementary">
                &nbsp;Pode ser no formato presencial ou online.
            </p>
            </div>

            <div className=" mt-6">
              <p className="inline">
                Necessário comprovar renda.
            </p>
            </div>
          </ServiceCard>

        </div>


      </section>


      <section id="sobre" className="w-full flex antialiased  items-center justify-center py-8 xm:py-10 my:pd-12 lg:py-16 px-4">
        <div className="w-11/12 lg:w-9/12 xxl:w-3/5 flex">
          <div className="hidden md:flex w-2/6 items-center justify-center mr-6">
            <Image src="/images/about/brenda.png" alt="Rosto de Brenda"
              className=" w-full h-auto" width={342} height={319} quality="100"></Image>
          </div>
          <div className="flex flex-col w-full md:w-4/6 ">

            <div className="flex">
              <div className="flex md:hidden w-2/6 items-center justify-center">
                <Image src="/images/about/brenda.png" alt="Rosto de Brenda"
                  className="w-full h-auto" width={342} height={319} quality="100"></Image>
              </div>
              <div className="flex w-4/6 md:w-full items-center ml-2 md:ml-0">
                <h1 className="section-title font-extrabold color-primary">Sobre mim</h1>
              </div>

            </div>

            <div className="font-medium mt-6 text-lg">
              <p>Me chamo SEU NOME AQUI, sou Psicóloga Clínica (CRP 00/00000), graduada pela Universidade Federal de Sergipe (UFS) e Mestre em Psicologia pela mesma instituição.
             </p>
              <p className=" mt-6">
                Atualmente faço formação em Gestalt-Terapia Infantojuvenil, e meu principal objetivo enquanto psicoterapeuta é promover saúde para crianças e adolescentes!
              </p>
            </div>
          </div>
        </div>

      </section>

      <section id="instagramfeed" className="w-full  antialiased flex flex-col items-center justify-center py-8 xm:py-10 md:pd-12 lg:py-16 xxl:py-28 px-4">
      </section>


      <section id="rodape" className="antialiased flex flex-col md:flex-row items-center justify-center mt-10 sm:mt-5 md:mt-0 py-8 xm:py-10 md:pd-12 lg:py-16 xxl:py-20 px-4 mr-6 xl:mr-16 2xl:py-28">
        <div className="flex flex-col md:w-5/12 xxl:w-4/12 mx-5 md:mx-0">
          <h1 className="section-title font-extrabold color-white">Tem alguma dúvida?</h1>
          <p className="color-white font-medium mt-4">Entre em contato para saber mais sobre locais <br className="hidden xxl:inline"></br> de atendimento, agenda e preços.</p>
        </div>
        <div className="flex flex-col md:w-6/12 xxl:w-5/12 justify-center items-center mt-10 xl:mt-0">
          <div className="flex flex-col justify-center items-end">
            <a onClick={openContactModal} className="cta  text-xl font-medium  text-center  py-5 px-10  block border-b-2 border-transparent bg-complementary rounded-full  focus:outline-none"
            >Vamos conversar!</a>
          </div>

        </div>
      </section>

      <ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen}></ContactModal>

    </div>

  )
}


