import { Link } from "react-router-dom";


export default function Home() {

    return (

        <div className=" bg-[url('/src/assest/homepic.jpg')] bg-cover bg-center bg-no-repeat h-screen items-center justify-center">
            <header className="p-20 text-4xl text-white font-bold"> Welcome To ANKS College's Problem-Reporting-Portal:</header>

            <div className="flex mt-10 gap-2 flex-row items-center justify-center gap-5">
                <Link to={"/problem"} >
                    <button className=" w-50 rounded pt-5 px-4 py-2 bg-green-500 text-black 
               transition-all duration-300 
               hover:scale-110 hover:bg-red-600 font-bold " > Report A Problem</button>
                </Link>
                <Link to={"/problemreported"} >
                    <button className="rounded pt-5 px-4 py-2 bg-green-500 text-black 
               transition-all duration-300 
               hover:scale-110 hover:bg-red-600 font-bold">View Reported Problem</button>
                </Link>
            </div>
        </div>


    )
}