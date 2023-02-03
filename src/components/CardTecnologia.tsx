interface Props{
    linguagem: string;
    arquivo: string;
    colorStroke: string;
    colorShadow: string;
    alt:string;
  }

  export default function CardTecnologia({linguagem, arquivo,colorStroke,alt, colorShadow}: Props ){

    
    const cards = document.querySelectorAll('.card')

    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (e) {
            this.classList.toggle("flip")
    })
}

    // for (var i = 0; i < cards.length; i++) {
    //     cards[i].addEventListener("click",  e => {
    //       console.log(e)
          // alert(e)
    //     })
    // }
   
    // cards.forEach((card) => {
    //   card.addEventListener("click", active)
    // })
   
    // function active(event:any) {
    //   cards.forEach((card) => {
    //    card.classList.remove("flip")
      
    //    if(card.contains(event.target)) {
    //     card.classList.add("flip")
    //    }
    //   })
    // }


    return(
      <div className='!w-full h-108'> 
        <div className="card">
          <div className="face front">
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
        <div className="face back">
          back
        </div>
        </div>
      </div>
       
    )
}
