import '../InventoryList/InventoryList.scss'
import Search from '../../assets/icons/search-24px.svg'
import React from 'react'


const inventory = [
    {
        id: 1,
        warehouse_id: 1,
        item_name: 'Television',
        description: '',
        category:'Electronics',
        status:'INSTOCK',
        quantity: '500',
    
    
    },
    {
        id: 2,
        warehouse_id: 1,
        item_name: 'Gym Bag',
        description: '',
        category: 'Gear',
        status: 'OUT OF STOCK',
        quantity: '0'
    },
    {
        id: 3,
        warehouse_id: 1,
        item_name: 'Hoodie',
        description: '',
        category: 'Apparel',
        status: 'OUT OF STOCK',
        quantity: '0'
    },
    {
        id: 4,
        warehouse_id: 1,
        item_name: 'Keychain',
        description: '',
        category: 'Accessories',
        status: 'IN STOCK',
        quantity: '2000'
    },
    {
        id: 5,
        warehouse_id: 1,
        item_name: 'Shampoo',
        description: '',
        category: 'Health',
        status: 'INSTOCK',
        quantity: '4350',
    },
    {
        id: 6,
        warehouse_id: 1,
        item_name: 'Phone Charger',
        description: '',
        category: 'Electronics',
        status: 'INSTOCK',
        quantity: '10000',
    },
    {
        id: 7,
        warehouse_id: 1,
        item_name: 'Tent',
        description: '',
        category: 'Gear',
        status: 'INSTOCK',
        quantity: '800',
    },
    {
        id: 8,
        warehouse_id: 2,
        item_name: 'Monitor',
        description: '',
        category: 'Electronics',
        status: 'OUT OF STOCK',
        quantity: '0',
    },
    
    ]

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
