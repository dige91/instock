import '../InventoryList/InventoryList.scss'
import Search from '../../assets/icons/search-24px.svg'
import React from 'react'



    const InventoryList = ({ inventory }) => {
        return ( 
          <div className="inventorylist">
            <h2 className='inventorylist-header'>Inventory</h2>
            <input className="inventorylist-searchbox" type="textbox" placeholder='Search...' />
            <img className='inventorylist-searchicon' src={Search} alt="Search Icon" />
            <button className='inventorylist-add'>+ Add New Item</button>
      
            <div>
              <h4 className='inventorylist__item'>Inventory Item</h4>
              {inventory.map(item => (
                <div key={item.id}>{item.item_name}</div>
              ))}
            </div>
          </div>
        );
      }
      

export default InventoryList;
