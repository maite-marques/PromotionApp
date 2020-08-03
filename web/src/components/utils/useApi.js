import { useState } from 'react';
import axios from 'axios';

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false
};

export default function useApi(config) {
  const [requestInfo, setRequestInfo] = useState(initialRequestInfo);

  async function call() {
    setRequestInfo({
      ...requestInfo,
      loading: true
    });

    let response = null;
    try {
      response = await axios(config);
      setRequestInfo({
        ...requestInfo,
        data: response.data
      });
    } catch (error) {
      setRequestInfo({
        ...requestInfo,
        error,
      });
    }

    if(config.onCompleted) {
      config.onCompleted(response);
    };

  };

  return [
    call,
    requestInfo
  ]
}