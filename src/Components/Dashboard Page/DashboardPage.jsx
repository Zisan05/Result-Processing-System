
const DashboardPage = () => {
    return (
        <div className=" md:w-[500px] lg:w-[1400px] bg-slate-200">
            <div className="bg-slate-600">
                <h1 className="text-[35px] pl-[20px] font-semibold py-[15px] text-white">Dashboard</h1>
            </div>

            <div className="mt-[20px] grid md:grid-cols-2 lg:grid-cols-4 gap-[20px] ml-[50px] md:ml-[20px] lg:ml-[100px] pb-[20px] ">


                <div className="bgpurple w-[200px]  py-[10px] ">
                    <h1  className="text-[30px] pl-[10px] text-center text-white">50</h1>
                    <h1 className="text-[30px] text-center text-white">student</h1>
                </div>


                <div className="bgpurple w-[200px]  py-[10px] ">
                    <h1  className="text-[30px] pl-[10px] text-center text-white">50</h1>
                    <h1 className="text-[30px] text-center text-white">student</h1>
                </div>


                <div className="bgpurple w-[200px]  py-[10px] ">
                    <h1  className="text-[30px] pl-[10px] text-center text-white">50</h1>
                    <h1 className="text-[30px] text-center text-white">student</h1>
                </div>

                <div className="bgpurple w-[200px]  py-[10px] ">
                    <h1  className="text-[30px] pl-[10px] text-center text-white">50</h1>
                    <h1 className="text-[30px] text-center text-white">student</h1>
                </div>
                
                    
            </div>
        </div>
    );
};

export default DashboardPage;