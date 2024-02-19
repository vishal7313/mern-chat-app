import React from 'react'

export const GenderCheck = () => {
  return (
    <div className='flex'>
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span> 
                <input type="checkbox" className="checkbox checkbox-warning" />
            </label>
        </div>

        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span> 
                <input type="checkbox" className="checkbox checkbox-warning" />
            </label>
        </div>
    </div>
  )
}
