import React, { useEffect, useState } from 'react';
import { accountReadAPI } from '../../api/account/accountReadApi';

export const useAccountRead = () => {
  const getAccountRead = async () => {
    try {
      const response = await accountReadAPI.read();
      if (response.status === 200) {
        return response;
      } else {
        throw new Error('읽기 실패');
      }
    } catch (error) {
      console.log(error, 'error');
      throw error;
    }
  };

  return getAccountRead;
};

// API 관련 훅으로 보고 여기에 넣을 것인지. 아니라면 page 안에 해당 dir에서 func로 빼서 넣을 것인지.
export const useClickTestButton = (set) => {
  const getAccountRead = useAccountRead();

  const clickTestButton = async () => {
    try {
      const response = await getAccountRead();
      if (response.status === 200) {
        set(response.data);
      } else {
        console.log('읽기 실패');
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return clickTestButton;
};
