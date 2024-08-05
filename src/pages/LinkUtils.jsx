import DataLink from "@/composant/DataLink";
import { Separator } from "@radix-ui/react-separator";

const LinkUtils = () => {
  return (
    <div className="flex flex-col gap-3">
      <DataLink describe="liens 1" title="je suis le lien" url="#" />
      <Separator className="h-px bg-secondary" />
      <DataLink describe="liens 2" title="je suis le lien" url="#" />
      <Separator className="h-px bg-secondary" />
      <DataLink describe="liens 3" title="je suis le lien" url="#" />
    </div>
  );
};

export default LinkUtils;
