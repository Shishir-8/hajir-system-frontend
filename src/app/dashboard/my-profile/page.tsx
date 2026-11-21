'use client'
import PageHeader from "@/components/common/header/page-header";
import PersonalInformation from "./components/personal-information";
import EmploymentInformation from "./components/employment-information";
import ManageAccount from "./components/manage-account";
import { useFetch } from "@/hooks/use-fetch";
import { Spinner } from "@/components/ui/spinner";
import { MyProfile } from "@/constants/admin-type";


export default function MyProfilePage() {
  const {data, isPending, error} = useFetch<MyProfile>(
    ['profile'],
    '/auth/my-profile/'
  )

  if(isPending) return <Spinner />
  if (error) return <p>{error.message}</p>

  return (
    <main className="space-y-6 p-2">
      <PageHeader
        title="My Profile"
        subTitle="View and manage your personal information and account settings."
      />

      <PersonalInformation profile={data} />

      <EmploymentInformation employment={data} />

      <ManageAccount />
    </main>
  );
}
