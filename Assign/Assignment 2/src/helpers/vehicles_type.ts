const VehicleType = {
  car: "car",
  bike: "bike",
  van: "van",
  SUV: "SUV",
};

export const isValidVehicle = (type: keyof typeof VehicleType) => {
  if (
    type === VehicleType.car ||
    type === VehicleType.bike ||
    type === VehicleType.van ||
    type === VehicleType.SUV
  )
    return true;
  else return false;
};
