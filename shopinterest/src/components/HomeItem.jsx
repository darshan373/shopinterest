import { useDispatch, useSelector } from "react-redux";
import { bagactions } from "../store/bagSlice";
import { AiFillDelete } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const handleaddbag = () => {
    dispatch(bagactions.addtobag(item.id));
    

  };
const handleremovebag=()=>{
    dispatch(bagactions.removefrombag(item.id))
}
  const itemfound=bag.indexOf(item.id) >= 0;
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        
        {itemfound?<button type="button" onClick={handleremovebag}
        className="btn btn-danger btn-add-bag">
          <AiFillDelete />Remove
        </button>:<button type="button" className="btn btn-success btn-add-bag"
        onClick={handleaddbag}>
         <BiCartAdd /> Add to Bag
        </button>}
        
        
      </div>
    </>
  );
};
export default HomeItem;
