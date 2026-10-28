import ChangePasswordForm from "./components/change-password-form";


export default function ChangePasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Change password
        </h1>

        <p className="text-sm text-muted-foreground">
          Enter your current password and choose a new one.
        </p>
      </div>

      <ChangePasswordForm />
    </div>
  );
}