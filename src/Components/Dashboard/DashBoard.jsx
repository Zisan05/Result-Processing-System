import { MdDashboardCustomize } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { BiSolidBookOpen } from "react-icons/bi";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
            <div className="bgpurple py-[10px]">
                <h1 className="text-[25px] pl-[30px] text-white font-semibold" >Result Processing System | Student</h1>
            </div>

{/* main deiv */}
           <div className="flex flex-col md:flex-row gap-[10px]">
         
         {/* dashboard part */}
           <div className="bg-slate-800 text-white w-full md:w-[300px] pb-[50px]">
  
           <h1 className="text-[20px] pl-[40px] mt-[20px]  ">MAIN CATEGORY</h1>

<p className="border-t-2 w-[220px] ml-[20px] mt-[10px]"></p>

                <div className="flex items-center gap-[10px] pl-[20px] pt-[20px]">
                    <MdDashboardCustomize className="text-[35px]"></MdDashboardCustomize>
                    <h1 className="text-[25px] focus:border-b-4" tabIndex="0">Dashboard</h1>
                </div>

                <div>
                    <h1 className="text-[20px] pl-[40px] mt-[20px]  ">APPEARANCE</h1>

                    <p className="border-t-2 w-[220px] ml-[20px] mt-[10px]"></p>


                    <div className="flex items-center gap-[10px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <PiStudentFill  className="text-[35px]"></PiStudentFill >
                    <h1 className="text-[25px]">Semester</h1>

                    <IoIosArrowForward className="text-[25px] ml-[45px]"></IoIosArrowForward>
                    </div>

            
                    <div  className="flex items-center gap-[20px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <PiStudentFill  className="text-[35px]"></PiStudentFill >
                    <h1 className="text-[25px]">Exam</h1>

                    <IoIosArrowForward className="text-[25px] ml-[65px]"></IoIosArrowForward>
                    </div>


                    <div className="flex items-center gap-[20px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <BiSolidBookOpen  className="text-[35px]"></BiSolidBookOpen>
                    <h1 className="text-[25px]">Result</h1>

                    <IoIosArrowForward className="text-[25px] ml-[60px]"></IoIosArrowForward>
                    </div>

                    <div className="flex items-center gap-[10px] pl-[20px] mt-[20px] py-[8px] focus:bg-indigo-600" tabIndex="1">
                    <PiStudentFill  className="text-[35px]"></PiStudentFill >
                    <h1 className="text-[25px]">Calendar</h1>

                    <IoIosArrowForward className="text-[25px] ml-[45px]"></IoIosArrowForward>
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