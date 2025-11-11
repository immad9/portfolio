  const getAge = () => {
    const birthDate = new Date("2002-12-09"); 
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age -= 1;
    }

    return age;
  };

const Myself = [
  {
    heading: "Birthday",
    value: "9 Dec 2002",
  },

  {
    heading: "Age",
    value: getAge().toString(),
  },
  {
    heading: "Address",
    value: "Lahore, Pakistan",
  },
  {
    heading: "Degree",
    value: "BSCS",
  },
  {
    heading: "Phone",
    value: "+92 3250340043",
  },
  {
    heading: "Email",
    value: "immadh9@gmail.com",
  },
];

export {Myself,}