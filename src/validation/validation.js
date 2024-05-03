// regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

let error = "";

export const emailValidation = (userEmail) => {
  if (!userEmail) {
    return (error = "You Forget to Enter Email Address");
  } else if (!emailRegex.test(userEmail)) {
    return (error = "Please Enter a Valid Email Address");
  } else {
    return (error = false);
  }
};

export const nameValidation = (fullName) => {
  if (!fullName) {
    return (error = "Please Enter Your Full Name");
  }
};

export const passwordValidation = (userPassword) => {
  if (!userPassword) {
    return (error = "You Forget to Enter Password");
  } else if (!passwordRegex.test(userPassword)) {
    return (error =
      "Password contains with 8 Characters, 1 uppercase, 1 lowercase & 1 special character");
  } else {
    return (error = false);
  }
};
