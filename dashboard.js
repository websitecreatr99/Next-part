import Head from 'next/head'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import qdqpp from '../public/assets/projects/qdqpp.jpeg';
// import wca from '../public/assets/projects/wca.jpg'
// import netflixImg from '../public/assets/projects/netflix.jpg'
// import lpp from '../public/assets/projects/lpp.jpg'
import ProjectItem from '../components/ProjectItem';
import { useFileUploadMutation } from '../services/userAuthApi';
// import multiparty from "multiparty";
// import bcp from '../public/assets/projects/bcp.jpg'
// import icc from '../public/assets/projects/icc.jpg'
// import crypto from '../public/assets/projects/crypto.png'
// import dogcat from '../public/assets/projects/dog-cat.jpg'
// import ipl from '../public/assets/projects/ipl.jpg'
// import portfolio from '../public/assets/projects/portfolio.jpg'
// import sales from '../public/assets/projects/sales.png'
// import spammail from '../public/assets/projects/spam-mail.jpg'
// import website from '../public/assets/projects/website.jpg'


const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [dataFrame, setDataFrame] = useState([]);
  // const navigate = useNavigate();
  // const router = useRouter();
  const [fileUpload, { isLoading }] = useFileUploadMutation()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileChange = (e) => {
    // Array.from(e.target.files).map( async file =>{
    //   let text = await file.text()
    //   console.log(text)
    // })
    const file = e.target.files[0];
    setSelectedFile(file);
  };
    
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', selectedFile);


  //     if (selectedOption) {
  //       formData.append('operation', selectedOption);
  //     }
      
  //     fileUpload(formData)
  //       .unwrap()
  //       .then((res) => {
  //         console.log('File uploaded successfully', res);
  //       })
  //       .catch((error) => {
  //         console.error('Errors uploading file', error);
  //       });


  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);


      if (selectedOption) {
        formData.append('operation', selectedOption);
      }
      
      fileUpload(formData)
        .unwrap()
        // .then((response) => response.json()) 
        .then((data) => {
          console.log('File uploaded successfully', data);
          console.log(data);
          console.log(Object.keys(data).map(0));
          setDataFrame(data)
          console.log("dataFrame",dataFrame)
          // const DataFrame = require('pandas-js').DataFrame;
          // const df = new DataFrame(data);
          // const tableData = read_json(data);
          // console.log(tableData);
          // return tableData;
        //  return (
        //     <div>
        //       <h1>My DataFrame</h1>
        //       {/* Render the DataFrame data here */}
        //       <pre>{JSON.stringify(tableData, null, 2)}</pre>
        //       {/* <pre>{JSON.stringify(tableData, null, 2)}</pre> */}
        //     </div>
        //   );
        })
        .catch((error) => {
          console.error('Errors uploading file', error);
        });


    }
  };



  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();
  //     console.log(formData)
  //     fileUpload(formData)
  //       .unwrap()
  //       .then((response) => {
  //         console.log('File uploaded successfully', response);
  //       })
  //       .catch((error) => {
  //         console.error('Errors uploading file', error);
  //       });
  //   };


  //   if (selectedFile) {
  //     console.log("my kishan",selectedFile)
  //     const formData = new FormData();
  //     console.log("my kishan",formData)
  //     formData.append('file', selectedFile);
  //     console.log("my kishan",formData)
  //     fileUpload(formData)
  //       .unwrap()
  //       .then((response) => {
  //         console.log('File uploaded successfully', response);
  //       })
  //       .catch((error) => {
  //         console.error('Errors uploading file', error);
  //       });
  //   }
  // };





  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   console.log(data)
  //   const actualData = {
  //     file: data.get('file'),
  //     // email: data.get('email'),
  //     // password: data.get('password'),
  //     // password2: data.get('password2'),
  //     // tc: data.get('tc'),
  //   }
    // const res = await fileUpload(actualData)
    // if (res.error) {
    //   // console.log(typeof (res.error.data.errors))
    //   // console.log(res.error)
    //   setServerError(res.error.data.errors)
    // }
    // if (res.data) {
    //   console.log(typeof (res.data))
    //   console.log(res.data)
      // storeToken(res.data.token)
      // router.push('/dashboard')
  //   }
  // }


    return (
      <div id='projects' className='w-full'>
        <div id='contact' className='w-full h-500'>
          <div className='max-w-[1240px] m-auto px-2 py-16 w-full pt-[140px] '>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
              Dashboard
            </p>
            <div className='grid lg:grid-cols-5 gap-8'>
              {/* left */}
              <div className='col-span-3 lg:col-span-2 w-full h-[750px] shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full '>
                  <div>
                    <Image
                      className='rounded-xl hover:scale-105 ease-in duration-300'
                    //   src={ContactImg}
                      alt='/'
                    />
                  </div>
                  <div>
                    <h2 className='py-2'>Kishan Pahadiya</h2>
                    <p>Data Scientist / Data Analyst | Machine Learning | Deep Learning</p>
                    <p className='py-4'>
                      I am available for internship. Contact
                      me and let&apos;s talk.
                    </p>
                  </div>
                  <div>
                  <Link href='/'>
                  <button className='w-full p-4 text-black-100 mt-4'>
                      Logout
                    </button>
                      </Link>
                  </div>
                </div>
              </div>
    
              {/* right */}
              <div className='col-span-3 w-full h-[750px] shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                  <form
                    onSubmit={handleSubmit}
                    // encType="multipart/form-data" 
                    // action='http://127.0.0.1:8000/api/user/upload/'
                    // method='POST'
                  >
                    {/* <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                      <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input
                          className='border-2 rounded-lg p-3 flex border-gray-300'
                          type='text'
                          name='name'
                          // value={name}
                          // onChange = {handleChange}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>
                          Phone Number
                        </label>
                        <input
                          className='border-2 rounded-lg p-3 flex border-gray-300'
                          type='text'
                          name='phone'
                          // value={phone}
                          // onChange = {handleChange}
                        />
                      </div>
                    </div>
                    <div className='flex flex-col py-2'>
                      <label className='uppercase text-sm py-2'>Email</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='email'
                        name='email'
                        // value={email}
                        // onChange = {handleChange}
                      />
                    </div>
                    <div className='flex flex-col py-2'>
                      <label className='uppercase text-sm py-2'>Subject</label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='subject'
                        // value={subject}
                        // onChange = {handleChange}
                      />
                    </div>
                    <div className='flex flex-col py-2 h-[200px]'>
                      <label className='uppercase text-sm py-2'>Message</label>
                      <textarea
                        className='border-2 rounded-lg p-3 border-gray-300'
                        rows='10'
                        name='message'
                        // value={message}
                        // onChange = {handleChange}
                      ></textarea>
                    </div> */}
                    <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Select a file:</label>
                      <input type="file" id="myfile" name="file" onChange={handleFileChange}/> 
                      {/* onChange={handleFileChange}  */}
                      <div className="relative inline-block">
                        <select
                          value={selectedOption}
                          onChange={handleOptionChange}
                          className="block appearance-none bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          <option value="">Select an option</option>
                          <option value="Confusion Matrix">Confusion Matrix</option>
                          <option value="Display Table">Display Table</option>
                        </select>
                      </div>
                      <button className='w-full p-4 text-black-100 mt-4' disabled={!selectedFile || isLoading} >              
                      {/* onClick={handleSubmit}        */}
                      {/* disabled={!selectedFile || isLoading} */}
                         Submit
                    </button>
                    </div>
                  </form>

                  {/* <div>
                    <h1>Table Example</h1>
                    <img data={tableData} />
                  </div> */}

                </div>
                



          {/* const datas = [
            { column1: 'Cell 1, Row 1', column2: 'Cell 2, Row 1', column3: 'Cell 3, Row 1' },
            { column1: 'Cell 1, Row 2', column2: 'Cell 2, Row 2', column3: 'Cell 3, Row 2' },
            // Add more data objects as needed
          ]; 

          // Sample column headers
          const columns = ['Column 1', 'Column 2', 'Column 3']; 

          return ( */}

              { dataFrame ? console.log("mera")
                // <div className="flex flex-col">
                //   <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                //     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                //       <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                //         <table className="min-w-full divide-y divide-gray-200">
                //           {/* Table Header */}
                //           <thead className="bg-gray-50">
                //             <tr>
                //               {/* Use a for loop to generate column headers */}
                //               {dataFrame.map((column, index) => (
                //                 <th
                //                   key={index}
                //                   scope="col"
                //                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                //                 >datas
                //                   {column}
                //                 </th>
                //               ))}
                //             </tr>
                //           </thead>
                //           {/* Table Body */}
                //           <tbody className="bg-white divide-y divide-gray-200">
                //             {/* Use a for loop to generate table rows */}
                //             {dataFrame.map((item, index) => (
                //               <tr key={index}>
                //                 {/* Use a for loop to generate table cells */}
                //                 {dataFrame.map((column, idx) => (
                //                   <td key={idx} className="px-6 py-4 whitespace-nowrap">
                //                     {item[column.toLowerCase()]}
                //                   </td>
                //                 ))}
                //               </tr>
                //             ))}
                //           </tbody>
                //         </table>
                //       </div>
                //     </div>
                //   </div>
                // </div>
                : ""}

                



              </div>
            </div>
          </div>
        </div>
       <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 pt-[140px] py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <div className='grid md:grid-cols-1 gap-8 mt-10'>
                    <h2 className='py-4'>Natural Language Processing</h2>
                    <div className='grid md:grid-cols-3 gap-8 mt-5'>
                        <ProjectItem
                            title='Movie Recommendation System'
                            // backgroundImg={netflixImg}
                            projectUrl='/movie-recommender-system'
                            tech='Cosine Similarity'
                        />
                        <ProjectItem
                            title='Quora Duplicate Question Predictor'
                            // backgroundImg={qdqpp}
                            projectUrl='https://github.com/websitecreatr99/quora-duplicate-ques-predictor'
                            tech='Natural Language Processsing'
                        />
                        <ProjectItem
                            title='Email/Sms Spam Classifier'
                            // backgroundImg={spammail}
                            projectUrl='https://github.com/websitecreatr99/sms-spam-classifier'
                            tech='Natural Language Processing'
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Dashboard;

