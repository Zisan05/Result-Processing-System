import { MdDashboardCustomize } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidBookOpen } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { MdArrowDropDownCircle } from "react-icons/md";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";

const DashBoard = () => {

const [isSemester , setIsSemester] = useState(false);
const [Result , setResult] = useState(false);


    return (
        <div>
            <div className="bgpurple py-[10px]">
                <h1 className="text-[25px] pl-[30px] text-white font-semibold" >Result Processing System | Student</h1>
            </div>

{/* main deiv */}
           <div className="flex flex-col md:flex-row gap-[10px]">
         
         {/* dashboard part */}
           <div className="bg-slate-800 text-white w-full md:w-[300px] pb-[50px]">
  
           <h1 className="text-[20px] pl-[40px] mt-[20px]  opacity-40">MAIN CATEGORY</h1>

<p className="border-t-2 w-[220px] ml-[20px] mt-[10px]"></p>

                <div className="flex items-center gap-[10px] pl-[20px] pt-[20px]">
                    <MdDashboardCustomize className="text-[35px]"></MdDashboardCustomize>
                    <h1 className="text-[25px] focus:border-b-4" tabIndex="0">Dashboard</h1>
                </div>

                <div>
                    <h1 className="text-[20px] pl-[40px] mt-[20px]  opacity-40">APPEARANCE</h1>

                    <p className="border-t-2 w-[220px] ml-[20px] mt-[10px]"></p>


                    <div onClick={() => setIsSemester(!isSemester)} className="flex items-center gap-[10px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <HiMiniAcademicCap  className="text-[35px]"></HiMiniAcademicCap>
                    <h1 className="text-[25px]">Semester</h1>

                    {
                        isSemester === false ?  <MdArrowDropDownCircle className="text-[25px] ml-[30px] mt-[5px]"></MdArrowDropDownCircle> :  <IoMdArrowDropupCircle className="text-[25px] ml-[30px] mt-[5px]"></IoMdArrowDropupCircle>
                    }

                   
                    </div>

{/* semester logic */}
                    {
                        isSemester === true ? <div>

                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[30px]">Semester 1</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[40px]"></IoIosArrowForward>
                        </div>
    
                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[30px]">Semester 2</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[40px]"></IoIosArrowForward>
                        </div>
    
                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[30px]">Semester 3</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[40px]"></IoIosArrowForward>
                        </div>
    
                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[30px]">Semester 4</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[40px]"></IoIosArrowForward>
                        </div>
    
    
                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[30px]">Semester 5</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[40px]"></IoIosArrowForward>
                        </div>
    
    
                        </div>  : ""
                    }



            
                    <div  className="flex items-center gap-[20px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <BiTask  className="text-[35px]"></BiTask>
                    <h1 className="text-[25px]">Exam</h1>

                    <IoIosArrowForward className="text-[25px] ml-[55px]"></IoIosArrowForward>
                    </div>


                    <div onClick={() => setResult(!Result)} className="flex items-center gap-[20px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <PiExamFill  className="text-[35px]"></PiExamFill>
                    <h1 className="text-[25px]">Result</h1>

                    {
                        Result === false ?  <MdArrowDropDownCircle className="text-[25px] ml-[45px] mt-[5px]"></MdArrowDropDownCircle> :  <IoMdArrowDropupCircle className="text-[25px] ml-[45px] mt-[5px]"></IoMdArrowDropupCircle>
                    }
                    </div>

                    {
                        Result === true ? <div>

                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[60px]">GPA</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[80px]"></IoIosArrowForward>
                        </div>
    
                        <div className="flex items-center  pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                        <h1 className="text-[25px] ml-[60px]">CGPA</h1>
    
                        <IoIosArrowForward className="text-[25px] ml-[65px]"></IoIosArrowForward>
                        </div>

                        </div> : ""
                    }

                    <div className="flex items-center gap-[10px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <SlCalender className="text-[35px]"></SlCalender>
                    <h1 className="text-[25px]">Calendar</h1>

                    <IoIosArrowForward className="text-[25px] ml-[30px]"></IoIosArrowForward>
                    </div>

                </div>

            </div>

            {/* dashboard side part */}

            <div>
         <Outlet></Outlet>
            </div>

           </div>
        </div>
    );
};

export default DashBoard;