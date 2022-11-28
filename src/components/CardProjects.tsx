interface Props{
    url: string;
    title: string;
    alt: string;
  }

export default function CardProjects({url, alt,title, }: Props ){


    return(
        <div className='h-72 w-64 p-3 border-2 border-gray-900 hover:border-white border-dashed rounded flex items-center justify-center flex-col ml-5 mr-5 mb-8 '>
            <figure>
                <img src={url} alt={alt} className='w-48' />
            </figure>
            <div>
                <p className="text-xl mt-2">{title}</p>
            </div>
            
        </div>
    )
}