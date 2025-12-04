interface Development<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    price: number;
  };

  smartWatch: T;
  bike?: X;
}

interface BrandNai {
  heartRate: string;
  stopWatch: boolean;
}

interface BrandAche {
  heartRate: string;
  call: boolean;
  calculator: boolean;
  stopWatch: boolean;
}

const poorDeveloper: Development<BrandNai, { brand: string; model: string }> = {
  name: "Mr. Poor",
  salary: 100,
  device: {
    brand: "Lenevo",
    model: "IdeaPad Slim 3",
    price: 60000,
  },
  smartWatch: {
    heartRate: "150",
    stopWatch: true,
  },
  bike: {
    brand: "Yamaha",
    model: "R15",
  },
};

const richDeveloper: Development<BrandAche> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "Asus",
    model: "Zenbook",
    price: 120000,
  },
  smartWatch: {
    heartRate: "150",
    call: true,
    calculator: true,
    stopWatch: true,
  },
};

console.log(poorDeveloper);
console.log(richDeveloper);
