export interface Roles {
  editor?: boolean;
  admin?: boolean;
}

export interface UserInterface {
  id?: string;
  displayName?: string;
  email?: string;
  password?: string;
  photoUrl?: string;
  role?: string;
}
