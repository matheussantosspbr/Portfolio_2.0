import { useState, useEffect } from 'react';
import axios from 'axios'
import {NumericFormat} from 'react-number-format'


export default function ConversorDeMoeda() {

  document.title = 'Conversor de Moeda'

  const [response, setResponse] = useState(null);
  const [moeda1, setMoeda1] = useState('Real');
  const [moeda2, setMoeda2] = useState('Dolar');
  const [valor, setValor] = useState('0');
  const [result, setResult] = useState('0');
  
  //Consulta na API
  const fetchQuotes = async () => {
    try {
      const res = await axios.get("https://api-precohoje.matheussantos.tech",{
        headers: {},
        params: {}
      })

      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchQuotes()
    calcular()
  },[valor,result])

  // Pegando os valores
  let dolarParaReal = response?.['USD_BRL'] || 5
  let realParaDolar = response?.['BRL_USD'] || 5
  let euroParaReal = response?.['EUR_BRL']  || 5
  let realParaEuro = response?.['BRL_EUR']  || 5
  let euroParaDolar = response?.['EUR_USD'] || 5
  let dolarParaEuro = response?.['USD_EUR'] || 5

  const calcular = ()=>{

    let valor1 = moeda1 == 'Real' ? valor.replace('R$ ', '') : moeda1 == 'Dolar' ? valor.replace('$', '') : valor.replace(' €', '')
    let valorReal = moeda1 == 'Dolar' ? valor1.replace(/,/g, '') : valor1.split('.').join("");
    let valorFormatado = moeda1 != 'Dolar' ? valorReal.replace(',', '.') : valorReal
    
    if(moeda1 == 'Real' && moeda2 == 'Dolar'){
      setResult(((parseFloat(valorFormatado) * realParaDolar).toLocaleString('en', { style: 'currency', currency: 'USD' })).toString())
    }else if(moeda1 == 'Dolar' && moeda2 == 'Real'){
      setResult(((parseFloat(valorFormatado) * dolarParaReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).toString())
    }else if(moeda1 == 'Real' && moeda2 == 'Euro'){
      setResult(((parseFloat(valorFormatado) * realParaEuro).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })).toString())
    }else if(moeda1 == 'Euro' && moeda2 == 'Real'){
      setResult(((parseFloat(valorFormatado) * euroParaReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).toString())
    }else if(moeda1 == 'Euro' && moeda2 == 'Dolar'){
      setResult(((parseFloat(valorFormatado) * euroParaDolar).toLocaleString('en', { style: 'currency', currency: 'USD' })).toString())
    }else if(moeda1 == 'Dolar' && moeda2 == 'Euro'){
      setResult(((parseFloat(valorFormatado) * dolarParaEuro).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })).toString())
    }else if(moeda1 == 'Dolar' && moeda2 == 'Dolar'){
      setResult(parseFloat(valorFormatado).toLocaleString('en', { style: 'currency', currency: 'USD' }).toString())
    }else if(moeda1 == 'Real' && moeda2 == 'Real'){
      setResult(parseFloat(valorFormatado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).toString())
    }else if(moeda1 == 'Euro' && moeda2 == 'Euro'){
      setResult(parseFloat(valorFormatado).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }).toString())
    }
  }

  return (
    <div className='flex items-center justify-center flex-col h-[80vh]'>
      <h2 className='text-white absolute top-52 text-xl'>Conversor de Moeda</h2>
      <div className='flex p-4 items-center justify-evenly flex-row w-full xl:flex-col xl:justify-center'>
        <div className='w-auto flex items-center justify-start'>
          <select className='w-24 h-10 text-white bg-gray-900 border border-cyan-500 rounded-l outline-none pl-2' value={moeda1} onChange={e => setMoeda1(e.target.value)}>
            <option value="Real"selected>Real</option>
            <option value="Dolar">Dolar</option>
            <option value="Euro">Euro</option>
          </select>

          <NumericFormat
              prefix={ moeda1 == 'Real' ? 'R$ ' : moeda1 == 'Dolar' ? '$' : ''}
              suffix={moeda1 == 'Euro' ? ' €' : ''} 
              decimalScale={2}
              thousandSeparator={moeda1 == 'Dolar' ? ',' : '.'}
              decimalSeparator={moeda1 == 'Dolar' ? '.' : ','}
              className='w-96 md:w-[70vw] sm:w-[60vw] xs:w-[55vw] h-10 p-2 pt-0 pb-0 flex items-center justify-start bg-gray-900 text-white border border-l-0 border-cyan-500 rounded-r outline-none'
              value={valor}
              onChange={e => { setValor(e.target.value)}}
              placeholder={
                moeda1 === 'Real' ?
                'R$ 0,00'
                : moeda1 === 'Dolar' ?
                '$0.00'
                : moeda1 == 'Euro' ?
                '0,00 €'
                : moeda1
              }
          />
        </div>
        <i className="fa-solid fa-arrow-right text-4xl text-white xl:rotate-90 xl:m-10 md:text-3xl"></i>
        <div className='w-auto flex items-center justify-start '>

          <select className='w-24 h-10 text-white bg-gray-900 border border-cyan-500 rounded-l outline-none pl-2' value={moeda2} onChange={e => setMoeda2(e.target.value)}>
            <option value="Real">Real</option>
            <option value="Dolar" selected>Dolar</option>
            <option value="Euro">Euro</option>
          </select>
          
          <input value={
              result === '$NaN' ?
              '$0.00'
              : result === 'R$ NaN' ?
                'R$ 0,00'
              : result === 'NaN €' ?
                '0,00 €'
              : result
            }
            className='w-96 md:w-[70vw] sm:w-[60vw] xs:w-[55vw] h-10 p-2 pt-0 pb-0 flex items-center justify-start bg-gray-900 text-white border border-l-0 border-cyan-500 rounded-r'
            disabled/>
        </div>
    </div>
    </div>
    
  )
}