import { useState, useEffect } from "react"

export default function ProblemReported() {
  const [reports, setreports] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4000/report/allreport")
      .then((res) => res.json())
      .then((data) => {
        setreports(data)
        setloading(false)
      })
      .catch(() => setloading(false))
  }, [])

  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

      <header className="mb-12 text-center space-y-2">
        <h1 className="text-4xl font-extrabold text-slate-900">Reported Problems</h1>
        <p className="text-slate-500 max-w-xl mx-auto">
          View all issues reported by students. Click on images to see details.
        </p>
      </header>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 font-medium">Loading reports...</p>
        </div>
      ) : reports.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reports.map((item, idx) => (
            <div
              key={item._id}
              className="glass rounded-3xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300 border-white/40 group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`http://localhost:4000/${item.photo}`}
                  alt="problem"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                  NEW
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{item.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{item.clas}</p>
                  </div>
                  <span className="text-sm font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                    #{item.rollnumber}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-700">Problem Description</p>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {item.discription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass rounded-[2rem] max-w-2xl mx-auto border-white/40">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-slate-900">No issues reported!</h2>
          <p className="text-slate-500 mt-2">Campus is currently running smooth.</p>
        </div>
      )}
    </div>
  )
}