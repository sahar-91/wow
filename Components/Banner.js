'use client'

export default function Banner() {
  return (
    <div className="relative bg-black flex flex-col h-150 items-center justify-center overflow-hidden pt-20">

      <div className="container mx-auto px-6">
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[300px] h-[300px] md:w-[420px] md:h-[420px] z-0">

        
        <div className="absolute inset-0 rounded-full border border-teal-400" />

        
        <div className="absolute w-[85%] h-[85%] top-[20%] right-[18%] rounded-full opacity-70 bg-[repeating-linear-gradient(45deg,rgba(0,255,255,0.18)_0px,rgba(0,255,255,0.18)_5px,transparent_5px,transparent_16px)]"/>
      </div>

      
  <div className="relative z-10 text-center px-6 max-w-[90vw] md:max-w-[70%] mx-auto">
 
  <p className="text-[7vw] md:text-7xl text-white mb-2 leading-tight text-balance">
    here's a teeny-weeny<br /> glimpse of our work.
  </p>

  <p className="text-[7vw] md:text-7xl text-white mb-6 text-balance">
    what's coming later is
  </p>

  <div className="flex items-center justify-center gap-4">
    <span className="w-10 h-0.5 bg-red-500" />
    <h1 className="text-4xl md:text-7xl font-extrabold whitespace-nowrap">
      <span className="text-red-500">even</span>{' '}
      <span className="text-white">greater</span>
    </h1>
    <span className="w-10 h-0.5 bg-red-500" />
  </div>
</div>
      </div>
      </div>
      
    
  )
}