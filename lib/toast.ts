export const toast = (msg: string, type: "info" | "error" = "info") => {
  if (type === "error") {
    console.error("Toast Error:", msg);
  } else {
    console.log("Toast Info:", msg);
  }
};