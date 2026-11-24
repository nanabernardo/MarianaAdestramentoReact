// converte as fotos de src/assets para WebP, em dois tamanhos, numa pasta separada. Os originais  não são alterados.
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ENTRADA = "src/assets";
const SAIDA = "fotos-otimizadas";

// cada foto sai em dois tamanhos (lado maior, em pixels)
const TAMANHOS = [
  { sufixo: "", lado: 1600 }, // lightbox
  { sufixo: "-pequena", lado: 600 }, // miniaturas e carrossel
];

const EXTENSOES = [".jpg", ".jpeg", ".png"];

// cria a pasta de saída (recursive: não dá erro se ela já existir)
await mkdir(SAIDA, { recursive: true });

const arquivos = await readdir(ENTRADA);

for (const arquivo of arquivos) {
  const extensao = path.extname(arquivo).toLowerCase(); //.JPG vira .jpg
  if (!EXTENSOES.includes(extensao)) continue; // não é foto, pula
  if (arquivo.startsWith("logo")) continue; // os logos ficam como estão

  const nome = path.basename(arquivo, path.extname(arquivo)); // "Wendy.jpg" -> "Wendy"

  for (const { sufixo, lado } of TAMANHOS) {
    const destino = path.join(SAIDA, `${nome}${sufixo}.webp`);

    await sharp(path.join(ENTRADA, arquivo))
      .rotate()
      .resize({
        width: lado,
        height: lado,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(destino);

    console.log("ok", destino);
  }
}
