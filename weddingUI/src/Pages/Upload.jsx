import { useState } from "react"
import axios from "./../Api/axios";
// import axios from "axios"


export default function Upload() {
    const [btnMchango, setBtnMchango] = useState(false)
    const [File, setFile] = useState()

    

    function displayMchango (){
        setBtnMchango(prevState => !prevState) 
    }
    function submitMchango(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', File);
        console.log(formData);
        axios.post('/read', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

  return (
    <>
        <div className="container">
            <div className="flex flex-col items-center mt-10 h-screen">
                <h1 className="text-3xl font-bold text-center text-white">Upload your wedding images</h1>
                <p className="text-lg text-gray-600">Upload your wedding images and we will take care of the rest</p>


                <button className="btn bg-teal-400 p-3 rounded-sm" onClick={displayMchango}>Upload Mchango sheet</button>

                {btnMchango && <div className="bg-teal-100 mt-10 p-3 flex flex-col">
                    <input type="file" className='p-5' placeholder="Upload"
                    onChange={(e)=> setFile(e.target.files[0])}/>

                    <button className="btn backdrop-blur-10 p-2 bg-slate-300 w-20 self-center rounded-lg" onClick={submitMchango}>Submit</button>

                </div>}

            </div>
        </div>
    </>
  )
}
