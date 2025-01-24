import React from 'react'
import { BsCopy } from 'react-icons/bs'
import { contractAddress, stringReducer } from '../utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import { exchanges } from './constants'

const Exchanges = () => {

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("Contract address!");
    }

  return (
    <section className='bg_orange p-3 sm:p-5 lg:p-16'>
         <div className='flex flex-col items-center justify-center'>
            <button onClick={handleCopy} className='copy_btn p-3 bg_darkorange rounded-full flex items-center justify-center gap-2 hover:scale-99 transition-all w-[13rem]'>
              <span className='font-bold'> CA: {stringReducer(contractAddress)}</span> 
              <BsCopy className='font-bold' onClick={handleCopy}/>
            </button>
            <h1 className='text_orange my-16 text-4xl md:text-7xl'>
                EXCHANGES
            </h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
            {
                exchanges.map((exchange) => {
                    return <Link target='_blank' key={exchange.name} href={exchange.link} className='flex items-center gap-2 hover:text-orange-400 transition-all'>
                        <div>
                            <Image width={25} height={25} className='rounded-full' src={exchange?.img} alt={exchange.name} />
                        </div>
                        <div className=' text-xs lg:text-lg font-bold'>
                            {exchange.name}
                        </div>
                    </Link>
                })
            }
            </div>
        </div>

    </section>
  )
}

export default Exchanges