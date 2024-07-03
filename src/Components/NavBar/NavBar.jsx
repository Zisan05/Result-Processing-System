import { BiSolidBookOpen } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="background py-[20px] flex flex-row md:flex-row justify-between border-b-4">
            <div className="flex items-center gap-[5px]">
            <h1 className="text-[18px] md:text-[35px] text-white bg-gradient-to-r from-white to-[#6164FF] text-transparent bg-clip-text md:pl-[20px] font-bold"><span className="">Result</span> Processing System</h1>
            <BiSolidBookOpen className="purple text-[30px] md:text-[45px]"></BiSolidBookOpen>
            </div>
            <Link to={"/dashboard/gpa"}>
            <button className="text-white bgpurple text-[20px] px-[10px] md:px-[30px] py-[3px] rounded-[30px] md:mr-[40px] font-semibold hover:bg-blue-400">Result</button>
            </Link>
        </div>
    );
};

export default NavBar;