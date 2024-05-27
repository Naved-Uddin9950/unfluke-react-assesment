import React from 'react'

function PageHeading() {
  return (
    <div className='py-10 flex flex-row flex-wrap justify-between'>
        <div>
            <h2 className='text-2xl pb-2 font-semibold'>LeaderBoard</h2>
            <p><i className="fa-solid fa-house text-blue-500"></i> / LeaderBoard</p>
        </div>

        <div>
            <button className='flex flex-row border-2 border-[#e27498] p-2 rounded text-[#e27498]'>
                <img src='https://unfluke.in/static/media/download.b22e9ebc.svg' alt='Download' />
                Download LeaderBoard Example</button>
        </div>
    </div>
  )
}

export default PageHeading