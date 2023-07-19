import React from 'react'

function HeaderItem({name, Icon}) {
  return (
    <div className='flex text-white font-bold items-center gap-3 
    cursor-pointer hover:underline underline-offset-8 mb-1.5'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem