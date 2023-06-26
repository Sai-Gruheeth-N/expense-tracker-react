import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(
                        (transaction) => (
                            <Transaction key={transaction.id} transaction={transaction} />
                        )
                    )
                }
            </ul>
        </div>
    );
};

/* <li className='minus'>
    Cash <span>-$400</span><button className='delete-btn'>X</button>
</li>
<li className='plus'>
    Cash <span>+$400</span><button className='delete-btn'>X</button>
</li> */
