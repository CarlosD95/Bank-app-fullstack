import React from 'react'

const MakeTransaction = () => {
  return (
    <div className='transfer'>
      <h1 className='title-transfer'>Transfer: </h1>
      <form className='form-transfer'>
        <div className='form-item'>
          <label className='label'>
            Transfer from: 
          </label>
        </div>
        <div className='form-item'>
          <label className='label'>
            Transfer to: 
          </label>
          <input
            type='number'
            min={1}
            max={999999}
            placeholder='Account Number'
            className='input'
          />
        </div>
        <div className='form-item'>
          <label className='label'>
            Enter Amount: 
          </label>
          <input
            type='number'
            min={1}
            max={99999}
            placeholder='Amount'
            className='input'
          />
        </div>
        <div className='form-item'>
          <button type='submit' className='submit'>
              Transfer
          </button>
        </div>
      </form>
    </div>
  )
}

export default MakeTransaction