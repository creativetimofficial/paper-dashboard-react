import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { notification } from 'antd';
import {
  getIsAuthenticatedFromAuth,
  setIsAuthenticated,
  logoutAction,
  getUserDetailsFromAuth
} from '../redux/slices/authSlice';
import { useSelector, useDispatch } from '../redux/store';

///////////////////////////////////////////////////////////


const useAuth = () => {
  
  const isAuthenticated = useSelector(getIsAuthenticatedFromAuth);
  const user = useSelector(getUserDetailsFromAuth);
  console.log('🚀 => user', user);
  const dispatch = useDispatch();

  const isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
          dispatch(setIsAuthenticated(isValidToken(accessToken)));
        } else {
            notification('Session expired! Login again', {
            variant: 'success',
           
          });
          dispatch(setIsAuthenticated(isValidToken(accessToken)));
          dispatch(logoutAction());
        }
      } catch (err) {
        console.error(err);
        notification('Something went wrong! Login again', {
          variant: 'error',
         
        });
        dispatch(logoutAction());
      }
    };

    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated };
};

export default useAuth;
