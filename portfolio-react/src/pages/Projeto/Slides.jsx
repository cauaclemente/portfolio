import { useEffect, useState } from 'react';
import "./Slide.css";
import { NavLink } from "react-router-dom";

import PiresBarbShop from "../../components/assets/barbearia.png";
import LaPizza from "../../components/assets/lapizza.png";
import Sistema from "../../components/assets/sistemadechamados.png";
import WebAutomotivos from "../../components/assets/webautomotivos.png"
import Ifood from "../../components/assets/ifood.png";

import { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Projetos = () => {

  const [slidePreview, setSlidePreview] = useState(3);
  const [initialSlide] = useState (1);
  const [isHovered, setIsHovered] = useState(null);


  const data =[
    {
      id: 1,
      image: PiresBarbShop,
      name: "Site Barbearia",
      description: "Criei esta Landing Page para uma barbearia com o objetivo de promover o salão, atrair novos clientes e destacar os excepcionais trabalhos e apresentar os incríveis trabalhos realizados por eles.",
      technologies:[
        "Html",
        "Sass",
        "Biblioteca de animação",
      ],
      linkSite: "https://piresbarbershop.vercel.app",
      linkRepository: "https://github.com/cauaclemente/site-para-barbearia-pires",
    },
    {
      id: 2, 
      image: WebAutomotivos,
      name: "WebAutomotivos",
      description: "Desenvolvi uma plataforma de vendas de carros, proporcionando aos usuários a facilidade de visualizar anúncios e simultaneamente anunciar seus próprios veículos.",
      technologies: [
        "React",
        "Firebase",
        "TypeScript",
        "Context Api",
        "Tailwind",
        "React-icons",
      ],
      linkSite: "https://webautomotivos.netlify.app/",
      linkRepository: "https://github.com/cauaclemente/PlataformaDeCarros",
    },
    {
      id: 3, 
      image: LaPizza,
      name: "LaPizza",
      description: "Este é um sistema desenvolvido para uma pizzaria aonde o garçon pode registrar pedidos via celular, que são automaticamente enviados à cozinha. Oferece funcionalidade para abrir e finalizar pedidos com o total calculado.",
      technologies:[
        "Next.Js",
        "Node.Js",
        "PostgreSQL",
        "Prisma",
        "Context API",
        "Express.Js",
        "Sass",
      ],
      linkSite: "https://lapizza-eta.vercel.app/",
      linkRepository: "https://github.com/cauaclemente/Pizzaria-FrontEnd",
    },
    {
      id: 4,
      image: Sistema,
      name: "Sistema de chamados",
      description: "O sistema de chamados apresenta uma interface segura com login, permitindo aos usuários criar e editar o chamados. Essa funcionalidade agiliza a comunicação entre cliente e suporte, garantindo eficiência e gestão eficaz das demandas.",
      technologies: [
        "React",
        "Firebase",
        "Context API",
        "React Router Dom",
        "CSS",
        
      ],
      linkSite: "https://sistemasdechamados2024.netlify.app/",
      linkRepository: "https://github.com/cauaclemente/SIstemas-de-chamados",
    },
    {
      id: 5, 
      image: Ifood,
      name: "FSW Food",
      description: "Este projeto se baseia no sistema do iFood, permitindo a simulação realista de pedidos de lanches. Oferecemos uma experiência completa, desde a seleção dos itens até a finalização do pedido.",
      technologies: [
        "Next.js",
        "Node.js",
        "Prisma",
        "PostegreSQL",
        "TypeScript",
        "Context Api",
        "Tailwind",
        "NextAuth.js"
      ],
      linkSite: "https://dish-delivery.vercel.app/",
      linkRepository: "https://github.com/cauaclemente/FSW-Food",
    },
    

  ]

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <768) {
        setSlidePreview(1);
      }else {
        setSlidePreview(3);
      }
    }

    handleResize();
    
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
});

  return (
    <>
      <section className='container-slide'>
        <h1 className='title-slide'> Principais Projetos</h1>
        <div className='swiper-container'>
        <Swiper 
          className='animation-cards'
          modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
          }}
          slidesPerView={slidePreview}
          pagination={{clickable:true}}
          navigation
          initialSlide={initialSlide}
          >
       {data.map((item) => (
          <SwiperSlide
            key={item.id} className={`imagens-cor ${isHovered === item.id ? 'hovered' : ''} 
              ${item.id === 1 ? 'image-1' : item.id === 2 ? 'image-2' : item.id === 3 ? "item-3" : item.id === 4 ? "image-4" :  
              item.id === 5 ? "image-4" : "image-5" }`}

            onClick={() => setIsHovered(item.id)} 
            onMouseEnter={() => setIsHovered(item.id)} 
            onMouseLeave={() => setIsHovered(null)}>

        <div className={`slide-item ${isHovered === item.id ? 'hovered' : ''}`}>
            <img src={item.image} 
                alt={item.name} 
                className={`slide-img ${isHovered === item.id ? 'blur' : ''}`} />
          <div 
              className={`portfolio-content ${isHovered === item.id ? 'focused' : ''}`}>
           <h2 className='slide-tec'>{item.name}</h2>
              <p>{item.description}</p>
              <div className='tec-title'>
                <p>Tecnologias Utilizadas:</p>
                <ul className="technologies">
                  {item.technologies && item.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                </div>
              {item.linkSite && (
                  <div className='links-container'>
                  <div className='links'>
                    <NavLink
                      className="slide-btn"
                      to={item.linkSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Site
                    </NavLink>
                  </div>
                  <div className='links'>
                    <NavLink
                      className="slide-btn"
                      to={item.linkRepository}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Repositório
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
         </SwiperSlide>     
        ))} 
        </Swiper>
        </div>
      </section>
    </>
  )
}

export default Projetos