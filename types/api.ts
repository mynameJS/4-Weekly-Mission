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

export interface LinkData {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource?: string;
}

export interface FolderData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: LinkData[];
  count: number;
}

export interface TargetUserData {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface TargetFolderListData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export interface TargetUserFolderLinkData {
  id: number;
  created_at: string;
  updated_at: null | string;
  url: string;
  title: string;
  description: string;
  image_source: string | null;
  folder_id: number | null;
}

export type FolderNameAndLinkData = [string, number, number];

export interface CardListProps {
  cardDataList: LinkData[];
  folderNameAndLinkList?: FolderNameAndLinkData[];
}

export interface cardData {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
}

export interface CardProps {
  cardData: cardData;
  selectedCardId: number;
  setSelectedCardId: (newValue: number) => void;
  folderNameAndLinkList?: FolderNameAndLinkData[];
}
