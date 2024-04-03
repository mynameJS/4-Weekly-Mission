import { useState, useEffect } from "react";
import {
  getSampleUserData,
  getSampleFolderData,
  getTargetUserData,
  getTargetUserFolderListData,
  getTargetUserFolderLinkListData,
} from "../utils/api";

const DATA_MAP = {
  sampleUser: getSampleUserData,
  sampleFolder: getSampleFolderData,
  targetUser: getTargetUserData,
  targetUserFolderList: getTargetUserFolderListData,
  targetUserFolderLinkList: getTargetUserFolderLinkListData,
};

const useFetchData = (
  dataType: keyof typeof DATA_MAP,
  userId?: number,
  folderId?: string | number
) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let targetData;

        if (userId && folderId) {
          targetData = await DATA_MAP[dataType]?.(userId, folderId);
        } else if (userId) {
          targetData = await DATA_MAP[dataType]?.(userId);
        } else {
          targetData = await DATA_MAP[dataType]?.();
        }
        setData(targetData);
      } catch (error) {
        // Throw error to the calling component
        throw new Error(`Failed to fetch ${dataType} data: ${error.message}`);
      }
    };

    fetchData();
  }, [dataType, userId, folderId]);

  return data;
};

export default useFetchData;
