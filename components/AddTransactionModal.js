import {
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
} from 'shards-react';
import Select from 'react-select';

export default function AddTransactionModal({
  open,
  toggle,
  handleKioskChange,
  selectedKiosk,
  kioskData,
  transactionTypeData,
  handleTypeChange,
  selectedType,
}) {
  return (
    <Modal
      backdrop={true}
      backdropClassName="modalBackdrop"
      className="h-50"
      centered={true}
      size="md"
      open={open}
      toggle={toggle}
    >
      <ModalHeader>Create new transaction</ModalHeader>
      <ModalBody className="d-flex flex-column">
        <FormGroup>
          <label htmlFor="amount">Amount</label>
          <InputGroup className="mb-2">
            <FormInput placeholder="Total Amount" />
            <InputGroupAddon type="append">
              <InputGroupText>FCFA</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <label htmlFor="type">Type</label>
          <Select value={selectedType} onChange={handleTypeChange} options={transactionTypeData} />
        </FormGroup>

        <FormGroup>
          <label htmlFor="type">Kiosk</label>
          <Select value={selectedKiosk} onChange={handleKioskChange} options={kioskData} />
        </FormGroup>

        <div className="btn btn-primary w-100 align-self-center">Submit</div>
      </ModalBody>
    </Modal>
  );
}
