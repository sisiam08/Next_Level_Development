const AvailableStatus = {
  available: "available",
  booked: "booked",
};

export const isValidStatus = (status: keyof typeof AvailableStatus) => {
  if (status === AvailableStatus.available || status === AvailableStatus.booked)
    return true;
  else return false;
};
