import React from 'react'

const ShimmerButton = ({ content }: { content: string }) => {
    return (
        <a className='duration-300 hover:scale-110'>
            <button className="inline-flex h-12 text-xl animate-shimmer text-stone-700 mt-4 items-center justify-center shadow-lg hover:scale-110 duration-300  border border-slate-100 bg-[linear-gradient(110deg,#ffffff,45%,#CED2D7,55%,#ffffff)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                {content}
            </button>
        </a>
        // Button code

    )
}

export default ShimmerButton
