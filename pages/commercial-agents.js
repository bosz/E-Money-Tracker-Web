export default function CommercialAgents() {
  const transactions = [
    {
      zone: 'Malingo',
      name: 'Ajah Nickson',
      Phone: '+237 677 370 614',
    },
    {
      zone: 'Mermoz',
      name: 'Tsafack Fokou',
      Phone: '+237 651 172 131',
    },
    {
      zone: 'Buea Town',
      name: 'Tambe Martin',
      Phone: '+237 650 372 015',
    },
    {
      zone: 'Bonduma',
      name: 'Neba Salome',
      Phone: '+237 674 742 130',
    },
  ];

  const tableData = transactions.map((transaction, index) => {
    return (
      <tr key={index} className=" align-items-center">
        <td>{transaction.zone}</td>
        <td>{transaction.name}</td>
        <td>{transaction.Phone}</td>
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
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}
