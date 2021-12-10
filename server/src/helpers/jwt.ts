const jwt = require("jsonwebtoken");

export const generateToken = (payload: {
  _id: string;
  name: string;
  username: string;
}): string => {
  return jwt.sign(payload, "shhhh", { expiresIn: "8h" });
};

export const verivyToken = (token: string) => {
  try {
    const data = jwt.verify(token, "shhhh");
    return data;
  } catch (error) {
    return false;
  }
};
