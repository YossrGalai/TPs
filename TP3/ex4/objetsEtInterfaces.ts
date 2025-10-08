interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "yossr",
  email: "yossrgalai@gmail.com",
  isAdmin: false
};

interface Admin extends User {
  permissions: string[];
}

const admin1: Admin = {
  id: 2,
  name: "nour",
  isAdmin: true,
  permissions: ["read", "write", "delete"]
};

console.log(user1);
console.log(admin1);
