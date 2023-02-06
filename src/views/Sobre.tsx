import Divider from '../components/Divider'
import Button from '../components/Button'
import CardTecnologia from '../components/CardTecnologia'
import FormContato from '../components/Form'

export default function Sobre() {
    document.title = 'Sobre'
    return (
        <main className='h-full w-full flex items-center justify-center flex-col'>
            <section className='h-72 flex items-center justify-center flex-col w-full pl-8 pr-8'>
                <h1 className='text-3xl text-white font-bold'>Sobre</h1>
            </section>
            <Divider type='PRIMARY'/>
            <section className='flex mt-8 items-center justify-center mb-8 pl-8 pr-8 lg:flex-col lg:text-justify'>
                    <figure>
                        <img src="/fotoMinha.avif" alt="foto_Minha"  className='w-52 rounded-full border-4 border-cyan-500'/>
                    </figure>
                    <div className=' ml-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:ml-0'>
                        <h2 className='text-2xl text-white font-semibold mb-4 lg:text-center lg:mt-4'>Matheus Santos</h2>
                        <p className='text-white text-base mb-2 xl:text-sm lg:text-base'>
                            Olá, Meu nome é Matheus Santos, tenho 18 anos e Moro na cidade de Mauá, no sudeste de São Paulo.
                            <br />
                            Ja fiz curso de <span className='bg-cyan-500 text-gray-900'>Auxiliar de Escritório</span> pela Senac, Já fiz curso de <span className='bg-cyan-500 text-gray-900'> Inglês</span> pela Tibtis, entre outros cursos.
                            <br />
                            Amo a área de tecnologia, e por isso, de diversos tipos de serviços dentro dessa área, optei em começar minha <span className='bg-cyan-500 text-gray-900'>Graduação de Análise e Desenvolvimento de Sistemas</span> em fevereiro de 2022.
                            <br />
                            Além disso estudei e pretendo estudar mais um pouco futuramente sobre Design Gráfico. Atualmente tenho me aprofundado em <span className='bg-cyan-500 text-gray-900'>React</span>.
                        </p>
                    </div>
                </section>
                <Divider type='SECONDARY'/>
                <section className='flex mt-8  items-center justify-center mb-8 flex-col pl-8 pr-8 xs:pl-0 xs:pr-0'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Tecnologias</h2>
                    <div className='flex flex-wrap items-center justify-center'>
                        <CardTecnologia linguagem='HTML' arquivo='html' color='front-HTML' colorStroke='stroke-linguagens-html' alt='Icone HTML'/>
                        <CardTecnologia linguagem='CSS'  arquivo='css'  color='front-CSS' colorStroke='stroke-linguagens-css' alt='Icone CSS'/>
                        <CardTecnologia linguagem='JavaScript' arquivo='js' color='front-JavaScript' colorStroke='stroke-linguagens-js' alt='Icone JavaScript'/>
                        <CardTecnologia linguagem='React' arquivo='react' color='front-React' colorStroke='stroke-linguagens-react' alt='Icone React'/>
                        <CardTecnologia linguagem='TailWindCSS' arquivo='tailwindcss' color='front-TailWindCSS' colorStroke='stroke-linguagens-tailwindcss' alt='Icone TailWindCSS'/>
                        <CardTecnologia linguagem='PHP' arquivo='php' color='front-PHP' colorStroke='stroke-linguagens-php' alt='Icone PHP'/>
                        <CardTecnologia linguagem='Laravel' arquivo='laravel' color='front-Laravel' colorStroke='stroke-linguagens-laravel' alt='Icone Laravel'/>
                        <CardTecnologia linguagem='PostgreSQL' arquivo='postgreSql' color='front-PostgreSQL' colorStroke='stroke-linguagens-postgreSQl' alt='Icone PostgreSQL'/>
                    </div>
                </section>
                <Divider type='PRIMARY'/>
                <section className='flex mt-8 items-center justify-center mb-8 flex-col pl-8 pr-8 xs:pl-0 xs:pr-0'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Ferramentas</h2>
                    <div className='flex flex-wrap items-center justify-center'>
                        <CardTecnologia linguagem='Photoshop' arquivo='photoshop' color='front-Photoshop' colorStroke='stroke-ferramentas-photoshop' alt='Icone Photoshop'/>
                        <CardTecnologia linguagem='Visual Studio Code'  arquivo='vsCode'  color='front-VSCode' colorStroke='stroke-ferramentas-vsCode' alt='Icone Vs Code'/>
                        <CardTecnologia linguagem='Github' arquivo='github' color='front-Github' colorStroke='stroke-ferramentas-github' alt='Icone Github'/>
                        <CardTecnologia linguagem='Git' arquivo='git' color='front-Git' colorStroke='stroke-ferramentas-git' alt='Icone Git'/>
                    </div>
                </section>
                <Divider type='SECONDARY'/>
                <section className='flex mt-8 items-center justify-center mb-8 flex-col pl-8 pr-8'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Portifólio</h2>
                    <Button type='PRIMARY' title='Clique aqui' width='w-32' add='text-base' url='/portfolio'/>
                </section>
                <Divider type='PRIMARY'/>
                <section className='flex mt-8 items-center justify-center mb-8 flex-col pl-8 pr-8'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Certificados</h2>
                    <Button type='PRIMARY' title='Clique aqui' width='w-32' add='text-base' url='/certificados'/>
                </section>
                <Divider type='SECONDARY'/>
                <section className='mt-8 w-full flex items-center flex-col justify-center pl-8 pr-8'>
                    <h2 className='text-2xl text-white font-semibold mb-8'>Me Mande Uma Mensagem 😉</h2>
                    <FormContato/>
                </section>
        </main>

      
    )
  }