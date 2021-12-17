import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Col,
  Alert,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
} from 'shards-react';

export default function Main({ children }) {
  return (
    <div className="container-fluid">
      <h1 className="title text-center">Welcome to the e-money tracker</h1>

      <Row>
        <Col sm="12" md="4" lg="4">
          <Card>
            <CardHeader>Alert with img</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <div>
                <Alert theme="primary">Primary alert</Alert>
                <Alert theme="secondary">Secondary alert</Alert>
                <Alert theme="danger">Danger alert</Alert>
                <Alert theme="warning">Warning alert</Alert>
              </div>
              <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Col>

        <Col sm="12" md="4" lg="4">
          <Card>
            <CardHeader>Form field</CardHeader>
            <CardBody>
              <CardTitle>New transaction</CardTitle>
              <div>
                <Form>
                  <FormGroup>
                    <label htmlFor="#username">Amount</label>
                    <FormInput id="#amount" placeholder="Amount" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#location">Location</label>
                    <FormInput type="text" id="#location" placeholder="Location" />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="#agent">Agent</label>
                    <FormSelect>
                      <option value="Jane">Jane</option>
                      <option value="yaya">Yaya</option>
                      <option value="third" disabled>
                        Banned agent
                      </option>
                    </FormSelect>
                  </FormGroup>
                </Form>
              </div>
              <Button className="btn-block">
                Submit <i className="fa fa-plus-circle"></i>
              </Button>
            </CardBody>
            <CardFooter>Awesome!!!</CardFooter>
          </Card>
        </Col>

        <Col sm="12" md="4" lg="4">
          <Card>
            <CardHeader>What next</CardHeader>
            <CardBody>
              <CardTitle>Get help </CardTitle>
              <div>
                <a href="https://designrevision.com/docs/shards-react/getting-started">
                  You can get help here
                </a>
              </div>
            </CardBody>
            <CardFooter>Okay, looks good!!!</CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
