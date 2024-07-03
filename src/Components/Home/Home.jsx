import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import GradeSystem from "../GradeSystem/GradeSystem";
import Header from "../Header/Header";
import QNA from "../QNA/QNA";


const Home = () => {
    return (
       <div className="">
        <Header></Header>
        <Banner></Banner>
        <QNA></QNA>
        <GradeSystem></GradeSystem>
        <Footer></Footer>
       </div>
    );
};

export default Home;