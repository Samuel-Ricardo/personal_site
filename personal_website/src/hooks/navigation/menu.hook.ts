import { IMenuState } from '@/@types/hooks/navigation/menu';
import { create } from 'zustand';

export const useMenu = create<IMenuState>(set => {
  return {
    open: false,
    setOpen: open => set({ open }),
  };
});
