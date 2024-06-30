import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const TeacherCalendar = () => {

    const [date,setDate] = useState(new Date())

    console.log(date);
    
    const onChange = date => {
        setDate(date);
    }

    return (
        <div>

<div className="bg-slate-600 md:w-[470px] lg:w-[1000px]">
                <h1 className="text-[35px]  pl-[20px] font-semibold py-[15px] text-white">Calendar</h1>
            </div>

<div className=" relative md:left-[50px] lg:left-[350px] top-[80px]">
            <Calendar className="text-[20px] " defaultActiveStartDate={new Date} onChange={onChange} value={date} />
        </div>
        </div>
    );
};

export default TeacherCalendar;