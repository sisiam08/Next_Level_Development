let anything: any;

anything = 123;

// (anything as number)

const kg_to_gm_Converter = (input: number | string) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split("");

    return Number(value) * 1000;
  }
};
  
const result1 = kg_to_gm_Converter(2) as number;
const result2 = kg_to_gm_Converter("2 kg");

console.log({ result1 }, { result2 });

type CustomerError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomerError).message);
}
