import { AdminLayout } from '../components';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
} from 'shards-react';

export default function Main({ children }) {
  return <AdminLayout pageTitle="Home">{children}</AdminLayout>;
}
