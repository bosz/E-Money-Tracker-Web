import {
  Modal,
  ModalBody,
  ModalHeader,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
} from 'shards-react';

export default function ValidateTransactionModal({ open, toggle }) {
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
  );
}
