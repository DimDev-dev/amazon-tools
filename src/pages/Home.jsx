import { Route, Routes } from "react-router-dom";
import Barcode from "../pages/Barcode";
import CardTruck from "../pages/CardTruck";
import Acceuil from "./Acceuil";
import LinkUtils from "./LinkUtils";

const Home = () => {
  return (
    <main className="bg-background h-auto flex items-center justify-center flex-grow overflow-auto scrollbar-hide">
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/truck-optimiser" element={<CardTruck />} />
        <Route path="/barcode" element={<Barcode />} />
        <Route path="/link-utils" element={<LinkUtils />} />
      </Routes>
    </main>
  );
};

export default Home;
