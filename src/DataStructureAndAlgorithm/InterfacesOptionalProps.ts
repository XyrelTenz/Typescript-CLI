interface User {
  name: string;
  age?: number;
  role: string;
}

export function PrintUser(user: User): {
  name: string;
  age: number | undefined;
  role: string;
} {
  return {
    name: user.name,
    age: user.age,
    role: user.role,
  };
}
