export interface LoginData {
  message: string;
  data: {
    accessToken: string;
    id: string;
    username: string;
  };
}
