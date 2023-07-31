import './Edit.scss'
import { useState, useEffect } from 'react'
 
function Edit({ onEditProduct,view, selectproduct , onShowAdd }){
  
  const [Select,Setselected] = useState(selectproduct)
  
  useEffect (()=>{
    Setselected(selectproduct)
  }, [selectproduct])
  
  const handleChange = (event) =>{
    const { name, value} = event.target;
    Setselected({
      ...Select, [name]: value
    })
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    
    onEditProduct(Select)

    
  }
  

  return (
    <div className={view? 'editproduct-no': 'editproduct'}>
       <div className='editproduct__title'>
          <h1>Edit Product</h1>
       </div>
       <div className='editproduct__form'>
          <form action="" >
            <label htmlFor="name">PRODUCT NAME</label>
            <input value={Select.name} type="text" name='name' id='name' placeholder='your product name' required onChange={handleChange}/>
            <label htmlFor="color">COLOR</label>
            <input value={Select.color} type="text" name='color' id='color' placeholder='siver, black, white, etc' required onChange={handleChange}/>
            <label htmlFor="category">CATEGORY</label>
            <input value={Select.category} type="text" name='category' id='category' placeholder='Home' required onChange={handleChange}/>
            <label htmlFor="price">PRICE</label>
            <input value={Select.price}type="text" name='price' id='price' placeholder='$ 1999,99' required onChange={handleChange}/>
            <div className='button'>
              <button className='cancel' onClick={onShowAdd}>Cancel</button>
              <button className= 'update' type='submit' onClick={handleSubmit}>Update</button>
            </div> 
          </form>
       </div>
    </div>
  )
}

export default Edit