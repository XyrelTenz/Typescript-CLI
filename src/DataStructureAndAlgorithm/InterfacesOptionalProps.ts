interface User {
  name: string;
  age?: number;
  role: string;
}

export function PrintUser(user: User): {
  name: string;
  age: number;
  role: string;
} {
  return {
    name: user.name,
    age: (user.age ??= 0),
    role: user.role,
  };
}
