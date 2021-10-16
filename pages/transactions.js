import { useState } from 'react';
import { ValidateTransactionModal } from '../components';

export default function transactions() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const tableData = allTransactions.map((transaction, index) => {
    return (
      <tr key={index} className=" align-items-center">
        <td>{transaction.created}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.type}</td>
        <td>{transaction.effected} </td>
        <td>
          {transaction.status === 'validated' && (
            <>
              <i className="fas mr-1 text-success fa-circle "></i>
              <span className="">{transaction.status}</span>
            </>
          )}
          {transaction.status === 'new' && (
            <>
              <i className="fas mr-1 text-primary fa-circle "></i>
              <span className="">{transaction.status}</span>
            </>
          )}
          {transaction.status === 'pending' && (
            <>
              <i className="fas mr-1 text-warning fa-circle "></i>
              <span className="">{transaction.status}</span>
            </>
          )}
        </td>
        {transaction.status !== 'validated' ? (
          <td>
            <button
              onClick={() => toggle(index)}
              type="button"
              className="btn btn-info btn-sm"
              data-toggle="modal"
              data-target="#myModal"
            >
              Validate
            </button>
          </td>
        ) : (
          <td className="">
            <button className="btn p-0 text-secondary btn-sm">
              <i className="fal m-0 text-success fa-check-double fa-2x"></i>
            </button>
          </td>
        )}
      </tr>
    );
  });

  return (
    <div className="card text-dark  mb-3">
      <h4 className="card-header">Transactions</h4>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Created</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Effected At</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
      <ValidateTransactionModal open={open} toggle={toggle} />
    </div>
  );
}

const allTransactions = [
  {
    created: '20, Jun 2021',
    amount: '70,000 FCFA',
    type: 'Cash',
    effected: '13, Jun 2021',
    status: 'new',
  },
  {
    created: '15, Jul 2021',
    amount: '200,000 FCFA',
    type: 'Cash',
    effected: '13, Jun 2021',
    status: 'new',
  },
  {
    created: '15, Jul 2021',
    amount: '200,000 FCFA',
    type: 'Cash',
    effected: '13, Jun 2021',
    status: 'pending',
  },
  {
    created: '12, June 2021',
    amount: '50,000 FCFA',
    type: 'Float',
    effected: '13, June 2021',
    status: 'validated',
  },
];
