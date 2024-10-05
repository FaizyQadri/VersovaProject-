// import {store} from '../redux/store';

import axios from 'axios';
import {useRef} from 'react';

// const useAccessToken = () => {
//   // const token = store.getState().authReducer
// };

// useCancelToken
const useCancelToken = () => {
  /**
   *@method cancelToken
   *@returns returns current
   */
  const source = useRef(axios.CancelToken.source());
  return source.current;
};

export {useCancelToken};
