export interface IMenuState {
  open: boolean;
  toggle: () => void;
  setOpen: (open: boolean) => void;
}
