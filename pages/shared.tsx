import Nav from "@/components/\bLayout/Nav";
import Header from "@/components/\bLayout/Header";
import SearchBar from "@/components/common/SearchBar";
import CardList from "@/components/common/CardList";
import Footer from "@/components/\bLayout/Footer";

export default function Shared() {
  return (
    <>
      <Nav />
      <Header />
      <SearchBar />
      <CardList />
      <Footer />
    </>
  );
}
