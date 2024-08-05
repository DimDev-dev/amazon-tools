import { Badge, badgeVariants } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const DataLink = ({ title, url, describe }) => {
  return (
    <div className="flex gap-3">
      <Badge> {describe} </Badge>
      <Link to={url} className={badgeVariants({ variant: "outline" })}>
        {title}
      </Link>
    </div>
  );
};

export default DataLink;
