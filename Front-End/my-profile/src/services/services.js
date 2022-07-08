const imageAll = async () => {
  return await fetch("http://localhost:3001/profile/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const imageServices = {
  imageAll,
};
