import {
  UserDataProps,
  FolderData,
  TargetUserData,
  TargetFolderListData,
  TargetUserFolderLinkData,
} from "@/types/api";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

const getSampleUserData = async (): Promise<UserDataProps> => {
  const response = await fetch(`${BASE_URL}sample/user`);
  const data = await response.json();
  return data;
};

const getSampleFolderData = async (): Promise<FolderData> => {
  const response = await fetch(`${BASE_URL}sample/folder`);
  const { folder } = await response.json();
  return folder;
};

const getTargetUserData = async (userId: number): Promise<TargetUserData> => {
  const response = await fetch(`${BASE_URL}users/${userId}`);
  const { data } = await response.json();
  return data[0];
};

const getTargetUserFolderListData = async (
  userId: number
): Promise<TargetFolderListData> => {
  const response = await fetch(`${BASE_URL}users/${userId}/folders`);
  const { data } = await response.json();
  return data;
};

const getTargetUserFolderLinkListData = async (
  userId: number,
  folderId: number | string
): Promise<TargetUserFolderLinkData[]> => {
  const api = `${BASE_URL}users/${userId}/links${
    folderId === "all" ? "" : `?folderId=${folderId}`
  }`;

  const response = await fetch(api);
  const { data } = await response.json();

  return data;
};
export {
  getSampleUserData,
  getSampleFolderData,
  getTargetUserData,
  getTargetUserFolderListData,
  getTargetUserFolderLinkListData,
};
