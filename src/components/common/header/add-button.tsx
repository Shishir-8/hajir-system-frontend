"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type ButtonProps = {
  buttonTitle: string;
  url: string;
};

const AddButton = ({ buttonTitle, url }: ButtonProps) => {
  return (
    <Button nativeButton={false} className="h-10 hover:bg-primary-dark" render={<Link href={url} />}>
      <Plus />
      {buttonTitle}
    </Button>
  );
};

export default AddButton;
