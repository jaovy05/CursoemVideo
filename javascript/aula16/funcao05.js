function fatorial(f){
    if (f == 1)
        return f;
    return f * fatorial(f-1);
}

console.log(fatorial(10))