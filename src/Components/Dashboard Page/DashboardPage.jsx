
const DashboardPage = () => {
    return (
        <div className="bgpurple mt-[10px] md:w-[475px] lg:w-[1370px] h-[690px] overflow-y-auto">

            <div className="flex flex-col md:flex-row gap-[40px] p-[10px] lg:ml-[40px] pt-[30px]">
                <img className="md:w-[200px] lg:w-[300px] md:h-[400px] lg:h-[250px] rounded-[5px]" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/result-management-5798707-4852221.png?f=webp&w=256" alt="" />

                <div>
                <h1 className="text-[30px] text-yellow-400 font-bold">Result Processing System :</h1>

<p className="text-[15px] text-white md:w-[200px] lg:w-[400px]">The Result Processing System manages assignments, class tests, midterms, and final exams for each semester. Teachers can easily conduct exams and assign grades after reviewing answer papers. Once grades are assigned for each course, the system calculates and provides students with their GPA and CGPA upon completing their semesters.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-[20px] p-[10px] mt-[40px] mr-0 md:mr-0 lg:mr-[40px] items-center ">
                <img className="md:w-[250px] lg:w-[300px] md:h-[250px] lg:h-[250px] rounded-[5px]" src="https://cdn-icons-png.flaticon.com/512/9913/9913579.png" alt="" />

                <div>
                <h1 className="text-[30px] text-yellow-400 font-bold  md:text-right">Answer :</h1>

<p className="text-[15px] text-white md:w-[150px] lg:w-[400px]  md:text-right">After completing the examination provided by your teachers, prepare your answer paper by typing your answers in a document and saving it as either a DOC or PDF file. Next, upload this file to a cloud storage service such as Google Drive. Once uploaded, copy the shareable link to your file and paste this URL into the answer submission option provided.</p>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-[40px] p-[10px] lg:ml-[40px] mt-[40px] pb-[30px] items-center">
                <img className="md:w-[200px] lg:w-[300px] md:h-[300px] lg:h-[250px] rounded-[5px]" src="https://cdn-icons-png.flaticon.com/256/4776/4776087.png" alt="" />

                <div>
                <h1 className="text-[30px] text-yellow-400 font-bold">Semester :</h1>

<p className="text-[15px] text-white md:w-[200px] lg:w-[400px]">Welcome to the Result Processing System. Here, you can view your semester details and take advantage of various features, including taking examinations and submitting your answer papers.</p>
                </div>
            </div>


        </div>
    );
};

export default DashboardPage;