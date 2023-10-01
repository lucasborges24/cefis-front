export type CredentialsType = {
  email: string;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
};

export type SignInProps = {
  email: string;
  password: string;
};
