export const formatDuration = (duration: string | null) => {
  if (!duration) return "--";

  const [hours, minutes] = duration.split(":");

  return `${Number(hours)} hr ${Number(minutes)} min`;
};