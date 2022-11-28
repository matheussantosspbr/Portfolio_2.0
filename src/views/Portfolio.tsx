import CardProjects from "../components/CardProjects"

export default function Portfolio() {
    return (
        <main className='h-alto w-full flex items-center justify-center flex-col'>
            <section className='h-alto  flex items-center justify-center flex-col w-full pb-10'>
                <h1 className='text-3xl text-white font-bold pb-14 pt-10'>Portfólio</h1>
                <div className='h-auto w-full p-6  text-gray-900 bg-cyan-500 flex flex-col items-center justify-center shadow-lg-inner shadow-gray-900 pl-8 pr-8'>
                        <div className='flex flex-wrap items-center justify-center w-full pt-10'>
                            <CardProjects url='/public/projetos/RegraDe3.png' alt="Regra de 3" title='teste'/>
                            <CardProjects url='/public/projetos/RegraDe3.png' alt="Regra de 3" title='teste'/>
                            <CardProjects url='/public/projetos/RegraDe3.png' alt="Regra de 3" title='teste'/>
                            <CardProjects url='/public/projetos/RegraDe3.png' alt="Regra de 3" title='teste'/>
                            <CardProjects url='/public/projetos/RegraDe3.png' alt="Regra de 3" title='teste'/>
                        </div>
                    </div>
            </section>
            
        </main>

      
    )
  }