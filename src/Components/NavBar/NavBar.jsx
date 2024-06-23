import { BiSolidBookOpen } from "react-icons/bi";

const NavBar = () => {
    return (
        <div className="background py-[20px] flex flex-row md:flex-row justify-between border-b-4">
            <div className="flex items-center gap-[5px]">
            <h1 className="text-[18px] md:text-[35px] text-white md:pl-[20px] font-bold"><span className="purple">Result</span> Processing System</h1>
            <BiSolidBookOpen className="purple text-[30px] md:text-[45px]"></BiSolidBookOpen>
            </div>
            {/* <button className="text-white bgpurple text-[20px] px-[10px] md:px-[30px] py-[3px] rounded-[30px] md:mr-[40px] font-semibold ">Home</button> */}
        </div>
    );
};

export default NavBar;