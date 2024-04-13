import "../index.css"
import "../App.css"
import {Outlet} from "react-router-dom"
import Header from '../components/Header';
import Footer from '../components/Footer';
import FetchItems from "../components/FetchItems";
import {useSelector} from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
 
  const fetchStatus=useSelector((store)=> store.fetchStatus)

  return (
    <>
    <Header/>
    <FetchItems></FetchItems>
    <Outlet></Outlet>
     
    <Footer></Footer>
     
    </>
  )
}
/*{fetchStatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner>:<Outlet></Outlet>}*/
export default App;
