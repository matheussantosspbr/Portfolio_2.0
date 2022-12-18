import Button from "../components/Button"
import Divider from '../components/Divider'
import CardProjects from '../components/CardProjects';
import CardTecnologia from '../components/CardTecnologia';
import FormContato from "../components/Form";

export default function Inicio() {
    document.title = 'Início'
    return (
            <main className='h-full w-full flex items-center justify-center flex-col'>
                <section className='h-108 flex items-center justify-center flex-col w-full bg-galaxy bg-no-repeat bg-size-25 pl-8 pr-8'>
                    <h1 className='text-3xl text-white font-bold'>Matheus Santos</h1>
                    <h2 className='text-2xl text-white font-semibold'>Dev. FullStack</h2>
                </section>
                <Divider type='PRIMARY'/>
                <section className='mt-8 w-full flex items-center flex-col justify-center'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Portfólio</h2>
                    <div className='h-auto w-full p-6  text-gray-900 bg-cyan-500 flex flex-col items-center justify-center shadow-lg-inner shadow-gray-900 pl-8 pr-8'>
                        <div className='flex flex-wrap items-center justify-center'>
                            <CardProjects url='/projetos/RegraDe3.png' alt="Regra de 3" title='Regra de 3'/>
                            <CardProjects url='/projetos/SistemaDeLogin.png' alt="Sistema de Login" title='Sistema de Login'/>
                        </div>
                        <Button title='Ver Mais' type='SECONDARY' width='w-32' url='/portfolio' add='text-base'/>
                    </div>
                </section>
                <Divider type='SECONDARY'/>
                <section className='flex mt-8 items-center justify-center mb-8 pl-8 pr-8 lg:flex-col lg:text-justify'>
                    <figure>
                        <img src="/fotoMinha.png" alt="foto_Minha"  className='w-52 rounded-full border-4 border-cyan-500'/>
                    </figure>
                    <div className=' ml-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:ml-0'>
                        <h2 className='text-2xl text-white font-semibold mb-4 lg:text-center lg:mt-4'>Matheus Santos</h2>
                        <p className='text-white text-base mb-2 xl:text-sm lg:text-base'>
                            Olá, Meu nome é Matheus Santos, tenho 18 anos e Moro na cidade de Mauá, no sudeste de São Paulo.
                            <br />
                            Ja fiz curso de <span className='bg-cyan-500 text-gray-900'>Auxiliar de Escritório</span> pela Senac, Já fiz curso de <span className='bg-cyan-500 text-gray-900'> Inglês</span> pela Tibtis, entre outros cursos.
                            <br />
                            Amo a área de tecnologia, e por isso, de diversos tipos de serviços dentro dessa área, optei em começar minha <span className='bg-cyan-500 text-gray-900'>Graduação de Análise e Desenvolvimento de Sistemas</span> em fevereiro de 2022.
                        </p>
                        <Button title='Ver Mais' type='PRIMARY' width='w-32' url='/sobre' add='xl:h-8 xl:text-sm xl:w-28 text-base'/>
                    </div>
                </section>
                <Divider type='PRIMARY'/>
                <section className='flex mt-8 items-center justify-center mb-8 flex-col pl-8 pr-8 xs:pl-0 xs:pr-0'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Tecnologias</h2>
                    <div className='flex flex-wrap items-center justify-center'>
                    <CardTecnologia linguagem='HTML' arquivo='html' colorShadow='shadow-linguagens-html' colorStroke='stroke-linguagens-html' alt='Icone HTML'/>
                        <CardTecnologia linguagem='CSS'  arquivo='css'  colorShadow='shadow-linguagens-css' colorStroke='stroke-linguagens-css' alt='Icone CSS'/>
                        <CardTecnologia linguagem='JavaScript' arquivo='js' colorShadow='shadow-linguagens-js' colorStroke='stroke-linguagens-js' alt='Icone JavaScript'/>
                        <CardTecnologia linguagem='React' arquivo='react' colorShadow='shadow-linguagens-react' colorStroke='stroke-linguagens-react' alt='Icone React'/>
                        <CardTecnologia linguagem='TailWindCSS' arquivo='tailwindcss' colorShadow='shadow-linguagens-tailwindcss' colorStroke='stroke-linguagens-tailwindcss' alt='Icone TailWindCSS'/>
                        <CardTecnologia linguagem='PHP' arquivo='php' colorShadow='shadow-linguagens-php' colorStroke='stroke-linguagens-php' alt='Icone PHP'/>
                        <CardTecnologia linguagem='Laravel' arquivo='laravel' colorShadow='shadow-linguagens-laravel' colorStroke='stroke-linguagens-laravel' alt='Icone Laravel'/>
                        <CardTecnologia linguagem='PostgreSQL' arquivo='postgreSql' colorShadow='shadow-linguagens-postgreSQl' colorStroke='stroke-linguagens-postgreSQl' alt='Icone PostgreSQL'/>  
                    </div>
                </section>
                <Divider type='SECONDARY'/>
                <section className='flex mt-8 items-center justify-center mb-8 flex-col pl-8 pr-8 xs:pl-0 xs:pr-0'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Ferramentas</h2>
                    <div className='flex flex-wrap items-center justify-center'>
                        <CardTecnologia linguagem='Photoshop' arquivo='photoshop' colorShadow='shadow-ferramentas-photoshop' colorStroke='stroke-ferramentas-photoshop' alt='Icone Photoshop'/>
                        <CardTecnologia linguagem='Visual Studio Code'  arquivo='vsCode'  colorShadow='shadow-ferramentas-vsCode' colorStroke='stroke-ferramentas-vsCode' alt='Icone Vs Code'/>
                        <CardTecnologia linguagem='Github' arquivo='github' colorShadow='shadow-ferramentas-github' colorStroke='stroke-ferramentas-github' alt='Icone Github'/>
                        <CardTecnologia linguagem='Git' arquivo='git' colorShadow='shadow-ferramentas-git' colorStroke='stroke-ferramentas-git' alt='Icone Git'/>
                    </div>
                </section>
                <Divider type='PRIMARY'/>
                <section className='mt-8 w-full flex items-center flex-col justify-center pl-8 pr-8'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Me Mande Uma Mensagem 😉</h2>
                    <FormContato/>
                </section>
            </main>
    )
  }