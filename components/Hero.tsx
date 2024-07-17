import React from 'react'
import { AuroraBackground } from './ui/AuroraBackground'
import { FlipWords } from './ui/FlipWords'
import ShimmerButton from './ui/ShimmerButton'

const Hero = () => {
    return (
        <div>
            <AuroraBackground>
                <div className="text-stone-600 text-2xl md:text-5xl lg:text-7xl tracking-wider text-center w-full h-full items-center flex justify-center flex-col gap-4">
                    <span className='text-inherit'>Evinize <FlipWords className=" shadow-lg shadow-slate-400 text-stone-800 p-2 rounded text-3xl md:text-5xl lg:text-7xl" words={['Estetik', 'Dayanıklı', 'Modern']} /></span>
                    <span className='text-inherit'>Bir Dokunuş</span>
                    <span className='text-base md:text-lg lg:text-xl'>Sanatın Mermerle Buluştuğu Yer: Estetik Dokunuşlarla Mekânınızı Şekillendirin!</span>
                    <ShimmerButton content="Zarafeti Hissetmeye Başla"/>
                </div>
            </AuroraBackground>
        </div>
    )
}

export default Hero
