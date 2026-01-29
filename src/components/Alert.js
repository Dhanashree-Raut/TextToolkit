import React from 'react'

export default function Alert( prop) {
  return (
    <div style={{height:"70px"}}>
{
        prop.alert && 
        <div  className={`alert mx-3 mt-1 alert-${prop.alert.status} alert-dismissible fade show`} role="alert">
            <strong>{prop.alert.message}</strong> 
        </div>}

    </div>
  )
}
