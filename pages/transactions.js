import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
} from 'shards-react';

export default function transactions() {
  const transactions = [
    {
      created: '20, Jun 2021',
      amount: '70,000 FCFA',
      type: 'Cash',
      effected: '13, Jun 2021',
      status: 'New',
    },
    {
      created: '15, Jul 2021',
      amount: '200,000 FCFA',
      type: 'Cash',
      effected: '13, Jun 2021',
      status: 'New',
    },
    {
      created: '15, Jul 2021',
      amount: '200,000 FCFA',
      type: 'Cash',
      effected: '13, Jun 2021',
      status: 'Pending',
    },
    {
      created: '12, June 2021',
      amount: '50,000 FCFA',
      type: 'Float',
      effected: '13, June 2021',
      status: 'Validated',
    },
  ];

  const [open, setopen] = useState(false);

  const toggle = (index) => {
    setopen(!open);
  };

  const tableData = transactions.map((transaction, index) => {
    return (
      <tr key={index} className=" align-items-center">
        <td>{transaction.created}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.type}</td>
        <td>{transaction.effected} </td>
        <td>
          {transaction.status === 'Validated' && (
            <span className="text-success">{transaction.status}</span>
          )}
          {transaction.status === 'New' && (
            <span className="text-primary">{transaction.status}</span>
          )}
          {transaction.status === 'Pending' && (
            <span className="text-warning">{transaction.status}</span>
          )}
        </td>
        {transaction.status !== 'Validated' ? (
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

  const [status, setstatus] = useState();
  return (
    <div className="card text-dark  mb-3">
      <h4 className="card-header">Transactions</h4>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Created</th>
              <th>Amount</th>
              <th>type</th>
              <th>Effected at</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>

      <Modal
        backdrop={true}
        backdropClassName="modalBackdrop"
        className="h-50"
        centered={true}
        size="md"
        open={open}
        toggle={toggle}
      >
        <ModalHeader>Validate transaction</ModalHeader>
        <ModalBody className="d-flex flex-column">
          <InputGroup className="mb-2">
            <FormInput placeholder="Total Amount" />
            <InputGroupAddon type="append">
              <InputGroupText>FCFA</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <div className="btn btn-success mt-3 align-self-center">Submit</div>
        </ModalBody>
      </Modal>
    </div>
  );
}
