export const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
