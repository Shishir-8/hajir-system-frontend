"use client";
import { useAuthStore } from "@/store/auth-store";
import { SearchBox } from "../search/search-box";
import AddButton from "./add-button";

interface PageHeaderProps {
  title: string;
  subTitle?: string;
  url?: string;
  buttonTitle?: string;
  showSearch?: boolean
}

const PageHeader = ({ title, subTitle, url, buttonTitle, showSearch=false }: PageHeaderProps) => {
  const { user } = useAuthStore();
  return (
    <main className="flex items-center justify-between">
      <div className="shrink-0">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-muted-foreground text-sm">{subTitle}</p>
      </div>

      <div className="flex items-center gap-2 w-full flex-1 justify-end">
        {showSearch && <SearchBox />}
        {url && buttonTitle && <AddButton buttonTitle={buttonTitle} url={url} /> }
      </div>
    </main>
  );
};

export default PageHeader;
