package org.example;

public class Main {
    public static void main(String[] args) {

        System.out.println("Hello world!");

        DiscoVirtual disco = new DiscoVirtual();

        Pasta pasta = new Pasta("pasta", disco.getRaiz());

        pasta.add(new Arquivo("arquivo", "C:\\Users\\natha\\Downloads\\jm-PadroesdeProjeto.pdf", pasta));

        Pasta pasta2 = new Pasta("pasta2", pasta);

        try {
            pasta2.add(new Arquivo("arquivo2", "C", pasta2));
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

        Pasta pasta3 = new Pasta("pasta3", pasta2);

        pasta3.add(new Arquivo("arquivo3", "C:\\Users\\natha\\Downloads\\Injeção de dependência.docx", pasta3));

        System.out.println(disco.getRaiz().getItens());

        System.out.println(disco.getRaiz().getTamanhoKB());

        System.out.println(pasta.getItens());

        System.out.println(pasta2.getItens());

        System.out.println(pasta3.getItens());

        pasta3.apagar();

        System.out.println(pasta2.getItens());

        Arquivo arquivo = new Arquivo("arquivo", "C:\\Users\\natha\\Downloads\\jm-PadroesdeProjeto.pdf", pasta2);

        pasta2.add(arquivo);

        System.out.println(pasta2.getItens());

        pasta2.remove(arquivo);

        System.out.println(pasta2.getItens());
    }
}