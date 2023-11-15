export type TMenu = {
  name: string;
  path: string;
  icon?: string | JSX.Element;
  children?: TMenu[];
};
