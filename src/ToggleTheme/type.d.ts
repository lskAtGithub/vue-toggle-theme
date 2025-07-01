export interface IProps {
  size?: string;
}

export interface IEmits {
  (e: 'change', value: 'light' | 'dark'): void;
}
