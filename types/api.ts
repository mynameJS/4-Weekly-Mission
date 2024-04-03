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

export type FolderNameAndLinkData = (string | number)[];

export interface CardListProps {
  cardDataList: LinkData[];
  folderNameAndLinkList?: FolderNameAndLinkData[];
}

export interface cardData {
  created_at: string;
  description: string | null;
  folder_id: number | null;
  id: number;
  image_source: string | null;
  title: string | null;
  updated_at: string | null;
  url: string;
}

export interface CardProps {
  cardData: cardData | LinkData;
  selectedCardId: number | null;
  setSelectedCardId: (newValue: number) => void;
  folderNameAndLinkList?: FolderNameAndLinkData[];
}

export interface FolderData {
  created_at: string;
  favorite: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export type FolderListData = FolderData[];

export interface AddLinkModalProps {
  folderNameAndLinkList: FolderNameAndLinkData[];
  linkUrl: string;
  onClose: (e: MouseEvent, modalName: string) => void;
}

export interface EditAndAddModalProps {
  modalTitle: string;
  buttonText: string;
  selectedFolderName?: string;
  onClose: (e: MouseEvent, modalName: string) => void;
}

export interface RemoveModalProps {
  modalTitle: string;
  titleContent: string;
  onClose: (e: MouseEvent, modalName: string) => void;
}

export interface ShareFolderModalProps {
  selectedFolderName: string;
  selectedFolderId: number;
  onClose: (e: MouseEvent, modalName: string) => void;
}
