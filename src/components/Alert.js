import React from 'react'

export default function Alert( prop) {
  return (
    prop.alert && 
    <div  className={`alert m-3 alert-${prop.alert.status} alert-dismissible fade show`} role="alert">
        <strong>{prop.alert.message}</strong> 
    </div>
  )
}
