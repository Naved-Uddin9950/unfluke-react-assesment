import React from 'react';
import PageHeading from './PageHeading';
import Table from './Table';

function LeaderBoard() {
    return (
        <div className='sm:px-32 pb-32 px-8'>
            <PageHeading />
            <div className='pt-10 flex flex-row justify-between'>
                <h1 className='text-[#e27498] border-b-2 border-[#e27498] text-3xl w-max'>Basic Backtest</h1>
                
                <div className='text-lg'>
                    <label 
                        htmlFor="slippage" 
                        className='bg-[#e9ecef] border rounded py-1 px-2 border-slate-300 rounded-r-none'
                    >Slippage</label>
                    
                    <select name="slippage" className='bg-white border rounded py-1 px-2 rounded-l-none'>
                        <option value="val1">0%</option>
                        <option value="val2">0.5%</option>
                        <option value="val3">1%</option>
                    </select>
                </div>
            
            </div>
            <Table />
        </div>
    )
}

export default LeaderBoard;