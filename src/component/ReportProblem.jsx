import { useNavigate } from "react-router-dom";
import { useState } from "react";

const createReport = async (formData) => {
  const Response = await fetch("http://localhost:4000/report/add",
    {
      method: "post",
      body: formData
    })
  const result = Response.json()
  console.log("API RESPONSE:", result);
  return result;
}

export default function Problem() {
  const [error, seterror] = useState("")
  const [loading, setloading] = useState(false)

  const [formdata, setformdata] = useState({
    name: "",
    clas: "",
    rollnumber: "",
    discription: "",
    photo: null
  })
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formdata.name ||
      !formdata.clas ||
      !formdata.rollnumber ||
      !formdata.discription ||
      !formdata.photo
    ) {
      seterror("Please fill all fields");
      return;
    }

    seterror("");
    setloading(true);

    const data = new FormData();
    data.append("name", formdata.name);
    data.append("clas", formdata.clas);
    data.append("rollnumber", formdata.rollnumber);
    data.append("discription", formdata.discription);
    data.append("photo", formdata.photo);

    try {
      const res = await createReport(data);
      if (res.success) {
        Navigate("/submitted")
      }
    } catch (err) {
      seterror("Failed to submit report. Please try again.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] py-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-2xl animate-in fade-in zoom-in duration-500">
        <div className="glass p-8 md:p-12 rounded-[2rem] border-white/40">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">Report an Issue</h1>
            <p className="text-slate-500">Provide details about the problem and help us fix it.</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input
                  value={formdata.name}
                  onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white/50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 ml-1">Class / Department</label>
                <input
                  value={formdata.clas}
                  onChange={(e) => setformdata({ ...formdata, clas: e.target.value })}
                  placeholder="CS-A"
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white/50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                  type="text"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 ml-1">Roll Number</label>
              <input
                value={formdata.rollnumber}
                onChange={(e) => setformdata({ ...formdata, rollnumber: e.target.value })}
                placeholder="12345"
                className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white/50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all"
                type="number"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 ml-1">Description of Problem</label>
              <textarea
                value={formdata.discription}
                onChange={(e) => setformdata({ ...formdata, discription: e.target.value })}
                placeholder="Describe the issue in detail..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 outline-none transition-all min-h-[120px]"
                rows="4"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 ml-1">Photo Evidence</label>
              <div className="relative group">
                <input
                  onChange={(e) => setformdata({ ...formdata, photo: e.target.files[0] })}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  type="file"
                  accept="image/*"
                />
                <div className="w-full h-14 border-2 border-dashed border-slate-200 group-hover:border-indigo-600 rounded-xl flex items-center justify-center gap-2 text-slate-500 group-hover:text-indigo-600 transition-all bg-white/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{formdata.photo ? formdata.photo.name : "Select or capture photo"}</span>
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium animate-bounce">
                {error}
              </div>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-bold text-lg 
                       transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl 
                       hover:shadow-indigo-500/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? "Submitting..." : "Submit Report"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}