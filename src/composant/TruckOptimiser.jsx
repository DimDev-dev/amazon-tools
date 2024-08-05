/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useForm } from "react-hook-form";

const TruckOptimiser = ({ title, defaultGp = 0, defaultDp = 0 }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gp: defaultGp,
      dp: defaultDp,
    },
  });

  const [result, setResult] = useState("");
  const [remainingPalettes, setRemainingPalettes] = useState(0);
  const maxPalette = 66;
  const demiPalettePerGrande = 2;

  // Fonction qui sera appelée lors de la soumission du formulaire
  const onSubmit = (data) => {
    // Traiter les valeurs des inputs en s'assurant qu'elles sont des nombres
    const formattedData = {
      gp: data.gp ? Number(data.gp) : 0,
      dp: data.dp ? Number(data.dp) : 0,
    };

    // Appeler la fonction de traitement des données
    processFormData(formattedData);
  };

  // Utilisation des valeurs dans une fonction
  const processFormData = (data) => {
    const { gp, dp } = data;
    const totalDemiPalette = parseInt(gp) * demiPalettePerGrande + parseInt(dp);
    const restDemiPaletteSuccess = maxPalette - totalDemiPalette;
    const restDemiPaletteError = totalDemiPalette - maxPalette;

    if (totalDemiPalette <= maxPalette) {
      setResult(
        `Vous pouvez charger le camion, il reste ${Math.floor(
          restDemiPaletteSuccess / demiPalettePerGrande
        )} palette(s) et ${
          restDemiPaletteSuccess % demiPalettePerGrande
        } demi-palette(s) disponible(s).`
      );
      setRemainingPalettes(totalDemiPalette);
    } else {
      const additionalTrucks = Math.ceil(restDemiPaletteError / maxPalette) + 1;
      const remainingPalettes = restDemiPaletteError % maxPalette;
      setResult(
        `Il vous faut ${additionalTrucks} camion(s) avec ${Math.floor(
          remainingPalettes / demiPalettePerGrande
        )} palette(s) et ${
          remainingPalettes % demiPalettePerGrande
        } demi-palette(s) dans le dernier camion.`
      );
      setRemainingPalettes(remainingPalettes);
    }
  };

  return (
    <Card className="w-[325px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Label htmlFor="gp">Grande Palette:</Label>
            <Input
              id="gp"
              type="number"
              defaultValue={defaultGp}
              {...register("gp", {
                required: "Valeur minimale = 0",
              })}
            />
            {errors.gp && (
              <span className="text-destructive">{errors.gp.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="dp">Demi Palette:</Label>
            <Input
              id="dp"
              type="number"
              defaultValue={defaultDp}
              {...register("dp", {
                required: "Valeur minimale = 0",
              })}
            />
            {errors.dp && (
              <span className="text-destructive">{errors.dp.message}</span>
            )}
          </div>
          <Button type="submit">Soumettre</Button>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-3">
          {result}
          <div>
            {`Taux de remplissage du camion: ${Math.ceil(
              (remainingPalettes / maxPalette) * 100
            )}%`}
          </div>
          <Progress value={(remainingPalettes / maxPalette) * 100} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default TruckOptimiser;
