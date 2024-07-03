import { BiSolidBookOpen } from "react-icons/bi";

import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#6164FF] to-white h-[1000px] md:h-[900px] lg:h-[700px] flex flex-col md:flex-row mt-[10px]">
           <div className=" relative md:ml-[0px] lg:ml-[100px] top-[50px]">
           <h1 className=" text-[42px] text-white font-bold md:max-w-[500px] lg:max-w-[600px] text-center">Our Result Processing system  website  is design for student to get  their result easily  and also get  the question of the semester....</h1>
              


            <p className="text-white font-semibold text-[25px] mt-[20px] md:max-w-[500px] lg:max-w-[600px] text-center">Result is very important for a student to  find their prograss in study. <br />And its our responsibilty to deliver the result to the student hands easily</p>
           </div>

           <div className="relative md:top-[300px] lg:top-[100px]">
            <FaArrowRight className=" md:size-[200px] lg:size-[400px] purple"></FaArrowRight>
           </div>

           <div className="relative md:top-[300px] lg:top-[100px]">
            <BiSolidBookOpen className=" md:size-[200px] lg:size-[500px] purple"></BiSolidBookOpen>
           </div>
        </div>
    );
};

export default Header;