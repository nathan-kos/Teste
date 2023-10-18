import { ItemArmazenamento } from "./ItemArmazenamento";
import { Pasta } from "./Pasta";
const fs = require('fs')


class Arquivo implements ItemArmazenamento{

    private nome: string;

    private tamanhoKB: number;

    private pastaPai: Pasta;

    private caminho: string;

    constructor(nome: string, pastaPai: Pasta, caminho: string){
        this.setNome(nome);
        this.setPastaPai(pastaPai);
        this.setCaminho(caminho);
        this.setTamanhoKB();
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }


    private setTamanhoKB(): void{
        try{
            const infos = fs.statSync(this.caminho);

            if(infos.isFile()){
                this.tamanhoKB = infos.size / 1024;
            }else{
                throw new Error("Caminho não encontrado");
            }
        }catch(e){
            throw new Error("Caminho não encontrado");
        }
    }

    public getTamanhoKB(): Promise<number>{
        return Promise.resolve(this.tamanhoKB);
    }

    public getPastaPai(): Pasta{
        return this.pastaPai;
    }

    private setPastaPai(pastaPai: Pasta): void{
        this.pastaPai = pastaPai;
    }

    public getCaminho(): string{
        return this.caminho;
    }

    private setCaminho(caminho: string): void{
        this.caminho = caminho;
    }

    public async apagar(): Promise<void> {
        await this.pastaPai.remove(this);
    }

    public async add(item: ItemArmazenamento): Promise<void> {
        throw new Error("Arquivo não pode adicionar itens");
    }

    public async remove(item: ItemArmazenamento): Promise<void> {
        throw new Error("Arquivo não pode remover itens");
    }

    public async getItens(): Promise<ItemArmazenamento[]> {
        throw new Error("Arquivo não pode retornar itens");
    }

}

export { Arquivo }