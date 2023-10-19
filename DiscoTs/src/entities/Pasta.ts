import { Arquivo } from './Arquivo';
import { ItemArmazenamento } from './ItemArmazenamento';

class Pasta implements ItemArmazenamento {
  private nome: string;

  private itens: ItemArmazenamento[];

  private pastaPai: Pasta;

  constructor(nome: string, pastaPai?: Pasta) {
    this.setNome(nome);

    if (pastaPai) {
      this.setPastaPai(pastaPai);
    }

    this.itens = [];
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getPastaPai(): Pasta {
    return this.pastaPai;
  }

  private setPastaPai(pastaPai: Pasta): void {
    this.pastaPai = pastaPai;
  }

  async apagar(): Promise<void> {
    if (!this.pastaPai) {
      throw new Error('Não é possível apagar a pasta raiz');
    }

    const copia = [...this.itens];

    for (const item of copia) {
      if (item instanceof Arquivo) {
        await this.remove(item);
      } else {
        await item.apagar();
      }

      if (this.itens.length === 0) {
        await this.pastaPai.remove(this);
      }
    }
  }

  async getTamanhoKB(): Promise<number> {
    return 0;
  }

  async add(item: ItemArmazenamento): Promise<void> {
    this.itens.push(item);
  }

  async remove(item: ItemArmazenamento): Promise<void> {
    this.itens = this.itens.filter(i => i !== item);
  }

  async getItens(): Promise<ItemArmazenamento[]> {
    return this.itens;
  }
}

export { Pasta };
