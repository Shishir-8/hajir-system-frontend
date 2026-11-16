"use client";
import NoPermission from "@/components/common/no-permission/no-permission";
import { Spinner } from "@/components/ui/spinner";
import { hasAllPermissions } from "@/lib/permission-helper";
import { useAuthStore } from "@/store/auth-store";
import { EPermissions } from "@/types/role-permission";

export default function withPermissions(
  Component: React.ComponentType,
  requiredPermissions: EPermissions[],
) {
  const ProtectedComponent = () => {
    const { userPermissions, hydrated } = useAuthStore();
    if(!hydrated) return null

    const allowedPermissions = hasAllPermissions(
      userPermissions,
      requiredPermissions,
    );

    if (!allowedPermissions) {
      return <NoPermission />;
    }

    return <Component />;
  };

  return ProtectedComponent;
}
