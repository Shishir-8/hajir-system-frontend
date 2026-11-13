import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";


type ButtonProps = {
  buttonTitle: string;
  url: string;
};

const AddButton = ({ buttonTitle, url }: ButtonProps) => {
  return (
    <Button className = "h-10">
      <Link href={url} className="flex items-center">
        <Plus />
        {buttonTitle}
      </Link>
    </Button>
  );
};

export default AddButton;