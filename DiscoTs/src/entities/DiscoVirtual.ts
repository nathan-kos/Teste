import { Pasta } from './Pasta';

class DiscoVirtual {
  private raiz: Pasta;

  constructor() {
    this.raiz = new Pasta('root');
  }

  public getRaiz(): Pasta {
    return this.raiz;
  }
}

export { DiscoVirtual };
