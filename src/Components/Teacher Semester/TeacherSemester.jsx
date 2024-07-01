import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PiExamFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import Swal from "sweetalert2";
import { IoIosArrowDown } from "react-icons/io";

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



const [answerData ,setAnswerData] = useState([]);

const [empty , setEmpty] = useState ("")

 
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

   if(data.detail === "Not found."){

    setEmpty("empty")

   } 

   else {
    
    setEmpty("data")
    setAnswerData(data);
   }
  
      
    })
  
    
    })

}




// Mark giving method

const [examination_id, setExamination_id] = useState('')

const [student_registration , setStudent_registration ] = useState('')

const [msg , setMsg] = useState('')


const handleMark = e => {

    e.preventDefault();
        
  const mark = e.target.mark.value;

  const markData = {examination_id,student_registration,mark};

  console.log(markData);

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


    fetch('https://sabihaakterbristy.pythonanywhere.com/user/add-result-each-course/',{
    method:"POST",
    credentials: "include",
    headers: {
        "content-type":"application/json",
        "Authorization": `Bearer ${newTok}`,
    },
    body: JSON.stringify(markData)
})
.then(res => res.json())
.then(data => {
   
 console.log(data);

 setMsg("You successfully add mark")
  
e.target.reset();

   
})



  })

}

// Create Exam 

const [seeExamName , setSeeExamName] = useState('');

const [isExamName , setIsExamName] = useState(false);

const [dialog , setDialog] = useState('')

