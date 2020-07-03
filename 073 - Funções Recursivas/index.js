const recursiva = (x) => {
    if (x > 10) return;
        console.log(x)
        x++
        recursiva(x)
};

recursiva(0)