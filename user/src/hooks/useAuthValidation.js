import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { jwtDecode } from 'jwt-decode';

export const useAuthValidation = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    if (isLoggedIn && token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          dispatch(logout());
        }
      } catch (error) {
        dispatch(logout());
      }
    }
  }, [token, isLoggedIn, dispatch]);
};