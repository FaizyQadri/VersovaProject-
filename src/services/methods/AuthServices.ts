import {CancelTokenSource} from 'axios';
import apiRequest from '../apiRequest';
import {apis} from '../apis/apis';

const AuthServices = {
  getTitile: function (source: CancelTokenSource) {
    return apiRequest(source).get(apis.title);
  },
};

export default AuthServices;
