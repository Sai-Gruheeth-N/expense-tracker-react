import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const className = transaction.amount < 0 ? 'minus' : 'plus';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className={className}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className='delete-btn' onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}
