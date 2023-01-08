import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, InputSelect } from '../components'
import Input from '../components/Input'
import axios from 'axios'
const Registration = () => {
    const navigate = useNavigate();
    const [errormessage,setErrormessage]=useState("");
    const inputs=[
        {
            id:1,
            name:"fullname",
            type:"text",
            placeholder:"Full Name",
        },
        {
            id:2,
            name:"email",
            type:"email",
            pattern:"+@.com",
            placeholder:"Email",
        },
        {
            id:6,
            name:"desig",
            type:"text",
            placeholder:"Designation",
        },
        {
            id:3,
            name:"mobile",
            type:"tel",
            pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",
            placeholder:"Contact Number",
        },
        {
            id:4,
            name:"ssn",
            type:"text",
            placeholder:"SSN",
            pattern:"[0-9]{9}"
        },
        {
            id:5,
            name:"password",
            type:"password",
            placeholder:"Password",
        },
    ]
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data= new FormData(e.target)
        let recievedData=Object.fromEntries(data.entries());
        recievedData.projid="NA";
        axios.post('https://tilapi.pocsofclients.com/api/user/register/', recievedData, {
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
        }).then((data) => {
            navigate('/pocsof/clients/t1lregistration/thankyou');
        }).catch((error)=>{
            if(error.response){
                console.log(error.response.data);
                console.log(error.response.status);
                setErrormessage(error.response.data);
                console.log(error.response.data["message"]);
                if(error.response.data["message"]!=undefined){
                setErrormessage(error.response.data["message"]);
                }
            }
        })

    }
  return (
    <div className="relative m-0 md:m-0 mt-0 p-0 w-screen h-screen md:p-0 bg-hero-water">
        <div className='h-1/6 w-full lg:w-2/4 bg-no-repeat  bg-cover justify-center lg:ml-80 lg:mr-80 bg-center bg-hero-pattern'/>
        <Header category="Page" title="Employees Registration" />
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:ml-80 lg:mr-80 lg:mb-20 ml-4 mr-4'>
            <form onSubmit={handleSubmit} className=" mt-10">
            <InputSelect name="empBranch" placeholder="Cost Center"></InputSelect>
                {
                    inputs.map((oneinput)=>(
                        <Input key={oneinput.id} {...oneinput}></Input>
                    ))
                }
            {errormessage.length>1 ? <div role="alert">
                        <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Something Went Wrong
                            </div>
                        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>{errormessage}</p>
                        </div>
                        </div>: <div/>}
            <button class="bg-green-500 mt-10 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
            </form>
        </div>
    </div>
  )
}

export default Registration