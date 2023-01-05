const getName = () => {
  const names = [
    "An IT Student",
    "Kac Biznesu",
    "Just some random guy",
    "The perfect victim",
    "A beloved boyfriend",
    "A guy who has no idea what he's doing",
    "All hands to battle stations!",
  ];
  const name = names[Math.floor(Math.random() * names.length)];
  return name;
};

export { getName };
