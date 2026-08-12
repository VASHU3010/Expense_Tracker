import React, { useContext } from 'react';
import { Transactions } from './Transactions';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
// useContext — shares data between components
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transactions => (<Transactions key={transactions.id} transaction={transactions} />))}
      </ul>
    </>
  )
}