import { Link } from "react-router-dom";

export default function Submitted() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-md w-full glass p-10 rounded-[3rem] text-center space-y-6 border-white/40 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
          <span className="text-5xl" role="img" aria-label="success">✅</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">Thank You!</h1>
          <p className="text-xl font-bold text-emerald-600">Report submitted successfully</p>
        </div>

        <p className="text-slate-500 leading-relaxed">
          Your contribution helps us keep the campus safe and well-maintained.
          The administration will review your report shortly.
        </p>

        <div className="pt-4">
          <Link to="/">
            <button className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-bold text-lg 
                             transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl 
                             hover:shadow-indigo-500/20 active:scale-95">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
