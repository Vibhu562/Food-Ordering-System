import React from 'react'

export default function Instruction() {
  return (
    <div className='m-3'>
        <a href = "/register/restaurant"><button className='btn btn-primary'>Go back</button></a>
        <h1 className='mt-3'>Approval is provided by super admin only</h1>
        <h1>For current time being it is false it will be changed if super Admin approves it</h1>
    </div>
  )
}
