import Header from "../Components/Header";
import About from "../Components/About";
import Fontionement from "../Components/Fontionement"
import { Helmet } from "react-helmet";

type Props = {};
function Home({}: Props) {
  return (
    <div className="bg-gray-50 w-full min-h-[100vh] flex flex-col overflow-hidden ">
      <Helmet>
        <title>Home - Votre Aventure</title>
        <meta
          name="description"
          content="Page d'accueil de votre aventure sur mesure."
        />
      </Helmet>
      <Header />
      <main>
        <About/>
        <Fontionement/>
      </main>
    </div>
  );
}
export default Home;
