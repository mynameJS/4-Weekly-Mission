import {
  UserDataProps,
  FolderData,
  TargetUserData,
  TargetFolderListData,
  TargetUserFolderLinkData,
  SignUserInput,
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

const signUpUser = async (userInput: SignUserInput) => {
  const postUrl = `${BASE_URL}sign-up`;
  const response = await fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  return data;
};

const signInUser = async (userInput: SignUserInput) => {
  const postUrl = `${BASE_URL}sign-in`;
  const response = await fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  return data;
};

const checkEmailValidate = async (email: string) => {
  const postUrl = `${BASE_URL}check-email`;
  let result;
  try {
    const response = await fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    result = await response.json();
  } catch (error) {
    result = error;
  }
  return result;
};

export {
  getSampleUserData,
  getSampleFolderData,
  getTargetUserData,
  getTargetUserFolderListData,
  getTargetUserFolderLinkListData,
  signUpUser,
  signInUser,
  checkEmailValidate,
};
