import React, { ChangeEvent,FormEvent, useState } from 'react'
import axios from 'axios';
type Product={
    name:string;
    price:string;
    category:string;
    message:string;
    textStyle:string;
    photo:string;
}
const AddProduct:React.FC=()=> {
    const[Product,setProduct]=useState<Product>({
        name:"",
        price:"0",
        category:"grocery",
        photo:"",
        message:"",
        textStyle:""
        
    })
    const handleChange=(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const value=(e.target.value);
        const field=e.target.name;
        setProduct((prevProduct)=>({...prevProduct,[field]:value,message:""}))
    }
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // const validateEmail=(email:string)=>{
        //     // var re= write the expression here
        //     return removeEventListener.test(email);
        // }
        if(Product.name==="" || Product.price==="0"){
            setProduct({...Product,message:"All fields are madatory!! 😡", textStyle:"danger"})
        }
        axios.post('http://localhost:4000/product',{"name":Product.name,"Price":Product.price,"Category":Product.category,"Photo":Product.photo})
        .then((response)=>{
            alert("Product added succesfully")
        })
        .catch((err)=>{
            console.log("Unable to add the product due to"+err);
            
        })
    }
  return (
    <>
        <br />
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange}/>
            </div>
            <div>
                <label>Price: </label>
                <input type="range" name="price" onChange={handleChange}/>
            </div>
            <div>
                <select name='category' onChange={handleChange}>
                    <option value="grocery">Grocery</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothes">Clothes</option>
                </select>
            </div>
            <div>
                <input type="file" name="photo" accept='image/png, image/jpeg' onChange={handleChange}/>
            </div>
            <div>
                {Product.message!=="" &&(
                    <div
                    className={`text text-${Product.textStyle}`}>
                        {Product.message}
                    </div>
                )

                }
            </div>
            <div>
                <button>ADD</button>
            </div>
        </form>
    </>
  )
}

export default AddProduct