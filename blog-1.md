<h1>Do you know the Significance of Union and Intersection Types in TypeScript ?</h1>

### Let's understand the significance of Union and Intersection Types

In TypeScript, union and intersection types are helpful features that helps a TypeScript Developer manage different types of data in a flexible and safe way.

**Union types** It allow us to work with values that can be of different types. For example, a variable could be a `string`, `number`, `boolean` or an `undefined` type. It’s like saying, This can be one thing or another, but not both at the same time.

```typeScript
interface Person {
    personAge: number | string;
};

// This is an example that we can define personAge number value
const oldPerson: Person = {
   personAge: 55,
}
// This is an example that we can define personAge sting value
const modernPerson: Person = {
   personAge: `35 years only`,
}
```

**Intersection types** It allow us to combine multiple types into one. It helps when you want to create a new type that must satisfy multiple needs.

```typescript
type User = {
  name: string;
  age: number;
};

type Developer = {
  id: number;
  role: string;
};


type SuperAdmin = User & Developer;

const admin: SuperAdmin = {
  name: "Shourav",
  age: 30,
  id: 324643484,
  role: "superAdmin"
};
```

By using union and intersection types, TypeScript allows us to write more flexible and maintainable code while still keeping type checks in place, reducing errors and improving our development productivity.