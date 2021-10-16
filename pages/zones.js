export default function zones() {
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

  const tableData = transactions.map((transaction, index) => {
    return (
      <tr key={index} className=" align-items-center">
        <td>{transaction.kioskId}</td>
        <td>{transaction.location}</td>
      </tr>
    );
  });

  return (
    <div className="card text-dark  mb-3">
      <h4 className="card-header">Zones</h4>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Zone id</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}
