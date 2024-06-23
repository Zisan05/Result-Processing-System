import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Banner = () => {

    const [seen,setSeen] = useState("password");

    const handletogol = () => {
        if(seen === "password"){
          setSeen('text');
        }
    
        else if(seen === "text") {
          setSeen('password');
        }
      }
    return (
        <div className="background md:h-[600px]">
            <h1 className="text-[35px] text-white font-semibold text-center pt-[50px]">Result Processing System </h1>

            <div className="flex flex-col md:flex-row mt-[80px] gap-[10px] md:gap-[20px] lg:gap-[50px] md:ml-[25px] lg:ml-[220px] pb-[30px] ">
                {/* for Student */}
                <div className="bg-white   md:w-[350px] lg:w-[600px] pb-[10px] h-[200px]">
                 <h1 className="text-[25px] font-medium text-center underline">For Student</h1>
                 <h1 className="text-[22px] pl-[20px] font-medium mt-[20px]"><span className="purple">Result</span> Processing System</h1>
                 <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="text-white bgpurple text-[20px] px-[30px] md:px-[30px] py-[3px] rounded-[30px]  font-semibold mt-[30px]  hover:bg-slate-700 ml-[120px] md:ml-[100px] lg:ml-[230px]">Click Here</button>


{/* Student form  */}
<dialog id="my_modal_1" className="modal w-[330px] md:w-full">
  <div className="modal-box">
  <h1 className="text-[22px] text-center font-medium mt-[20px]"> <span className="purple">Result</span> Processing System</h1>
    <form className="mt-[20px] ml-[30px]">


        <h1 className="text-[18px] mb-[10px] font-semibold">College Code</h1>
        <input type="text" className="bg-slate-200 md:w-[400px] lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="College Code" />

<h1 className="text-[18px] mb-[10px] font-semibold mt-[10px]">Student roll id</h1>
        <input type="text" className="bg-slate-200 md:w-[400px] lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="Student Roll id" />

        <button className="text-white bgpurple text-[20px] px-[30px] md:px-[30px] py-[5px] rounded-[10px]  font-semibold mt-[30px]  hover:bg-slate-700 ml-[80px] md:ml-[290px] lg:ml-[280px]">Enter</button>

    </form>
    <div className="mt-[40px]">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-slate-700 font-bold text-white">Back to home</button>
      </form>
    </div>
  </div>
</dialog>


                </div>
            {/* For Teacher */}
            <div className="bg-white md:w-[350px] lg:w-[600px] ">
                 <h1 className="text-[25px] font-medium text-center underline ">For Teacher</h1>
                 <h1 className="text-[22px] pl-[20px] font-medium mt-[20px]"><span className="purple">Result</span> Processing System</h1>

                 <form  className="mt-[30px] pl-[20px] pb-[20px]">


                    <div className="flex gap-[10px]">
                    <h1 className="text-[20px] text-black font-bold">User Name</h1>
                 <input type="text" className="bg-slate-200 md: lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="User Name" />
                    </div>

                    <div className="flex gap-[25px] mt-[20px] ">
                    <h1 className="text-[20px] text-black font-bold">Password</h1>
                 <input type={seen} className="bg-slate-200 md: lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="Password" />

                 {
                  seen === "text" ?
                   <span onClick={handletogol}><IoEyeOffOutline className="text-[25px] relative top-[5px] right-[60px]"></IoEyeOffOutline></span>
                  :
                  <span onClick={handletogol}><IoEyeOutline className="text-[25px] relative top-[5px] right-[60px]"></IoEyeOutline></span>
                }
                    </div>

                    <button className="text-white bgpurple text-[20px] px-[30px] md:px-[30px] py-[3px] rounded-[30px]  font-semibold mt-[30px]  hover:bg-slate-700 ml-[120px] md:ml-[100px] lg:ml-[230px]">Sign In</button>
                 </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;