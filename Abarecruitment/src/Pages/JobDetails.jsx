import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
//import { PageHeader } from 'antd';

const JobDetails = () => {

    const {id} = useParams();
    const[job, setJob] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/all-jobs/${id}`).then(res=>res.json()).then(data=>setJob(data))
    },[])

    const handleApply = async() => {
      const { value: url } = await Swal.fire({
        input: "url",
        inputLabel: "URL address",
        inputPlaceholder: "Enter the URL"
      });
      if (url) {
        Swal.fire(`Entered URL: ${url}`);
      }
    }

  return (

    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 border-pink-900 flex h-screen items-center justify-center'>
        <div className=' border shadow-lg w-[40%] p-8'>
        <h2 className='my-4 '><span className='font-bold text-[15px]'>Job Id:</span> {id}</h2>
        <h2 className='my-4 '><span className='font-bold text-[15px]'>Company Name: </span> {job.companyName}</h2>

        <h2 className='my-4 '><span className='font-bold text-[15px]'>Job Title: </span> {job.jobTitle}</h2>
        
        <h2 className='my-4 '> <span className='font-bold text-[15px]'>Salary: </span>${job.minPrice}-${job.maxPrice}</h2>

        <h2 className='my-4 '><span className='font-bold text-[15px]'>Experience:</span> {job.experienceLevel}</h2>
        
        <h2 className='my-4 '><span className='font-bold text-[15px]'>Location:</span> {job.jobLocation}</h2>
        <h2 className='my-4 '><span className='font-bold text-[15px]'>Description:</span> {job.description}</h2>

        

        <div className='flex items-center justify-center mt-5'>
        <button className='bg-blue px-8 py-2 text-white flex items-center justify-center' onClick={handleApply}>Apply Now</button>
        </div>
        </div>
    
    </div>
  )
}

export default JobDetails
 