import TruckOptimiser from "@/composant/TruckOptimiser";

const CardTruck = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-full w-full">
      <h1 className="uppercase font-bold text-2xl">Optimisation de Camion</h1>
      <div className="flex gap-3 flex-wrap justify-center items-center">
        <TruckOptimiser title="Camion FR" defaultGp={0} defaultDp={0} />
        <TruckOptimiser title="Camion EU" defaultGp={0} defaultDp={0} />
        <TruckOptimiser title="Camion DHL" defaultGp={0} defaultDp={0} />
      </div>
    </div>
  );
};

export default CardTruck;
