import { AdminLayout } from '../components';

export default function Main({ children }) {
  return <AdminLayout pageTitle="Home">{children}</AdminLayout>;
}
