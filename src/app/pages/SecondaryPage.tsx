import { Outlet } from 'react-router';
import SecondaryLayout from '../shared/layouts/SecondaryLayout';

const SecondaryPage = () => {
  return (
    <SecondaryLayout>
      <Outlet />
    </SecondaryLayout>
  );
};

export default SecondaryPage;
