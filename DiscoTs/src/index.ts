import { DiscoVirtual } from './entities/DiscoVirtual';
import { Pasta } from './entities/Pasta';
import { Arquivo } from './entities/Arquivo';

async function main() {
  const discoVirtual: DiscoVirtual = new DiscoVirtual();

  console.log(discoVirtual.getRaiz().getNome());

  const pasta: Pasta = new Pasta('pasta1');

  await pasta.add(
    new Arquivo(
      'pdf padrões de projeto',
      pasta,
      'C:\\Users\\natha\\Downloads\\jm-PadroesdeProjeto.pdf',
    ),
  );

  console.log(pasta.getItens());

  const pasta2: Pasta = new Pasta('pasta2', pasta);

  await pasta.add(pasta2);

  console.log(pasta.getItens());

  try {
    await pasta2.add(new Arquivo('inexistente', pasta2, 'C'));
  } catch (error) {
    console.log(error.message);
  }

  const pasta3: Pasta = new Pasta('pasta3', pasta2);

  await pasta2.add(pasta3);

  console.log(pasta2.getItens());

  await pasta3.add(
    new Arquivo(
      'injeção de dependencia',
      pasta3,
      'C:\\Users\\natha\\Downloads\\Injeção de dependência.docx',
    ),
  );

  console.log(pasta3.getItens());

  console.log(pasta2.getItens());

  await pasta3.apagar();

  console.log(pasta2.getItens());

  const Arquivo1: Arquivo = new Arquivo(
    'pdf padrões de projeto',
    pasta,
    'C:\\Users\\natha\\Downloads\\jm-PadroesdeProjeto.pdf',
  );

  await pasta2.add(Arquivo1);

  console.log(pasta2.getItens());

  await pasta2.remove(Arquivo1);

  console.log(pasta2.getItens());

  console.log(Arquivo1.getTipo());
}

main();
