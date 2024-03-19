import { create } from 'zustand';

export const useLoginInfo = create((set) => ({
  loginInfo: {},
  setLoginInfo: (loginInfo) => set(() => ({ loginInfo: loginInfo })),
}));
