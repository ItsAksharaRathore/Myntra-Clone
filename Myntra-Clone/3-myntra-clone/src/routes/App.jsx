import Fetchitems from "../components/Fetchitems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";
import {Outlet} from 'react-router-dom';
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);
      return (
    <>
     <Header/>
     <Fetchitems/>
     {fetchStatus.currentFetching ? <LoadingSpinner /> :  <Outlet/>}
   
    <Footer/>
    </>
  );
}

export default App;
