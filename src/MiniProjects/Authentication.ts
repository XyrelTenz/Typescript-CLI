type Users<T> = {
  username: T;
  password: T;
};

type Authentication<T extends Users<U>, U> = {
  (users: T): boolean;
};

interface MyUsers extends Users<string> {
  email: boolean | string;
}

const Authenticate: Authentication<MyUsers, string> = (users: MyUsers) => {
  const userdata = {
    username: "Xyrel",
    password: "123123",
    email: "xdemocrito1@gmail.com",
  };
  if (
    users.email != userdata.email ||
    users.username != userdata.username ||
    users.password != userdata.password
  ) {
    return (console.log("Invalid Credentials"), false);
  }
  if (users != null) true;
  return true;
};

const user: MyUsers = {
  username: "Xyrel",
  password: "123123",
  email: "xdemocrito1@gmail.com",
};

const isAuthenticated = Authenticate(user);

setTimeout(() => {
  for (let i = 1; i <= 3; i++) {
    console.log(`Signing in ${i}`);
  }
  if (!isAuthenticated) {
    isAuthenticated;
  }
  console.log("Sucessfully Login....");
}, 1000);
