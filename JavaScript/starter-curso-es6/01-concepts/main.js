class Matematica {
    // Quando eu declaro static, ele não enxerga o resto da classe
    // Ele é independente do restante da classe
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));
