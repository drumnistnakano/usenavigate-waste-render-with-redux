import { useLocation, useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div>Hi! You belong to developer team</div>
      <button onClick={() => navigate('/', { state: location.pathname })}>
        Go Back
      </button>
    </>
  );
};

export default Team;
