import { Modal, ModalBody, ModalHeader, InputGroup, FormInput, FormGroup } from 'shards-react';
import Select from 'react-select';

export default function AddNewKioskModal({ open, toggle, zones, selectedZone, handleZoneChange }) {
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
          <label htmlFor="amount">Client name</label>
          <InputGroup className="mb-2">
            <FormInput placeholder="full name" />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <label htmlFor="amount">Phone number</label>
          <InputGroup className="mb-2">
            <FormInput placeholder="phone number" />
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <label htmlFor="type">Zone</label>
          <Select value={selectedZone} onChange={handleZoneChange} options={zones} />
        </FormGroup>

        <div className="btn btn-primary w-100 align-self-center">Create kiosk</div>
      </ModalBody>
    </Modal>
  );
}
