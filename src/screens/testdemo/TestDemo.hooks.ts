import {useEffect, useState} from 'react';
import AuthServices from '../../services/methods/AuthServices';
import {useCancelToken} from '../../utility/utilities';

const useTestDemo = () => {
  const source = useCancelToken();
  const [loading, setLoading] = useState(false);

  const onGetTitle = async () => {
    setLoading(true);
    try {
      const response = await AuthServices.getTitile(source);
      console.log(JSON.stringify(response.data, undefined, 4), 'response');
    } catch (error) {
      console.log(error, 'Error From the onGertTile');
    }
  };

  useEffect(() => {
    onGetTitle();
  }, []);
  return {
    loading,
  };
};

export {useTestDemo};
