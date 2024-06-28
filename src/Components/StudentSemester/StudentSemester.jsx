import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PiExamFill } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";




const StudentSemester = () => {


    const { id } = useParams();

  



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
  
   
  
    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/semester/detail/?semester_id=${id}`,{
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
  },[setSemesterInfo,id]);


  const {courses,department,semester_no,session,students,teachers,total_courses} = semesterInfo;



//   Exam card date taking

const [examData, setExamData] = useState([]);

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
  
   
  
    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/examination/?semester_id=${id}`,{
      method:"GET",
      credentials: "include",
      headers: {
          "content-type":"application/json",
          "Authorization": `Bearer ${newTok}`,
      },
      
  })
  .then(res => res.json())
  .then(data => {
  
 

    setExamData(data);

  })

  
  })
  },[id,setExamData]);





// Exam details part 

const [ExamDetails , setExamDetails] = useState([])

const handleExamDetails = (_id) => {

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
  
   
  
    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/examination/detail/?examination_id=${_id}`,{
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
  
   setExamDetails(data);

  })

  
  })
    
}

// console.log(ExamDetails);

const {name,course,deadline,question,exam_id} = ExamDetails;




// Answer submit part done


const inputRef = useRef(null);
    

const [image,setImage] = useState('');

const [sendPhoto,setSendPhoto] = useState("");





const handleChangeImage = (e) => {
  const file = e.target.files[0];
  if (!file) {
    console.error('No file selected');
    return;
  }

  const formData = new FormData();
  formData.append('image', file);
  console.log(formData);

  fetch(`https://api.imgbb.com/1/upload?key=c8127e168c8790e95ea23c526262f45d`, {
    method: 'POST',

 
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
      console.log(formData);
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });
};


const handleSubmitAnswer = e => {

  e.preventDefault();
        

  const answerInfo = { examination : exam_id , answer}

  console.log(answerInfo);

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

  fetch('https://sabihaakterbristy.pythonanywhere.com/user/answer-submit/',{
    method:"POST",
    credentials: "include",
    headers: {
        "content-type":"application/json",
        "Authorization": `Bearer ${newTok}`,
    },
    body: JSON.stringify(answerInfo)
})
.then(res => res.json())
.then(data => {

  console.log(data);

})

})  





}




    return (
        <div>
            <div className=" mt-[40px] text-white md:w-[500px] lg:w-[1000px] lg:ml-[150px] h-[220px] md:h-[250px] lg:h-[300px] bg-[url('https://i.ibb.co/f00nGz0/concept-word-semester-on-cubes-260nw-1648309444.jpg')] bg-cover bg-center mb-[30px]">
                <h1 className="text-[35px] font-semibold pl-[30px]">Semester {semester_no}</h1>
                <h1 className="text-[35px] font-semibold pl-[30px] mb-[20px]">Department : {department}</h1>

                <h1 className="text-[35px] font-semibold pl-[30px] mb-[20px] relative top-[30px] md:top-[50px] lg:top-[110px]">Session : {session}</h1>
            </div>


{/* Exam card part */}

        
            {
                examData.map(data => (
                    <div  onClick={() => handleExamDetails(data.id)} className=" mt-[10px] flex items-center gap-[10px] bg-[#ebe4e4a6] md:w-[500px] lg:w-[1000px] lg:ml-[150px] py-[20px] mb-[20px]">
                    <PiExamFill className="md:text-[30px] lg:text-[50px] ml-[20px]"></PiExamFill>
                   
                     <h1 className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold">{data.name} Examination : <span className="purple">{data.course}</span>  ;</h1>
                     <h1 className="text-[14px] md:text-[16px] lg:text-[25px] font-semibold">Deadline : <span className="purple">{data.deadline}</span></h1>
     
                     <CiMenuKebab  onClick={()=>document.getElementById('my_modal_3').showModal()} className=" md:text-[20px] lg:text-[25px] absolute right-[10px] md:right-[0px] lg:right-[250px]"></CiMenuKebab>
                    
                 </div>
                ))
            }

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-[20px] text-center purple">{name} Examination</h3>
    <h3 className="font-bold text-[20px] text-center mt-[10px]">Course Name : <span className="purple">{course}</span></h3>
    <h3 className="font-bold text-[20px] text-center mt-[10px]">Deadline : <span className="purple">{deadline}</span></h3>

    <a href={question}><h1 className="font-bold text-[20px] text-center mt-[10px]">Question PDF : <span className="purple">{question}</span></h1></a>

    <form onSubmit={handleSubmitAnswer}>
      <h1 className="text-[20px] font-bold mt-[10px]">Your answer</h1>

      <input className="bg-slate-200 w-full py-[5px]" ref={inputRef} onChange={handleChangeImage} type="file" name="answer" id="answer" />

      <button className="bgpurple px-[10px] py-[8px] rounded-[5px] mt-[10px] text-white font-semibold relative left-[390px]">Submit</button>
    </form>
    
  </div>
</dialog>

           
        </div>
    );
};

export default StudentSemester;