const handleCreateExam = e => {


  e.preventDefault();
        
  const name = e.target.name.value;
  const course = e.target.course.value;
  const semester = e.target.semester.value;
  const deadline = e.target.deadline.value;
  const question = e.target.question.value;

  const createExamData = {name,course,semester,deadline,question} 


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


  fetch('https://sabihaakterbristy.pythonanywhere.com/user/add-examination/',{
  method:"POST",
  credentials: "include",
  headers: {
      "content-type":"application/json",
      "Authorization": `Bearer ${newTok}`,
  },
  body: JSON.stringify(createExamData)
})
.then(res => res.json())
.then(data => {
 
console.log(data);

if(data === "unsucess"){
  setDialog("You Successfully create a exam")
}


e.target.reset();



 
})



})


}

    




    return (
        <div className="md:w-[480px] lg:w-[1370px] h-[700px] overflow-y-auto">

          {/* create exam  */}
           
<div className="pb-[20px] mt-[40px]">
<button onClick={()=>document.getElementById('my_modal_4').showModal()} className=" bgpurple font-semibold w-[370px] md:w-[490px] lg:w-[1000px] py-[10px] text-white relative lg:left-[150px] rounded-[5px] hover:bg-amber-400">Create Examination</button>
</div>

<dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-[25px] text-center">Create New Exam</h3>
    <form  onSubmit={handleCreateExam} className="pl-[30px]"> 

    <h1 className="text-[20px] mt-[10px] font-semibold">Exam Name</h1>

        <div className="w-[300px] md:w-[400px] bg-slate-200 py-[3px]  mt-[10px] flex items-center justify-between px-[10px] border-2 border-black">
                    <h1 className="w-full text-[20px] font-bold text-center ml-[20px]">{seeExamName}</h1>

                     <IoIosArrowDown onClick={() => setIsExamName (!isExamName)}  className="text-[25px]"></IoIosArrowDown>
                 </div>

                 {
                  isExamName === true ? <div>
                    <span onClick={() => setIsExamName(false)}> <div onClick={() => setSeeExamName("assignment")} className="w-[300px] md:w-[400px] bg-slate-200 py-[3px]   flex items-center justify-between px-[10px] hover:bgpurple">
                  <h1 className="  text-[20px] font-bold w-full text-center ">assignment</h1>
                    </div></span> 


                    <span onClick={() => setIsExamName(false)}> <div onClick={() => setSeeExamName("class-test")} className="w-[300px] md:w-[400px] bg-slate-200 py-[3px]   flex items-center justify-between px-[10px] hover:bgpurple">
                  <h1 className="  text-[20px] font-bold w-full text-center ">class-test</h1>
                    </div></span> 


                    <span onClick={() => setIsExamName(false)}> <div onClick={() => setSeeExamName("midterm")} className="w-[300px] md:w-[400px] bg-slate-200 py-[3px]   flex items-center justify-between px-[10px] hover:bgpurple">
                  <h1 className="  text-[20px] font-bold w-full text-center ">midterm</h1>
                    </div></span> 


                    <span onClick={() => setIsExamName(false)}> <div onClick={() => setSeeExamName("final")} className="w-[300px] md:w-[400px] bg-slate-200 py-[3px]   flex items-center justify-between px-[10px] hover:bgpurple">
                  <h1 className="  text-[20px] font-bold w-full text-center ">final</h1>
                    </div></span> 
                  </div>
                    
                    
                    
                    
                    : ""
                 }

        <h1 className="text-[20px] mt-[10px] font-semibold">Course</h1>
        <input className="bg-slate-200 w-full md:w-[400px] mt-[10px] py-[5px] pl-[10px]" name="course" placeholder="course" type="text" />

        <h1 className="text-[20px] mt-[20px] font-semibold">Deadline</h1>
        <input className="bg-slate-200 w-full md:w-[400px] mt-[10px] py-[5px] pl-[10px]" name="deadline" placeholder="Deadline" type="text" />

        <h1 className="text-[20px] mt-[20px] font-semibold hidden">Semester</h1>
        <input className="bg-slate-200 w-full md:w-[400px] mt-[10px] py-[5px] pl-[10px] hidden" value={_id} name="semester" placeholder="Semester no" type="text" />

        <h1 className="text-[20px] mt-[20px] font-semibold">Question</h1>
        <input className="bg-slate-200 w-full md:w-[400px] mt-[10px] py-[5px] pl-[10px]" name="question" placeholder="Question PDF URL" type="text" />

        <h1 className="text-[20px] text-green-500 font-semibold text-center mt-[10px]">{dialog}.</h1>


       <button className="bg-indigo-500 text-white mr-[5px] mt-[10px]  px-[10px] py-[5px] font-semibold rounded-[5px]">Submit</button>
   
      </form>
  </div>
</dialog>

            {/* semester banner part */}

           
            <div className=" mt-[40px] text-white md:w-[480px] lg:w-[1000px] lg:ml-[150px] h-[220px] md:h-[250px] lg:h-[300px] bg-[url('https://i.ibb.co/f00nGz0/concept-word-semester-on-cubes-260nw-1648309444.jpg')] bg-cover bg-center mb-[30px]">
                <h1 className="text-[35px] font-semibold pl-[30px]">Semester {semester_no}</h1>
                <h1 className="text-[35px] font-semibold pl-[30px] mb-[20px]">Department : {department}</h1>

                <h1 className="text-[35px] font-semibold pl-[30px] mb-[20px] relative top-[30px] md:top-[50px] lg:top-[110px]">Session : {session}</h1>
            </div>

            {/* Buttons */}

     
            <div className="grid  md:grid-cols-3 lg:grid-cols-4 mx-auto md:gap-[5px] lg:gap-[140px]  ">
                <button onClick={() => handleAnswerSheet("assignment")} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-red-400">Assignment</button>
                <button onClick={() => handleAnswerSheet("classtest")} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-orange-400">Class-test</button>
                <button onClick={() => handleAnswerSheet("midterm")} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-lime-400">Midterm</button>
                <button onClick={() => handleAnswerSheet('final')} className="bgpurple text-[22px] px-[10px] py-[5px] text-white font-semibold rounded-[5px]  mt-[10px] md:mt-0 hover:bg-blue-400">Final</button>

            </div>


            

           
           

            {/* Answer Card */}

            {
              empty === "data"  ? <div>
              {
                   answerData.map(data => ( <div  className=" mt-[30px] flex items-center gap-[10px] bg-[#ebe4e4a6] md:w-[480px] lg:w-[1100px] lg:ml-[100px] py-[20px] mb-[20px]">
                   <PiExamFill className="md:text-[30px] lg:text-[50px] ml-[20px]"></PiExamFill>
                  
                    <h1 className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold"> Examination : <span className="purple">{data.examination_name}</span>  ;</h1>
                    <h1 className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold">Resgistration  : <span className="purple">{data.student_registration}</span></h1>
    
                   <div className="flex gap-[10px]">
                       <a href={data.answer}><button className="bg-indigo-500 text-white  ml-0 md:ml-0 lg:ml-[40px]  px-[10px] py-[5px] hover:bg-orange-400 font-semibold text-[10px] md:text-[10px] lg:text-[18px]">View Answer</button></a>
   
                        
   
                     <span onClick={() => setStudent_registration(data.student_registration)}><span onClick={() => setExamination_id(data.examination_id)}><button onClick={()=>document.getElementById('my_modal_3').showModal()} className="bg-indigo-500 text-white mr-[5px] ml-0 md:ml-0 lg:ml-[40px]  px-[10px] py-[5px] hover:bg-lime-400 font-semibold">Mark</button></span></span>
   
                   </div>
                   
                </div>))
               }
              </div> : empty === "empty" ?  <div>
                <h1 className="text-[35px] font-bold text-center purple mt-[40px]">Empty Answer Data</h1>
              </div> : ""
            }

           

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-[25px] text-center">Mark Giving proccess</h3>
    <form  onSubmit={handleMark} className="pl-[30px]"> 
        <h1 className="text-[20px] mt-[20px] font-semibold">Mark</h1>
        <input className="bg-slate-200 w-full md:w-[400px] mt-[10px] py-[5px] pl-[10px]" name="mark" placeholder="Give The mark" type="text" />

        <h1 className="text-[20px] text-green-500 font-semibold text-center mt-[10px]">{msg}.</h1>

        <button className="bg-indigo-500 text-white mr-[5px] mt-[10px]  px-[10px] py-[5px] font-semibold rounded-[5px]">Submit</button>
      </form>
  </div>
</dialog>



        </div>
    );
};

export default TeacherSemester;