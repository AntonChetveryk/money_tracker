export const updateExpenses = (payload) => {
  return { type: "UPDATE_EXPENSES", payload };
};

export const removeDateFromExpenses = (payload) => {
  return { type: "REMOVE_DATE", payload };
};
