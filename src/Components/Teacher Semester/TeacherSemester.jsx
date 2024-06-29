import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiExamFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";

const TeacherSemester = () => {

    const { _id } = useParams();

     // Semester Details work

const Atoken = localStorage.getItem('Access token');
const Rtoken = localStorage.getItem('Refresh token');

const token = {Access : Atoken,refresh : Rtoken};

const [semesterInfo, setSemesterInfo] = useState([]);


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
  
   
  
    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/semester/detail/?semester_id=${_id}`,{
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
  },[setSemesterInfo,_id]);

  const {courses,department,semester_no,session,students,teachers,total_courses} = semesterInfo;


//   Answer list taking



const [answerData ,setAnswerData] = useState([])

 
const handleAnswerSheet = (exam_name) => {
    
    


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
    
     
    
      fetch(`https://sabihaakterbristy.pythonanywhere.com/user/answer-list/?semester_id=${_id}&examination_name=${exam_name}`,{
        method:"GET",
        credentials: "include",
        headers: {
            "content-type":"application/json",
            "Authorization": `Bearer ${newTok}`,
        },
        
    })
    .then(res => res.json())
    .then(data => {
    
   console.log(data);

   setAnswerData(data);
  
      
    })
  
    
    })

}
    




    return (
        <div>

            {/* semester banner part */}

           
            <div className=" mt-[40px] text-white md:w-[500px] lg:w-[1000px] lg:ml-[150px] h-[220px] md:h-[250px] lg:h-[300px] bg-[url('https://i.ibb.co/f00nGz0/concept-word-semester-on-cubes-260nw-1648309444.jpg')] bg-cover bg-center mb-[30px]">
                <h1 className="text-[35px] font-semibold pl-[30px]">Semester {semester_no}</h1>
                <h1 className="text-[35px] font-semibold pl-[30px] mb-[20px]">Department : {department}</h1>

                <h1 className="text-[35px] font-semibold pl-[30px] mb-[20px] relative top-[30px] md:top-[50px] lg:top-[110px]">Session : {session}</h1>
            </div>

            {/* Buttons */}

            <div className="grid  md:grid-cols-4 lg:grid-cols-4 mx-auto md:gap-[5px] lg:gap-[140px]  lg:ml-[120px]">
                <button onClick={() => handleAnswerSheet("assignment")} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-red-400">Assignment</button>
                <button onClick={() => handleAnswerSheet("classtest")} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-orange-400">Class-test</button>
                <button onClick={() => handleAnswerSheet("midterm")} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-lime-400">Midterm</button>
                <button onClick={() => handleAnswerSheet('final')} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-blue-400">Final</button>

            </div>

            {/* Answer Card */}

            {
                answerData.map(data => ( <div  onClick={() => handleExamDetails(data.id)} className=" mt-[30px] flex items-center gap-[10px] bg-[#ebe4e4a6] md:w-[500px] lg:w-[1000px] lg:ml-[150px] py-[20px] mb-[20px]">
                <PiExamFill className="md:text-[30px] lg:text-[50px] ml-[20px]"></PiExamFill>
               
                 <h1 className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold"> Examination : <span className="purple">{data.examination_name}</span>  ;</h1>
                 <h1 className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold">Resgistration no : <span className="purple">{data.student_registration}</span></h1>
 
                 <CiMenuKebab  onClick={()=>document.getElementById('my_modal_3').showModal()} className=" md:text-[20px] lg:text-[25px] absolute right-[10px] md:right-[0px] lg:right-[250px]"></CiMenuKebab>
                
             </div>))
            }

           
              

        </div>
    );
};

export default TeacherSemester;