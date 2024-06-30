import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const GPA = () => {

const [seeSemester,setSeeSemester] = useState('');

const [isSemester, setIsSemester] = useState(false);


const Atoken = localStorage.getItem('Access token');
const Rtoken = localStorage.getItem('Refresh token');

const token = {Access : Atoken,refresh : Rtoken};



const [Id, setId] = useState('')


//  Submit imformation for Result 

const [resultData , setResultData] = useState("")

const [courseMark ,setCourseMark] = useState([])

const handleShowResult = e => {

    e.preventDefault();

    const regestration = e.target.regestration.value;

    console.log(regestration);
    console.log(Id);


    fetch(`https://sabihaakterbristy.pythonanywhere.com/user/result/?semester_no=${Id}&registration_no=${regestration}`,{
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

    e.target.reset();

    setSeeSemester('')

    
    setResultData(data);
    
  })

}




const {first_name,last_name,registration,roll,GPA,CGPA, course_wise,semester_wise} = resultData;





const courseArray = Object.entries(courseMark);

console.log(courseArray);





    return (
        <div className="h-[700px] overflow-y-auto">
            <div className="bg-slate-600 md:w-[460px] lg:w-[1355px] ">
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
                    <h1 className="w-full text-[20px] font-bold text-center ml-[20px]">Semester {seeSemester}</h1>

                     <IoIosArrowDown onClick={() => setIsSemester(!isSemester)} className="text-[25px]"></IoIosArrowDown>
                 </div>

               {
                isSemester === true ? <div>
                    
                      <span onClick={() => setId("1")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("1")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 1</h1>
                        </div></span></span>

                        <span onClick={() => setId("2")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("2")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 2</h1>
                        </div></span></span>


                        <span onClick={() => setId('3')}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("3")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 3</h1>
                        </div></span></span>


                        <span onClick={() => setId("4")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("4")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 4</h1>
                        </div></span></span>

                        <span onClick={() => setId("5")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("5")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 5</h1>
                        </div></span></span>

                        <span onClick={() => setId("6")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("6")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 6</h1>
                        </div></span></span>

                        <span onClick={() => setId("7")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("7")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 7</h1>
                        </div></span></span>

                        <span onClick={() => setId("8")}><span onClick={() => setIsSemester(false)}> <div onClick={() => setSeeSemester("8")} className="w-[300px] md:w-[400px] bg-slate-200 py-[5px] ml-[30px]  flex items-center justify-between px-[10px] mx-auto hover:bg-indigo-500">
                      <h1 className="  text-[20px] font-bold w-full text-center ">Semester 8</h1>
                        </div></span></span>
                  

                   
                
                </div> : ""
                
}

{
    isSemester === true ? <span onClick={() => setId("final")}><span onClick={() => setIsSemester(false)}><div onClick={() => setSeeSemester("final")} className="w-[300px] md:w-[400px]  bg-slate-200 py-[5px] ml-[30px]  px-[10px] hover:bg-indigo-500">
    <h1 className=" text-center text-[20px] font-bold "> Semester final </h1>
      </div></span></span> : ""
}

<div className="flex justify-center">
<button className="bg-slate-200 text-[20px] px-[20px] py-[5px] mt-[20px]  rounded-[5px] font-semibold hover:bg-slate-300">Enter</button>
</div>

          </form>
            </div>

{/* Show Result */}


{
    resultData === "" ? "" : <div>
    <h1 className="text-[35px] text-center mt-[20px] font-bold underline">Result Sheet </h1>

    <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex ">

        <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%] pl-[20px]">Student Name</h1>
        <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%]  pl-[20px]">{first_name} {last_name}</h1>

    </div>

    <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">

<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%] pl-[20px]">Registration</h1>
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%]  pl-[20px]">{registration}</h1>

</div>



<div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">

<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%] pl-[20px]">Roll no</h1>
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%]  pl-[20px]">{roll}</h1>

</div>


{
    course_wise ? <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">
    <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%] pl-[20px]">GPA</h1>
    <h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%]  pl-[20px]">{GPA}</h1>
    
    </div> :  semester_wise ? <div className="border-2 border-black md:w-[500px] lg:w-[1000px] mx-auto flex">
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%] pl-[20px]">CGPA</h1>
<h1 className="text-[25px] font-semibold border-r-4 border-r-black w-[50%]  pl-[20px]">{CGPA}</h1>

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