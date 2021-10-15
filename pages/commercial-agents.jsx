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
export default function CommercialAgents() {
  const transactions = [
    {
      zone: 'Malingo',
      name: 'Ajah Nickson',
      Phone: '+237 677 370 614',
    },
    {
      zone: 'Malingo',
      name: 'Tsafack Fokou',
      Phone: '+237 651 172 131',
    },
    {
      zone: 'Malingo',
      name: 'Tambe Martin',
      Phone: '+237 650 372 015',
    },
    {
      zone: 'Bonduma',
      name: 'Neba Salome',
      Phone: '+237 674 742 130',
    },
  ];

  const [open, setopen] = useState(false);

  const toggle = (index) => {
    setopen(!open);
  };

  const tableData = transactions.map((transaction, index) => {
    return (
      <tr key={index} className=" align-items-center">
        <td>{transaction.zone}</td>
        <td>{transaction.name}</td>
        <td>{transaction.Phone}</td>
        {/* <td>{transaction.effected} </td> */}
        {/* <td>
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
        )} */}
      </tr>
    );
  });

  return (
    <div className="card text-dark  mb-3">
      <h4 className="card-header">Commercial agents</h4>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Zone</th>
              <th>Name</th>
              <th>Phone</th>
              {/* <th>Effected at</th>
              <th>Status</th>
              <th>Action</th> */}
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

          <div className="btn btn-primary w-100 mt-3 align-self-center">Submit</div>
        </ModalBody>
      </Modal>
    </div>
  );
}
