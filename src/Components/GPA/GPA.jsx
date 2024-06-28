import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const GPA = () => {

const [seeSemester,setSeeSemester] = useState('');

const [isSemester, setIsSemester] = useState(false);


const Atoken = localStorage.getItem('Access token');
const Rtoken = localStorage.getItem('Refresh token');

const token = {Access : Atoken,refresh : Rtoken};

const [semesterInfo, setSemesterInfo] = useState([]);

const [Id, setId] = useState('')


useEffect( () => {
    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/token/refresh/`,{
      method:"POST",
      credentials: "include",
      headers: {
          "content-type":"application/json",
          
      },
      body:  JSON.stringify(token) ,
      
  })
  .then(res => res.json())
  .then(data => {
  
 
  
    const newTok =data.access;
  
   
  
    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/semester/`,{
      method:"GET",
      credentials: "include",
      headers: {
          "content-type":"application/json",
          "Authorization": `Bearer ${newTok}`,
      },
      
  })
  .then(res => res.json())
  .then(data => {
  
    

    setSemesterInfo(data);
    
  })
  
  })
  },[setSemesterInfo]);


 


//  Submit imformation for Result 

const [resultData , setResultData] = useState("")

const [courseMark ,setCourseMark] = useState([])

const handleShowResult = e => {

    e.preventDefault();

    const regestration = e.target.regestration.value;

    console.log(regestration);
    console.log(Id);


    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/result/?semester_id=${Id}&registration_no=${regestration}`,{
      method:"GET",
      headers: {
          "content-type":"application/json",
      },
      
  })
  .then(res => res.json())
  .then(data => {

    console.log(data);

    if(data.course_wise) {
        setCourseMark(data.course_wise);
  
    }

    if(data.semester_wise) {
        setCourseMark(data.semester_wise);
    }

    
    setResultData(data);
    
  })

}




const {first_name,last_name,registration,roll,GPA,CGPA, course_wise,semester_wise} = resultData;





const courseArray = Object.entries(courseMark);

console.log(courseArray);





    return (
        <div>
            <div className="bg-slate-600 md:w-[500px] lg:w-[1400px]">
            <h1 className="text-[35px] pl-[40px] font-semibold py-[15px] text-white">Result</h1>
            </div>


            {/* Result Form */}

            <div className="bgpurple md:w-[460px] mx-auto pb-[30px]">
                <h1 className="text-[25px] mt-[20px] text-center pt-[10px] font-semibold">Result Processing System</h1>



          <form onSubmit={handleShowResult}>
              <h1 className="text-[20px] mt-[15px] pl-[30px] text-white font-semibold">Regestration Number</h1>
              <input type="text" name="regestration" className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px] mt-[10px] pl-[10px]" />
                 
                 <h1 className="text-[20px] mt-[15px] pl-[30px] text-white font-semibold">Semester</h1>

                 <div className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px] mt-[10px] flex items-center justify-between px-[10px] border-2 border-black">
                    <h1 className="ml-[60px] md:ml-[130px] text-[20px] font-bold">Semester {seeSemester}</h1>

                     <IoIosArrowDown onClick={() => setIsSemester(!isSemester)} className="text-[25px]"></IoIosArrowDown>
                 </div>

               {
                isSemester === true ? <div>
                    
                {
                   semesterInfo.map(item => (

                       

                      <span onClick={() => setId(item.id)}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester(item.semester_no)} className="w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] hover:bg-indigo-500">
                      <h1 className=" ml-[60px] text-[20px] font-bold">Semester {item.semester_no} (CSE 2019-2020)</h1>
                        </div></span></span>
                      )

                   )
                }
                </div> : ""
                
}

{
    isSemester === true ? <span onClick={() => setId("final")}><span onClick={() => setIsSemester(false)}><div onClick={() => setSeeSemester("final")} className="w-[400px] bg-slate-200 py-[5px] ml-[30px]  px-[10px] hover:bg-indigo-500">
    <h1 className=" text-center text-[20px] font-bold"> Semester final </h1>
      </div></span></span> : ""
}

<button className="bg-slate-200 text-[20px] px-[20px] py-[5px] mt-[20px] ml-[140px] md:ml-[180px] rounded-[5px] font-semibold hover:bg-slate-300">Enter</button>

          </form>
            </div>

{/* Show Result */}


{
    resultData === "" ? "" : <div>
    <h1 className="text-[35px] text-center mt-[20px] font-bold underline">Result Sheet </h1>

    <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">

        <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">Student Name</h1>
        <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full  pl-[20px]">{first_name} {last_name}</h1>

    </div>

    <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">

<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">Registration no</h1>
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full  pl-[20px]">{registration}</h1>

</div>



<div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">

<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">Roll no</h1>
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full  pl-[20px]">{roll}</h1>

</div>


{
    course_wise ? <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">
    <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">GPA</h1>
    <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full  pl-[20px]">{GPA}</h1>
    
    </div> :  semester_wise ? <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">CGPA</h1>
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full  pl-[20px]">{CGPA}</h1>

</div> : ""
}

{/* Div for Semester Wise Mark */}

{
    course_wise ? <div className="pb-[30px]">

    <h1 className="text-[35px] text-center mt-[20px] font-bold underline">Semester CourseWise Grade</h1>
    
    {courseArray.map(([key, data]) => (
            <div key={key} className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">
              <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">Course: {data.examination_course}</h1>
              <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full pl-[20px]">Grade: {data.mark}</h1>
              
            </div>
          ))}
    
    </div> :  semester_wise ? <div className="pb-[30px]">

<h1 className="text-[35px] text-center mt-[20px] font-bold underline">SemesterWise Grade</h1>

{courseArray.map(([key, data]) => (
        <div key={key} className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">
          <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[500px] pl-[20px]">Semester: {data.semester_no}</h1>
          <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-full pl-[20px]">Grade: {data.point}</h1>
          
        </div>
      ))}

</div>  : ""
}




    
</div>
}





        </div>
    );
};

export default GPA;