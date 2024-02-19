import React from 'react'
import { SearchInput } from './SearchInput'
import { Conversations } from './Conversations'

export const Sidebar = () => {
  return (
    <div>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />

        {/* <LogoutButton /> */}
    </div>
  )
}
