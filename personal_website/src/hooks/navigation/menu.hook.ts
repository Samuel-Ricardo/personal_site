import { IMenuState } from '@/@types/hooks/navigation/menu';
import { create } from 'zustand';

export const useMenu = create<IMenuState>(set => {
  return {
    open: false,
    toggle: () => set(state => ({ open: !state.open })),
    setOpen: open => set({ open }),
  };
});
