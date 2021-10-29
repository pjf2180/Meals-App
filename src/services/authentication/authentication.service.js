export const loginRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "dummy user", email: "fakeEmail@fakeDomain.com" });
    }, 1500);
  });
};

export const registerRequest = (email, password, confirmPassword) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "dummy user", email: "fakeEmail@fakeDomain.com" });
    }, 1500);
  });
};
