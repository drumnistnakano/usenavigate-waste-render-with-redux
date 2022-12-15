import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Hello World</div>
      <button onClick={() => navigate('/team')}>Go to team</button>
    </>
  );
};

export default Root;
