import React from 'react';
import { useState } from 'react';

function Navbar() {

  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState('hidden');

  const changeMenu = () => {
    if (menu === false) {
      setOpen('flex');
      setMenu(true);
      return;
    }

    setOpen('hidden');
    setMenu(false);
  }

  return (
    <>
      {/* Desktop Navbar */}
      <div className='lg:flex hidden px-32 flex-row gap-7 font-semibold text-base py-4'>
        <a href="" className='flex flex-row'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft mr-2 mb-1 mt-1" viewBox="0 0 16 16"><path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path></svg>LeaderBoard
        </a>

        <a href='#' >Historical Trading</a>
        <a href='#' >Historical Chart</a>
        <a href='#' >Scanners</a>
        <a href='#' >Alerts</a>
        <a href='#' >Basic Backtest</a>
        <a href='#' >Advanced Backtest</a>
        <a href='#' >Pricing</a>
        <a href='#' >My Earnings</a>
      </div>

      {/* Mobile Navbar */}
      <div className='flex lg:hidden pxp-32 flex-col gap-7 font-semibold text-base p-4'>
        <button className='w-12 border rounded py-2 px-3 hover:bg-slate-400 active:bg-slate-500' onClick={changeMenu}>
          <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e" alt='mobile menu' />
        </button>

        <div className={`flex flex-col items-center gap-3 ${open}`}>
          <a href="" className='flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft mr-2 mb-1 mt-1" viewBox="0 0 16 16"><path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path></svg>LeaderBoard
          </a>

          <a href='#' >Historical Trading</a>
          <a href='#' >Historical Chart</a>
          <a href='#' >Scanners</a>
          <a href='#' >Alerts</a>
          <a href='#' >Basic Backtest</a>
          <a href='#' >Advanced Backtest</a>
          <a href='#' >Pricing</a>
          <a href='#' >My Earnings</a>
        </div>
      </div>
    </>
  )
}

export default Navbar