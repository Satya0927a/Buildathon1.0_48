import { useNavigate } from "react-router-dom";
export default function Hero() {
    const navigation = useNavigate()
    return (
        <section className="hero">

            <div className="container hero-inner">
                <h1 className="text-[58px] font-bold flex justify-center gap-5 cursor-pointer">
                    <div className="flex">
                        <span className="block transition-all hover:rotate-y-90">D</span>
                        <span className="block transition-all hover:rotate-y-90">r</span>
                        <span className="block transition-all hover:rotate-y-90">a</span>
                        <span className="block transition-all hover:rotate-y-90">w</span>
                    </div>
                    <div className="flex">
                        <span className="block transition-all hover:rotate-y-90">I</span>
                        <span className="block transition-all hover:rotate-y-90">t</span>
                    </div>
                    <div className="flex text-violet-600">
                        <span className="block transition-all hover:rotate-y-90">D</span>
                        <span className="block transition-all hover:rotate-y-90">e</span>
                        <span className="block transition-all hover:rotate-y-90">s</span>
                        <span className="block transition-all hover:rotate-y-90">c</span>
                        <span className="block transition-all hover:rotate-y-90">r</span>
                        <span className="block transition-all hover:rotate-y-90">i</span>
                        <span className="block transition-all hover:rotate-y-90">b</span>
                        <span className="block transition-all hover:rotate-y-90">e</span>
                    </div>
                    <div className="flex text-violet-600">
                        <span className="block transition-all hover:rotate-y-90">I</span>
                        <span className="block transition-all hover:rotate-y-90">t</span>
                    </div>
                    <div className="flex">
                        <span className="block transition-all hover:rotate-y-90">D</span>
                        <span className="block transition-all hover:rotate-y-90">e</span>
                        <span className="block transition-all hover:rotate-y-90">p</span>
                        <span className="block transition-all hover:rotate-y-90">l</span>
                        <span className="block transition-all hover:rotate-y-90">o</span>
                        <span className="block transition-all hover:rotate-y-90">y</span>
                    </div>
                    <div className="flex">
                        <span className="block transition-all hover:rotate-y-90">I</span>
                        <span className="block transition-all hover:rotate-y-90">t</span>
                    </div>
                </h1>

                <p className="hero-sub">
                    Stop coding from scratch. Start morphing your ideas
                </p>

                <div className="hero-cta">
                    <button onClick={() => { navigation('/app') }} className="bg-linear-to-br from-50% from-violet-700 to-violet-400 h-12 w-40 text-[16px] rounded-xl mt-8 font-bold cursor-pointer hover:bg-violet-500 hover:scale-110 transition-all">Get Started</button>
                </div>

                <p className="hero-note">You focus on ideas · Morphix builds the UI</p>
            </div>
        </section>
    );
}
