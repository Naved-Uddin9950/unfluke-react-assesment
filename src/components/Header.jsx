import React from 'react'

function Header() {
  return (
    <div className='border h-24 flex flex-row justify-between sm:px-32 px-2 items-center'>
        <img 
            src='https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png' 
            alt='Unfluke logo'
            className='w-32' 
        />
        <ul className='flex flex-row gap-4 items-center'>
            <li>
                <img 
                    src='https://unfluke.in/static/media/bell-icon.d99e8edc.png'
                    alt='Notification bell'
                    className='sm:h-6 max-h-[25px]'
                />
            </li>
            <li>
                <img 
                    src='https://unfluke.in//static/media/coin.9bfaef7e.jpeg'
                    alt='Coin'
                    className='sm:h-6 max-h-[25px]'
                />
            </li>
            <li>
                <img 
                    src='https://unfluke.in//static/media/monkey.5456259d.jpg'
                    alt='User'
                    className='sm:h-6 max-h-[25px]'
                />
            </li>
        </ul>
    </div>
  )
}

export default Header