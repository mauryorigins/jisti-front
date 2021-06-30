import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <>
      <Link to="/dashboard">Go to Dashboard</Link>
    </>
  );
};

export default Home;
