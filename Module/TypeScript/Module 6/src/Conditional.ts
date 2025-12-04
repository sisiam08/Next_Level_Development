// conditional type : je type condition er upor vitti kore type select kore

type A = null;
type B = undefined;

type C = A extends null ? true : false;
type D = A extends string ? true : B extends undefined ? true : false;

type RichPeoplesVehicle = {
  car: string;
  bike: string;
  ship: string;
};

type checkVehicleType<T> = T extends keyof RichPeoplesVehicle ? true : false;

type hasVehicle = checkVehicleType<"bike">;
 