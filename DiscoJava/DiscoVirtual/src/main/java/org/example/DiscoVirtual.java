package org.example;

public class DiscoVirtual {

    private Pasta raiz;


    public DiscoVirtual() {
        this.raiz = new Pasta("root");
    }

    public Pasta getRaiz() {
        return this.raiz;
    }
}
