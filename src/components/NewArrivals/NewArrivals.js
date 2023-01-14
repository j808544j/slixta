import React from 'react'
import "./styles.css";
import bottel from "./bottel.png";
function NewArrivals() {

    const Item =  <div className="new-arrivals-item-container">
    <div className='new-arrivals-img-container'>
    <img className="new-arrivals-img" src={bottel}  alt="bottel" />
    <div className='new-arrivals-discount-tag'>
        <div className='new-arrivals-discount-tag-text'>
            50% OFF
        </div>
    </div>
    </div>
    <div className='new-arrivals-item-content'>
        <div className='new-arrivals-item-name'>
            Sun Cream
        </div>
        <div className='new-arrivals-info'>
            <div className='new-arrivals-category'>
                SUN CARE
            </div>
         <div className='new-arrivals-prices-container'>
            <span className='new-arrivals-discount-price'>$20</span>
            <span className='new-arrivals-price'>$30</span>
         </div>
        </div>
    </div>
  </div>

  return (
    <div className="new-arrivals-container">
    <div className='new-arrivals-items-container'>
     {Item}
     {Item}
     {Item}
     {Item}
     {Item}
     {Item}
     {Item}
     {Item}
    </div>
    <div className='new-arrivals-btn-container'>
    <button className='new-arrivals-btn'>View all</button>
    </div>
    </div>
  )
}

export default NewArrivals