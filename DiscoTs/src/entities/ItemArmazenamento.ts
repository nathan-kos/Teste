interface ItemArmazenamento {
  apagar(): Promise<void>;

  getTamanhoKB(): Promise<number>;

  add(item: ItemArmazenamento): Promise<void>;

  remove(item: ItemArmazenamento): Promise<void>;

  getItens(): Promise<ItemArmazenamento[]>;

  getTipo(): Promise<string>;
}

export { ItemArmazenamento };
