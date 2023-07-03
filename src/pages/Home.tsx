import { useNavigate } from 'react-router-dom';
import { MainHeader } from '../components/headers/MainHeader';
import { useAppSelector } from '../hooks/reduxHook';
import { RootState } from '../redux/store';
import { useEffect } from 'react';

export function Home() {
  const navigate = useNavigate();
  
  const token = useAppSelector((
    state: RootState) => state.user.token);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);

  return (
    <div>
      <MainHeader />
    </div>
  );
}