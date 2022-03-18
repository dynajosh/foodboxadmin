import React from 'react'
import './Aside.css'
import AsideMenu from './AsideMenu'

export default function Aside() {
  return (
    <div className='aside'>
      <div className='name-box'>
        <div className='name-box-details'>
          <p className='name'>Foodbox Admin</p>
        </div>
      </div>
      <AsideMenu />
    </div>
  )
}
