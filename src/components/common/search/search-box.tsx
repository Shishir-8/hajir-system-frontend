import { Search, X } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { useFilterStore } from "@/store/filter-store"

export function SearchBox() {
  const { search, setSearch, clearSearch } = useFilterStore()
  return (
    <InputGroup className="max-w-3xs w-full">
      <InputGroupInput
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..." />
      <InputGroupAddon>
        {search ?
          <X className="cursor-pointer" onClick={clearSearch} />
          : <Search />}
      </InputGroupAddon>
    </InputGroup>
  )
}
