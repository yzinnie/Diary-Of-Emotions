import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className="Start">
      <img
        src={process.env.PUBLIC_URL + `/assets/icon-logo.jpg`}
        alt="icon-logo"
      />
      <button className="start_button" onClick={() => navigate('/home')}>
        일기쓰러가기
      </button>
    </div>
  );
};
export default Start;
