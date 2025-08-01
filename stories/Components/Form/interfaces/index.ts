export interface IFormData {
  name: string;
  email: string;
  country: string;
  agreeTerms: boolean;
}

export type TSelectEvent = React.ChangeEvent<HTMLInputElement> | (Event & {
  target: {
    value: unknown;
    name: string;
  };
});
