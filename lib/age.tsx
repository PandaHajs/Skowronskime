const getAge = () => {
  const month = new Date().getMonth();
  if (month < 9) {
    const age = new Date().getFullYear() - 2004 - 1;
    return age;
  } else {
    const age = new Date().getFullYear() - 2004;
    return age;
  }
};

const indefiniteArticle = (age: number) => {
  return [8, 11, 18].includes(age) ? "An" : "A";
};

//test

export { getAge, indefiniteArticle };
