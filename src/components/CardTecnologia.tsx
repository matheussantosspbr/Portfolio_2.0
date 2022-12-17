interface Props{
    linguagem: string;
    arquivo: string;
    colorStroke: string;
    colorShadow: string;
    alt:string;
  }

export default function CardTecnologia({linguagem, arquivo,colorStroke,alt, colorShadow}: Props ){


    return(
        <div className={`
                border
                w-60
                h-60
                rounded-lg
                ml-5
                mr-5
                mb-8
                border-transparent
                shadow-center
                ${colorShadow}
        `}>
            <div className="h-48">
            <div className="relative top-5 left-10 w-full">
              <svg className="w-full">
                <circle cx="75" cy="75" r="70" className="fill-none stroke-black stroke-5"></circle>
                <circle cx="75" cy="75" r="70" className={`${colorStroke} fill-none stroke-5`} ></circle>
              </svg>
            </div>
            <figure className="relative w-16 -top-[5.2rem] left-[5.2rem]">
                <img src={`/linguagens/${arquivo}.svg`} alt={alt} />
            </figure>
            </div>
            <p className="text-white w-full text-center font-medium">{linguagem}</p>
        </div>
    )
}