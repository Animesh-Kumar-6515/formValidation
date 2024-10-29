import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import axios from 'axios'

type Product = {
    name:string,
    price:string
}

type Error={
    nameerr:string,
    priceerr:string
}


const AddProduct:FC = () => {

    const[product,setproduct]=useState<Product>({
        name:"",
        price:""
    })

    const[error,setError]=useState<Error>({
        nameerr:"",
        priceerr:""
    })

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/product',{"name":product.name,"Price":product.price})
        .then(()=>{
            alert("Product added succesfully")
        })
    }

    const validateInput=(name:any,value:any)=>{
        const newProduct:Product={...product};
        const newError:Error={...error};
        if(name==="name"){
            if(value===""){
                setError((newError)=>({...newError,nameerr:"Name is mandatory!!!"}))
            }
            else{
                setError((newError)=>({...newError,nameerr:""}))
            }
        }
    }

    const handleChange=(e:ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        const value=e.target.value;
        const field=e.target.name;
        console.log(e.target.name," ",e.target.value);
        validateInput(field,value);
        setproduct((product)=>({...product,[field]:value}))
        console.log("Prod value: ",product.name)
    }
    return (
        <>
        <div style={{
            alignItems:"center"
        }}>

        
            <form className='form-inline ' style={{
                alignItems:"center",
                margin:"auto",
                width:"40%"
            }}
            onSubmit={handleSubmit}>
                <div className='form-group '>
                    <label htmlFor="ProductName">
                        Product Name:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter Product name' name='name' onChange={handleChange} />
                    {error.nameerr!=="" &&(
                        <>
                            <div>
                                {error.nameerr}
                            </div>
                        </>
                    )}
                </div>
                <div className='form-group column'>
                    <label htmlFor="Productprice">
                        Product Name:
                    </label>
                    <input type="range" className='' placeholder='Enter Product name' name='price' onChange={handleChange} style={{
                        width:"100%",
                        // color:"gray"
                    }}/>
                </div>
                <button type='submit' className='btn btn-success'>Add</button>
            </form>
        </div>
            
            

        </>
    )
}

export default AddProduct