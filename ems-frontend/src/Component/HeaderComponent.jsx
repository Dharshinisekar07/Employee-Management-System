import React from 'react'

const HeaderComponent = () => {
  return (
    <header className='ems-header'>
      <a className='ems-header-brand' href='/employees'>
        <div className='ems-header-icon'>👥</div>
        <span className='ems-header-title'>
          EMS <span>Pro</span>
        </span>
      </a>
      <span className='ems-header-badge'>Employee Management</span>
    </header>
  )
}

export default HeaderComponent