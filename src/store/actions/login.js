import http from '@/utils/http';
import history from '@/utils/history';

export const LOGIN="LOGIN";
export function login(data){
  return (dispatch) => {
    http({
      url: '/login',
      data,
      method: 'post'
    })
      .then(res => {
        dispatch({
          type: LOGIN,
          data: res.data.data
        });
        history.push('/');
      });
  };
}