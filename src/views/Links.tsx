export default function Links() {
        document.title ='Links'
    return (
        <main className="bg-galaxy md:bg-size-25 bg-no-repeat h-auto w-full flex flex-col items-center justify-center p-10">
                <div className="flex flex-col items-center justify-center">
                        <figure className="mb-4 shadow-cyan-500 shadow-center-md rounded-full border-2 border-dashed border-cyan-500 p-2 w-32">
                                <img src="/logo.png" alt="Logo" className="w-32"/>
                        </figure>
                        <h2 className="text-2xl text-white font-bold">Matheus Santos</h2>
                        <h3 className="text xl text-white font-semibold">Dev. Full-Stack</h3>
                </div>
                <div className=" flex flex-col mb-8 mt-8">
                        <a href="/" className="border-2 border-cyan-500 rounded-full mb-4 p-4 w-60 hover:bg-cyan-500 text-white flex flex-col items-center justify-center shadow-center-md shadow-cyan-500 transition-colors
            duration-[0.2s]">Web Site</a>
                        <a href="https://www.instagram.com/matheussantos.pro/" className="border-2 border-cyan-500 rounded-full mb-4 p-4 w-60 hover:bg-cyan-500 text-white flex flex-col items-center justify-center shadow-center-md shadow-cyan-500 transition-colors
            duration-[0.2s]">Instagram</a>
                        <a href="https://api.whatsapp.com/send?phone=5511953109028" className="border-2 border-cyan-500 rounded-full mb-4 p-4 w-60 hover:bg-cyan-500 text-white flex flex-col items-center justify-center shadow-center-md shadow-cyan-500 transition-colors
            duration-[0.2s]">WhatsApp</a>
                        <a href="https://www.linkedin.com/in/matheussantosspbr/" className="border-2 border-cyan-500 rounded-full mb-4 p-4 w-60 hover:bg-cyan-500 text-white flex flex-col items-center justify-center shadow-center-md shadow-cyan-500 transition-colors
            duration-[0.2s]">LinkedIn</a>
                        <a href="https://github.com/matheussantosspbr" className="border-2 border-cyan-500 rounded-full mb-4 p-4 w-60 hover:bg-cyan-500 text-white flex flex-col items-center justify-center shadow-center-md shadow-cyan-500 transition-colors
            duration-[0.2s]">Github</a>
                        <a href="#" className="border-2 border-cyan-500 rounded-full p-4 w-60 hover:bg-cyan-500 text-white flex flex-col items-center justify-center shadow-center-md shadow-cyan-500 transition-colors
            duration-[0.2s]">
                                <p>Youtube</p>
                                <span className="text-sm">Em Breve</span>
                        </a>
                </div>
                <div>
                        <p className="text-white text-center">Feito com ♥ pelo Dev. Matheus Santos.</p>
                        <p className="text-white text-center">© 2022.</p>
                </div>
        </main>
    )
  }