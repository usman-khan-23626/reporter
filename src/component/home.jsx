import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <header className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                        Transform Your Campus <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                            Problem by Problem
                        </span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        The University Problem Reporting Portal ensures your voice is heard.
                        Report issues in seconds and help us build a better learning environment.
                    </p>
                </header>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link to="/problem" className="group">
                        <button className="w-full sm:w-64 h-14 bg-indigo-600 text-white rounded-2xl font-bold text-lg 
                                         transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl 
                                         hover:shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2">
                            <span>Report A Problem</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </Link>
                    <Link to="/problemreported">
                        <button className="w-full sm:w-64 h-14 bg-white text-slate-900 border-2 border-slate-200 
                                         rounded-2xl font-bold text-lg transition-all duration-300 
                                         hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg active:scale-95">
                            View Reported Issues
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {[
                    { title: "Quick Reporting", desc: "Submit issues in less than a minute with photo evidence.", icon: "⚡" },
                    { title: "Transparency", desc: "Keep track of all reported problems in real-time.", icon: "👁️" },
                    { title: "Action-Oriented", desc: "Help the administration prioritize campus maintenance.", icon: "🚀" }
                ].map((feature, i) => (
                    <div key={i} className="glass p-8 rounded-3xl space-y-3 hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="text-3xl">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                        <p className="text-slate-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}