package org.example;

import java.io.File;
import java.util.List;

public class Arquivo implements ItemArmazenamento {

    private String nome;

    private String caminho;

    private Pasta pastaPai;
    private long tamanhoKB;

    public Arquivo(String nome, String caminho, Pasta pastaPai) {
        this.setNome(nome);
        this.setCaminho(caminho);
        this.setTamanhoKB();
        this.setPastaPai(pastaPai);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public long getTamanhoKB() {
        return tamanhoKB;
    }

    private void setTamanhoKB() {
        File file = new File(this.getCaminho());
        if( file.exists() ){
            this.tamanhoKB = file.length()/ 1024;
        }else{
            throw new IllegalArgumentException("Arquivo não encontrado");
        }
    }

    public Pasta getPastaPai() {
        return this.pastaPai;
    }

    private void setPastaPai(Pasta pastaPai) {
        this.pastaPai = pastaPai;
    }

    public String getCaminho() {
        return this.caminho;
    }

    private void setCaminho(String caminho) {
        this.caminho = caminho;
    }

    @Override
    public void apagar() {
        this.pastaPai.remove(this);
    }

    @Override
    public Boolean add(ItemArmazenamento item) {
        throw new UnsupportedOperationException("Arquivos não podem conter outros itens");
    }

    @Override
    public Boolean remove(ItemArmazenamento item) {
        throw new UnsupportedOperationException("Arquivos não podem conter outros itens");
    }

    @Override
    public List<ItemArmazenamento> getItens() {
        throw new UnsupportedOperationException("Arquivos não podem conter outros itens");
    }

    @Override
    public String toString() {
        return "Arquivo: " + this.getNome() + " - " + this.getTamanhoKB() + "KB";
    }

}
