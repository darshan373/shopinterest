import "../index.css"
import {useSelector} from "react-redux"
import BagSummary from "../components/BagSummary";
import BagItems from "../components/BagItems";
const Bag=()=>{
   const bag=useSelector((store)=> store.bag);
  
   const items=useSelector((store)=> store.items);
   const newbagitems=items.filter((item)=>  {
    const itemindex=bag.indexOf(item.id);
    return itemindex >=0;
   })
   

 
    return <>
<main>
  <div className="bag-page">
    <div className="bag-items-container">
      {newbagitems.map((item)=> <BagItems key={item.id} item={item}></BagItems>)}
      
    </div>
    <BagSummary></BagSummary>

  </div>
</main>
</>}
export default Bag;