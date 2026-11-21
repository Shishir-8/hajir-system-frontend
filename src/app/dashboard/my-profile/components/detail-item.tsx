
interface DetailItemProps {
  label: string;
  value: string | null;
}

export function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value || "Not provided"}</p>
    </div>
  );
}
