"use client";

import PageHeader from "@/components/common/header/page-header";
import { GenericTable } from "@/components/common/table/generic-table";
import { useFetch } from "@/hooks/use-fetch";
import { Department } from "@/types/employee";
import { departmentColumns } from "./components/department-columns";
import withPermissions from "@/hoc/withPermissions";
import { EPermissions } from "@/types/role-permission";
import { PaginatedResponse } from "@/types/common";
import { useFilterStore } from "@/store/filter-store";
import { useDebounce } from "@/hooks/use-debounce";
import DepartmentFilter from "./components/department-filters";
import { getFilter } from "@/lib/filter-helper";

const DepartmentPage = () => {
  const { search, departmentStatus, setDepartmentStatus, resetDepartmentFilters } =
    useFilterStore();

  const debouncedSearch = useDebounce(search, 500);

  const { data, isPending, error } = useFetch<PaginatedResponse<Department>>(
    ["departments"],
    "/departments",
    {
      search: debouncedSearch,
      is_active: getFilter(departmentStatus, "all"),
    },
  );

  if (error) {
    return <p>Failed to load departments {error?.message}</p>;
  }

  return (
    <main className="space-y-4 p-2">
      <PageHeader
        title="Department Page"
        subTitle="Manage all departments"
        buttonTitle="Add Department"
        url="/dashboard/departments/add-department"
        showSearch={true}
      />

      <DepartmentFilter
        departmentStatus= {departmentStatus}
        onStatusChange={setDepartmentStatus}
        onReset={resetDepartmentFilters}
      />

      <GenericTable
        columns={departmentColumns}
        data={data?.results ?? []}
        loading={isPending}
        getRowKey={(department) => department.id}
        emptyMessage="No departments found."
        selectable
      />
    </main>
  );
};

export default withPermissions(DepartmentPage, [
  EPermissions.CAN_READ_DEPARTMENT,
]);
