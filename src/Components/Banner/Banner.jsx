import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Banner = () => {

  const navigate = useNavigate();

  const [errormsg ,setErrormsg] = useState('')

    const [seen,setSeen] = useState("password");

    const handletogol = () => {
        if(seen === "password"){
          setSeen('text');
        }
    
        else if(seen === "text") {
          setSeen('password');
        }
      }


// Student login 

const handleForStudent = e => {
  
  e.preventDefault();
        
  const username = e.target.username.value;
  const password = e.target.password.value;



  const signInInfo = {username,password};

  console.log(signInInfo);

  
fetch('https://sabihaakterbristy.pythonanywhere.com/user/token/',{
    method:"POST",
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify(signInInfo)
})
.then(res => res.json())
.then(data => {
   
 console.log(data);
    localStorage.setItem('Access token', data.access);
    localStorage.setItem('Refresh token', data.refresh);

if(data.access){

Swal.fire({
  title: "Successfull",
  text: "You successully enter our website",
  icon: "success",
  
});

e.target.reset();

navigate(location?.state ? location.state : "/dashboard");


}

else {

setErrormsg('Please enter the correct information');

e.target.reset();

}
   
})


}


// for Teacher login 


const handleTeacherLogin = e => {

  e.preventDefault();
        
  const username = e.target.username.value;
  const password = e.target.password.value;



  const signInInfo = {username,password};


  fetch('https://sabihaakterbristy.pythonanywhere.com/user/token/',{
    method:"POST",
    headers: {
        "content-type":"application/json"
    },
    body: JSON.stringify(signInInfo)
})
.then(res => res.json())
.then(data => {
   
 console.log(data);
    localStorage.setItem('Access token', data.access);
    localStorage.setItem('Refresh token', data.refresh);

if(data.access){

Swal.fire({
  title: "Successfull",
  text: "You successully enter our website",
  icon: "success",
  
});

e.target.reset();

navigate(location?.state ? location.state : "/teacher");


}

else {

  Swal.fire({
    title: "Error",
    text: "Please enter the correct information !",
    icon: "error",
    
  });

e.target.reset();

}
   
})

}

    return (
        <div className="background md:h-[600px] mt-[20px]">
            <h1 className="text-[35px] text-white bg-gradient-to-r from-white to-[#6164FF] text-transparent bg-clip-text font-semibold text-center pt-[50px]">Result Processing System </h1>

            <div className="flex flex-col md:flex-row mt-[80px] gap-[10px] md:gap-[20px] lg:gap-[50px]  justify-center pb-[30px]  ">
                {/* for Student */}
                <div className="bg-gradient-to-r from-white to-[#6164FF]  w-full  md:w-[350px] lg:w-[600px] pb-[10px] h-[200px] rounded-[5px]">
                 <h1 className="text-[25px] font-medium text-center underline">For Student</h1>
                 <h1 className="text-[22px] pl-[20px] font-medium mt-[20px]"><span className="purple">Result</span> Processing System</h1>
                 <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="text-white bgpurple text-[20px] px-[30px] md:px-[30px] py-[3px] rounded-[30px]  font-semibold mt-[30px]  hover:bg-slate-700 ml-[120px] md:ml-[100px] lg:ml-[230px]">Click Here</button>


{/* Student form  */}
<dialog id="my_modal_1" className="modal w-[330px] md:w-full">
  <div className="modal-box bg-gradient-to-r from-white to-[#6164FF]">
  <h1 className="text-[22px] text-center font-medium mt-[20px] "> <span className="purple">Result</span> Processing System</h1>
    <form onSubmit={handleForStudent} className="mt-[20px] ml-[30px]">


        <h1 className="text-[18px] mb-[10px] font-semibold">Registration Number</h1>
        <input type="text" className="bg-slate-200 md:w-[400px] lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="Registration Number" name="username" />

<h1 className="text-[18px] mb-[10px] font-semibold mt-[10px]">Student roll id</h1>
        <input type="text" className="bg-slate-200 md:w-[400px] lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="Student Roll id" name="password" />

        {
          errormsg ? <p className="text-red-500 text-[20px] mt-[10px]">{errormsg}</p> : ""
        }

        

        <button  className="text-white bgpurple text-[20px] px-[30px] md:px-[30px] py-[5px] rounded-[10px]  font-semibold mt-[30px]  hover:bg-slate-700 ml-[80px] md:ml-[290px] lg:ml-[280px]"><form method="dialog">Enter</form></button>

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
            <div className="bg-gradient-to-r from-white to-[#6164FF] rounded-[5px] w-full md:w-[350px] lg:w-[600px] ">
                 <h1 className="text-[25px] font-medium text-center underline ">For Teacher</h1>
                 <h1 className="text-[22px] pl-[20px] font-medium mt-[20px]"><span className="purple">Result</span> Processing System</h1>

                 <form onSubmit={handleTeacherLogin}  className="mt-[30px] pl-[20px] pb-[20px]">


                    <div className="flex gap-[5px]">
                    <h1 className="text-[20px] text-black font-bold">User Name</h1>
                 <input type="text" className="bg-slate-200 w-[150px] md:w-[400px] lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" name="username" placeholder="User Name" />
                    </div>

                    <div className="flex gap-[15px] mt-[20px] lg:">
                    <h1 className="text-[20px] text-black font-bold">Password</h1>
                 <input type={seen} name="password" className="bg-slate-200 w-[150px] md:w-[400px] lg:w-[400px] rounded-[5px] pl-[10px] py-[5px]" placeholder="Password" />

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