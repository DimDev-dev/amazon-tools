import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-9 pl-2 flex items-center bg-primary text-primary-foreground">
      <Sheet>
        <SheetTrigger>
          <div className="flex flex-col gap-3 transition-transform duration-200 hover:rotate-45 ">
            <div className="flex gap-3">
              <div className="bg-primary border border-primary-foreground rounded-full"></div>
              <div className="bg-primary border border-primary-foreground rounded-full"></div>
            </div>
            <div className="flex gap-3">
              <div className="bg-primary border border-primary-foreground rounded-full"></div>
              <div className="bg-primary border border-primary-foreground rounded-full"></div>
            </div>
          </div>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Application:</SheetTitle>
          </SheetHeader>
          <Link to={"/"}>Accueil</Link>
          <Link to={"/truck-optimiser"}>Optimisateur de camion</Link>
          <Link to={"/barcode"}>Générateur de code barre</Link>
          <Link to={"/link-utils"}>Liens utiles</Link>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
