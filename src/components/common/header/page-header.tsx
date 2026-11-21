"use client";
import { useAuthStore } from "@/store/auth-store";
import { SearchBox } from "../search/search-box";
import AddButton from "./add-button";

interface PageHeaderProps {
  title: string;
  subTitle?: string;
  url?: string;
  buttonTitle?: string;
  showSearch?: boolean;
}

const PageHeader = ({
  title,
  subTitle,
  url,
  buttonTitle,
  showSearch = false,
}: PageHeaderProps) => {
  const { user } = useAuthStore();

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Title & Subtitle */}
      <div className="space-y-1">
        <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
          {title}
        </h1>
        {subTitle && (
          <p className="text-muted-foreground text-xs sm:text-sm">{subTitle}</p>
        )}
      </div>

      {/* Actions: Search & Add Button */}
      {(showSearch || (url && buttonTitle)) && (
        <div className="flex items-center gap-2 w-full justify-end">
          {showSearch && <SearchBox />}
          {url && buttonTitle && (
            <AddButton buttonTitle={buttonTitle} url={url} />
          )}
        </div>
      )}
    </header>
  );
};

export default PageHeader;
