import Nav from "@/components/Layout/Nav";
import Header from "@/components/Layout/Header";
import SearchBar from "@/components/common/SearchBar";
import CardList from "@/components/common/CardList";
import Footer from "@/components/Layout/Footer";
import useFetchData from "@/hooks/useFetchData";
import styles from "../styles/Shared.module.css";

export default function Shared() {
  const data = useFetchData("sampleFolder");
  const currentUserData = useFetchData("sampleUser");

  if (!data || !currentUserData) return null;

  return (
    <div className={styles.SharedContainer}>
      <Nav currentUserData={currentUserData} />
      <Header folderName={data.name} owner={data.owner} />
      <SearchBar />
      <CardList cardDataList={data.links} />
      <Footer />
    </div>
  );
}
