import React from 'react'
import Product from '../product/Product'

export default function 
() {
    const prod=[
        {id:1,tittle:"product one",desc:'this is product one' ,price:'1000'},
        {id:2,tittle:'product two',desc:'this is product two' ,price:'1000'},
        {id:3,tittle:'product three',desc:'this is product three' ,price:'3000'},
        {id:4,tittle:'product four',desc:'this is product four' ,price:'2000'}



    ];
  return (
    <div>
        <div className=' row pt-5 '>
{ prod.map((product)=> {
   /*   return   <Product tittle={product.tittle} desc={product.desc} key={product.id}/>*/
   return <Product {... product} key={product.id}/>
 } )}


        </div>
    </div>
  )
}
