const user = { name: 'tester' };

const getName = () => {
    const { name } = user;

    return name;
};

console.log(getName());
