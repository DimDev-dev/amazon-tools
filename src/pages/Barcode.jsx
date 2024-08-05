import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Barcode from "react-barcode";
const BarcodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full w-full">
      <h1 className="uppercase font-bold text-2xl">
        Générateur de Code-Barres
      </h1>
      <div className="flex flex-col gap-3">
        <Label htmlFor="barcode-input">Entrez les données :</Label>
        <Input
          id="barcode-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div>{inputValue && <Barcode value={inputValue} />}</div>
    </div>
  );
};

export default BarcodeGenerator;
