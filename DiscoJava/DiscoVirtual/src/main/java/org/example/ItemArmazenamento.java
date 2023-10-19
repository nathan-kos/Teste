package org.example;

import java.util.List;

public interface ItemArmazenamento {

    public void apagar();

    public long getTamanhoKB();

    public Boolean add(ItemArmazenamento item);

    public Boolean remove(ItemArmazenamento item);

    public List<ItemArmazenamento> getItens();

    public String getTipo();

}
