import './Add.scss'
import { useState } from 'react'
 
function Add({ onAddProduct, view, }){
  const [product,Setproduct] = useState({})
  

  const handleChange = (event) =>{
    const { name, value} = event.target;
    Setproduct({
      ...product, id : 1, [name]: value
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    onAddProduct(product)
  }

  return (
    <div className={view? 'addproduct':'addproduct-no'}>
       <div className='addproduct__title'>
          <h1>Add Product</h1>
       </div>
       <div className='addproduct__form'>
          <form action="" onSubmit={handleSubmit}>
            
            <input type="hidden" name= 'id' id='id' />
            <label htmlFor="name">PRODUCT NAME</label>
            <input type="text" name='name' id='name' placeholder='your product name' required onChange={handleChange}/>
            <label htmlFor="color">COLOR</label>
            <input type="text" name='color' id='color' placeholder='siver, black, white, etc' required onChange={handleChange}/>
            <label htmlFor="category">CATEGORY</label>
            <input type="text" name='category' id='category' placeholder='Home' required onChange={handleChange}/>
            <label htmlFor="price">PRICE</label>
            <input type="text" name='price' id='price' placeholder='$ 1999,99' required onChange={handleChange}/>
            <div className='button'>
              <button className= 'add' type='submit'>Add</button>
            </div> 
          </form>
       </div>
    </div>
  )
}

export default Add