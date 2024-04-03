import useFetchData from "@/hooks/useFetchData";
import Nav from "@/components/Layout/Nav";
import AddLink from "@/components/AddLink";
import FolderDetails from "../components/FolderDetails";
import Footer from "@/components/Layout/Footer";

export default function Folder() {
  const currentUserData = useFetchData("targetUser", 1);
  const folderListData = useFetchData("targetUserFolderList", 1);

  if (!folderListData || !currentUserData) return null;

  return (
    <>
      <Nav currentUserData={currentUserData} />
      <AddLink folderListData={folderListData} />
      <FolderDetails folderListData={folderListData} />
      <Footer />
    </>
  );
}
