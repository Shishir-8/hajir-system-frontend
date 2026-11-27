'use client'
import PageHeader from "@/components/common/header/page-header";
import LeaveForm from "../components/leave-form";

const ApplyLeavePage = () => {
  return (
    <main className="space-y-4 p-2">
        <PageHeader
         title="Apply for Leave"
         subTitle="Submit a leave request for approval."
         />

         <LeaveForm />
        
    </main>
  );
};

export default ApplyLeavePage;
