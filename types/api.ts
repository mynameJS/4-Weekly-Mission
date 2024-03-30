export interface UserDataProps {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

export interface HeaderProps {
  folderName: string;
  owner: Omit<UserDataProps, "email">;
}
