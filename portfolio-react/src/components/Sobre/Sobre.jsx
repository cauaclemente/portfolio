import React from 'react'
import "./Sobre.css"
import caminhoDoPdf from "../assets/CurriculoCauaClemente .pdf"

const Sobre = () => {
  return (
    <>
         <div className="profile-sinopse">
        <p className="sobre">Sobre mim...</p>
        <br />
        <p>Atualmente, estou matriculado na Universidade Paulista (UNIP), onde estou cursando minha graduação.
            Além disso, estou investindo meu tempo em cursos de programação, com foco no aprimoramento das habilidades
             em React e JavaScript, através da realização de projetos práticos e estudando Node.js para me torna um full stack.</p>
        <br />
        <p>Tenho um compromisso sério com a criação de experiências de usuário excepcionais e estou aberto a oportunidades 
           que me permitam aprender e colaborar.
        </p>
        <br />
        <p>Estou constantemente em busca de novos desafios, pois acredito que a verdadeira maestria em programação só é alcançada quando aplicamos nossos conhecimentos em situações do mundo real.
           Estou disposto a enfrentar desafios complexos e colaborar em projetos que exijam criatividade e competência técnica.
        </p>
        <br />
        <p>Entretanto, minha jornada não é solitária. Estou totalmente aberto a oportunidades de aprendizado e colaboração, pois acredito que compartilhar conhecimento e trabalhar em equipe com colegas são fundamentais para o crescimento profissional.
            Estou ansioso para colaborar com outros profissionais igualmente apaixonados.
        </p> 
        <br />
        <p>Caso queira ver meu curriculo, basta clicar no botão abaixo para realizar o download </p> 
        <br />
        <a href={caminhoDoPdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{textDecoration : "none"}}>
          <button class="curriculo">Baixar CV</button>
        </a>
        </div>
    </>
  )
}

export default Sobre