import "./Main.css"
import Apresentação from '../Sobre/Apresentacao'
import Projetos from '../Projeto/Slides'

const Inicio= () => {
  return (
    <>
      <main className='hero-container'>
        <h1 className='header-title'> Procurando um Desenvolvedor <span style={{color : "#0ef"}}>Front-End</span>
        ?</h1>
        <svg className='arrows'>
          <path className='a1' d='M0 0 L30 32 L60 0'></path> 
          <path className='a2' d='M0 20 L30 52 L60 20'></path> 
          <path className='a3' d='M0 40 L30 72 L60 40'></path> 
        </svg>
      </main>
        <Apresentação />
        <Projetos />
    </>
  )
}

export default Inicio