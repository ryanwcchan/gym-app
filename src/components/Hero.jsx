export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center 
    justify-center text-center max-w-[900px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
            <p>IT'S TIME TO LOCK IN</p>
            <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-8xl">GYM <span className="text-blue-400 font-medium">TRACKER</span></h1>
        </div>
        <p className="text-sm md:text-base font-light">“When you think that you are <span>done</span>, 
            you’re <span className="text-blue-400 font-medium">only 40%</span> into what your body’s
            <span className="text-blue-400 font-medium"> capable</span> of doing. That’s just the <span className="text-blue-400 font-medium"> limits </span> 
            that we put on ourselves.” <span className="text-blue-400 font-medium">David Goggins</span></p>
        <button className="px-8 py-4 rounded border-[2px] bg-slate 
        border-blue-400 border-solid blueShadow duration-200">
            <p>JOIN NOW</p>
        </button>
    </div>
  )
}
