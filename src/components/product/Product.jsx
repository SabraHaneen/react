import React from 'react'

export default function 

(props) {
    console.log(props)
  return (
    <div>

<div className='col-lg-4'>
    <div className='product'>
<h2>{props.tittle}</h2>
<p>{props.desc}</p>
<p>{props.price}</p>
</div>
</div>
    </div>
  )
}
