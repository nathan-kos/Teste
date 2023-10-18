package org.example;

import java.util.ArrayList;
import java.util.List;

public class Pasta implements ItemArmazenamento {

    private String nome;

    private Pasta pastaPai;

    private List<ItemArmazenamento> itens;

    public Pasta(String nome, Pasta pastaPai) {
        this.setNome(nome);
        this.setPastaPai(pastaPai);
        this.itens = new ArrayList<>();
    }

    public Pasta(String nome) {
        this.setNome(nome);
        this.itens = new ArrayList<>();
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Pasta getPastaPai() {
        return this.pastaPai;
    }

    public void setPastaPai(Pasta pastaPai) {
        this.pastaPai = pastaPai;
        pastaPai.add(this);
    }

    @Override
    public void apagar() {

        if(pastaPai == null){
            throw new IllegalArgumentException("Não é possível apagar a raiz");
        }

        List<ItemArmazenamento> copia = new ArrayList<>(this.itens);

        for (ItemArmazenamento item : copia) {
            if (item instanceof Arquivo) {
                this.remove(item);
            } else {
                item.apagar();
            }
        }

        if (itens.isEmpty()) {
            this.pastaPai.remove(this);
        }
    }

    @Override
    public Boolean add(ItemArmazenamento item) {
        return this.itens.add(item);
    }

    @Override
    public Boolean remove(ItemArmazenamento item) {
        return this.itens.remove(item);
    }

    @Override
    public List<ItemArmazenamento> getItens() {
        return this.itens;
    }

    @Override
    public long getTamanhoKB() {
        long tamanho = 0;
        for (ItemArmazenamento item : this.itens) {
            if(item instanceof Arquivo){
                tamanho += item.getTamanhoKB();
            }else{
                tamanho += item.getTamanhoKB();
            }
        }
        return tamanho;
    }

    @Override
    public String toString() {
        return "Pasta: " + this.getNome() + " " + this.getTamanhoKB() + "KB";
    }
}
