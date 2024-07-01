import { Navigate } from "react-router-dom";

const Privet = ({children}) => {
    const Atoken = localStorage.getItem('Access token');
    const Rtoken = localStorage.getItem('Refresh token');

  

     if(Atoken === null ){
        return <Navigate state={location.pathname} to = {'/'}></Navigate>;
     }

     if(Atoken){
        return children;
     }

    return (
        <div>
            
        </div>
    );
};


export default Privet;