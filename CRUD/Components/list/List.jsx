import Add from '../add/Add'
import Edit from '../edit/Edit'
import './List.scss'
import { useState } from 'react'

function List() {
  const [Product,Setproduct] = useState([])
  const [view,Setview] = useState(true)
  const [Selectproduct,Setselectproduct] = useState({
    name:'',
    color:'',
    category:'',
    price: '',
    id:0
  })
  
  const handleAddProduct = (newProduct) => {
    const add = [...Product,newProduct]
    const addid = add.map((objeto,i) => ({
      ...objeto, 
      id: i+1,
    }));
    Setproduct(addid)
  }

  const handleEditProduct = (editproduct)  =>{
    const tableproduct = Product
    tableproduct.map((prod)=>{
      if (prod.id === editproduct.id) {
        prod.name = editproduct.name
        prod.color = editproduct.color
        prod.category = editproduct.category
        prod.price = editproduct.price
      }
    })
    Setproduct(tableproduct)
    Setview(!view)
  }
  
  const  handleDeleteProduct = (Selectproduct)=>{
    const deleted = Product.filter(Products=> Products.id!==Selectproduct.id)

    const editid = deleted.map((objeto,i) => ({
      ...objeto, 
      id: i+1,
    }));
    Setproduct(editid)
  }

  const handleShowadd = (event) =>{
    event.preventDefault()
    view ? Setview(view) : Setview(!view)
    
  }

  const handleProduct = (item) =>{
    Setselectproduct(item);
    view?Setview(!view):Setview(view)
  }
  

  return(
    <div className='site'>
      <div className='site__header'>
        <div className='site__header-content'>
          <img src='../public/logo my site.png' alt='logo' />
          <h1>My Site</h1>
        </div>
        <a href="">Get started</a>
      </div>
      <div className='product'>
        <div className='product__list'>
          <div className='product__list--header'>
            <h1>Product List</h1>
            <button className='add' onClick={handleShowadd}>Add</button>
          </div>
          <div className='product__list--card'>
            <table className='product__list--card-table'>
              <thead>
                <tr>
                  <th>PRODUCT NAME</th>
                  <th>COLOR</th>
                  <th>CATEGORY</th>
                  <th>PRICE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {Product.length === 0 ? '':
                  Product.map((item)=>(
                    <tr className='row-product' key={item.id} >
                      <td>{item.name}</td>
                      <td>{item.color}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <a href="#" onClick={()=>handleProduct(item)} >Edit</a>
                        <span> ┃ </span>
                        <a href="#"onClick={()=>handleDeleteProduct(item)}>Delete</a>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
          

        </div>
        <Add 
        onAddProduct={handleAddProduct}
        view = {view}
        /> 
        <Edit 
        view = {view}
        selectproduct = {Selectproduct}
        onEditProduct={handleEditProduct}
        onShowAdd = {handleShowadd}
        />
      </div>
      
    </div>
  )
}

export default List