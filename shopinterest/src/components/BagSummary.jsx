import { useSelector } from "react-redux";

const BagSummary=()=>{
  const bag=useSelector((store)=> store.bag)
  const items=useSelector((store)=> store.items);
    
    const newbagitems=items.filter((item)=>  {
      const itemindex=bag.indexOf(item.id);
      return itemindex >=0;
     })
     const CONVENIENCE_FEES=99;
    let bagSummaryElement = document.querySelector('.bag-summary');
  
  let totalMRP = 0;
  let totalDiscount = 0;

  newbagitems.forEach(bagItem => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    return <div className="bag-summary"><div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {bag.length} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </div>
}
export default BagSummary;