type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  color?: string;
};

type ReadOnlyProduct = Readonly<Product>; // All properties are read-only

type ProductSummary = Pick<Product, "id" | "name" | "price">; // Only selected properties

type ProductWithoutStock = Omit<Product, "stock">; // All properties except 'stock'

type ProductOptional = Partial<Product>; // All properties are optional

type ProductRequiredColor = Required<Product>; // All properties are required

const emptyObject: Record<string, unknown> = {}; // An object with string keys and unknown values

const product1: ReadOnlyProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
  category: "Electronics",
  stock: 50,
};

const productSummary: ProductSummary = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const productWithoutStock: ProductWithoutStock = {
  id: 1,
  name: "Laptop",
  price: 1000,
  category: "Electronics",
};

const productOptional: ProductOptional = {
  id: 1,
  name: "Laptop",
};

const productRequiredColor: ProductRequiredColor = {
  id: 1,
  name: "Laptop",
  price: 1000,
  category: "Electronics",
  stock: 50,
  color: "Silver",
};

console.log({
  product1,
  productSummary,
  productWithoutStock,
  productOptional,
  productRequiredColor,
  emptyObject,
});
