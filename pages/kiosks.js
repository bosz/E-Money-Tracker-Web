import { AddNewKioskModal } from '../components';
import { useState } from 'react';

export default function Kiosks() {
  const [modalState, setModalState] = useState(false);
  const [selectedZone, setSelectedZone] = useState(null);

  const toggle = () => {
    setModalState(!modalState);
  };

  const handleZoneChange = (selectedZone) => {
    setSelectedZone(selectedZone);
  };

  const tableData = transactions.map((transaction, index) => {
    return (
      <tr key={index} className=" align-items-center">
        <td>{transaction.kioskId}</td>
        <td>{transaction.location}</td>
        <td>{transaction.clientName}</td>
        <td>{transaction.Phone}</td>
      </tr>
    );
  });

  return (
    <div className="card text-dark  mb-3">
      <h4 className="card-header">Kiosk agents</h4>
      <a
        onClick={toggle}
        className="nav-link d-flex align-self-end mt-2 mr-4 btn btn-info px-3"
        href="#"
      >
        <i className="fa fa-plus-circle mr-2"></i> New kiosk
      </a>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Kiosk Id</th>
              <th>Location</th>
              <th>Client name</th>
              <th>Phone number</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>

      <AddNewKioskModal
        selectedZone={selectedZone}
        zones={zones}
        handleZoneChange={handleZoneChange}
        open={modalState}
        toggle={toggle}
      />
    </div>
  );
}

const transactions = [
  {
    kioskId: 'mue001',
    clientName: 'Ajah Nickson',
    Phone: '+237 677 370 614',
    location: 'Muea, market',
  },
  {
    kioskId: 'mal121',
    clientName: 'Tsafack Fokou',
    Phone: '+237 651 172 131',
    location: 'Malingo, junction',
  },
  {
    kioskId: 'mal421',
    clientName: 'Tambe Martin',
    Phone: '+237 650 372 015',
    location: 'Malingo, tared',
  },
  {
    kioskId: 'sop124',
    clientName: 'Neba Salome',
    Phone: '+237 674 742 130',
    location: 'Soppo, oic market',
  },
];

const zones = [
  {
    value: 'Muea, market',
    label: 'Muea, Market',
  },
  {
    value: 'Malingo, junction',
    label: 'Malingo, junction',
  },
  {
    value: 'Soppo, oic market',
    label: 'Soppo, oic market',
  },
  {
    value: 'Malingo, tared',
    label: 'Malingo, tared',
  },
];
