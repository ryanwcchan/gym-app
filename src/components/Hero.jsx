import Button from "./Button"

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
            that we put on ourselves.” <span className="font-semibold text-white-400 font-medium">David Goggins</span></p>
        <Button text="START" />
    </div>
  )
}
