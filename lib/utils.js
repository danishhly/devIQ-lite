export const formatDate = (date: Date) => date.toISOString().split("T")[0];
export const randomId = () => Math.random().toString(36).substring(2, 9);
