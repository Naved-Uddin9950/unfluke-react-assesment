import React from 'react';
import data from '../data/data.json';

function Table() {
    return (
        <div className='border rounded my-4 py-3 px-6'>
            <table className='w-full table-auto text-left'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Calmar Ratio</th>
                        <th>Overall Profit</th>
                        <th>Avg. Daily Profit</th>
                        <th>Win %(Day)</th>
                        <th>Price (Rs)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.rank}>
                                <td>{item.rank}</td>
                                <td>{item.name}</td>
                                <td>
                                    <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none bg-success-light rounded-lg"><svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-5 h-5 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"></path></svg>{item.ratio}</span>
                                </td>
                                <td>{item.profit}</td>
                                <td>{item.daily}</td>
                                <td>{item.win}</td>
                                <td>{item.price?item.price:"-"}</td>
                                <td>
                                    <a href='#' className='text-blue-700'>{item.action}</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table