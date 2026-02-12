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

  const [formdata, setformdata] = useState({
    name: "",
    clas: "",
    rollnumber: "",
    discription: "",
    photo: null
  })
  const Navigate = useNavigate()

  const handleSubmit = async (e) => {
    console.log("Button Click")
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

    seterror();

    const data = new FormData();
    data.append("name", formdata.name);

    data.append("clas", formdata.clas);
    data.append("rollnumber", formdata.rollnumber);
    data.append("discription", formdata.discription);
    data.append("photo", formdata.photo);




    const res = await createReport(data);
    console.log("REsponse : ", res)
    if (res.success) {
      Navigate("/submitted")
    }

  };


  return (
    <>
      <div className=" text-white bg-[url('/src/assest/homepic.jpg')] bg-cover bg-center bg-no-repeat ">
        <div className="text-4xl font-bold ml-20 pt-20">Report any issue freely
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-10 " >
          <div className="flex flex-col">
            <label className="font-bold text-3xl "> Name

            </label>
            <input value={formdata.name} onChange={(e) => {
              setformdata({ ...formdata, name: e.target.value })
            }} name="name" className="w-100 h-15 border-2 border-blue-200 rounded-2xl text-center hover:border-blue-800 outline-none" type="text" />
          </div>
          <div className="flex flex-col ">
            <label className="font-bold text-3xl ">Class

            </label>
            <input value={formdata.clas} onChange={(e) => {
              setformdata({
                ...formdata, clas: e.target.value
              })
            }} className="input border-2 rounded-full text-center " type="text"></input>
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-3xl ">Roll Number

            </label>
            <input value={formdata.rollnumber} onChange={(e) => {
              setformdata({
                ...formdata, rollnumber: e.target.value
              })
            }} className="input border-2 rounded-full text-center " type="number"></input>
          </div >
          <div className="flex flex-col" >
            <label className="font-bold text-3xl ">Dicription of problem

            </label>
            < textarea value={formdata.discription} onChange={(e) => {
              setformdata({ ...formdata, discription: e.target.value })
            }}
              className="input border-2" cols="30" rows="4" placeholder="Write the details here" />

          </div>
          <div className="flex flex-col ">
            <label className="font-bold text-3xl" >photo of destruction

            </label>
            <input onChange={(e) => {
              setformdata({ ...formdata, photo: e.target.files[0] })
            }} className=" border-2 rounded-full text-center " type="file" accept="image/*" capture="camera" ></input>
          </div>
          {error && (
            <p className="text-red-600 font-bold text-xl">
              {error}
            </p>
          )}
          <button type="submit" className="ml-80 mb-10  w-40 rounded pt-5 px-4 py-2 bg-green-500 text-black 
               transition-all duration-300 
               hover:scale-110 hover:bg-green-600 font-bold">Submit</button>


        </form>

      </div>
    </>
  )
}