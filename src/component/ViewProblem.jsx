import { useState,useEffect } from "react"


export default function ProblemReported(){
   
    const [reports,setreports] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/report/allreport")
        .then((res)=>{ return res.json()})
        .then((data)=>{
            setreports(data)})
    },[])

  

     
    return(

           <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Reported Problems</h1>

      {reports.map((item) => (
        <div
          key={item._id}
          className="border p-5 mb-5 rounded shadow"
        >
          <p><b>Name:</b> {item.name}</p>
          <p><b>Class:</b> {item.clas}</p>
          <p><b>Roll No:</b> {item.rollnumber}</p>
          <p><b>Description:</b> {item.discription}</p>

          <img
            src={`http://localhost:4000/${item.photo}`}
            alt="problem"
            className="w-64 h-40 object-cover mt-3 rounded"
          />
        </div>
      ))}
    </div>
    )
}