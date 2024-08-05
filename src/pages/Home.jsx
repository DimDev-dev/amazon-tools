import { Route, Routes } from "react-router-dom";
import Barcode from "../pages/Barcode";
import CardTruck from "../pages/CardTruck";
import Acceuil from "./Acceuil";
import LinkUtils from "./LinkUtils";

const Home = () => {
  return (
    <main className="flex flex-grow min-h-screen bg-background p-4 justify-center items-center overflow-y-auto">
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
