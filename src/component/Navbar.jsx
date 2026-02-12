import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 h-16 flex items-center justify-between px-6 md:px-12">
            <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                    PR
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                    ReporterPortal
                </span>
            </Link>

            <div className="flex items-center gap-6">
                <Link
                    to="/"
                    className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/problem"
                    className="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                >
                    Report
                </Link>
                <Link
                    to="/problemreported"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all hover:shadow-lg active:scale-95"
                >
                    View Reports
                </Link>
            </div>
        </nav>
    );
}
