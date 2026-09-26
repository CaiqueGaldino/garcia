export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: 'como-prevenir-lesoes-treino-forca',
    title: 'Prevenção de Lesões no Treinamento de Força',
    subtitle: 'A importância da biomecânica e do controle motor para evitar dores articulares e musculares durante a musculação.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
A prática do treinamento de força é fundamental não apenas para a estética, mas principalmente para a longevidade articular e a qualidade de vida. Contudo, sem a devida orientação biomecânica, o risco de lesões musculoesqueléticas aumenta consideravelmente.

## A Importância do Controle Motor

O controle motor é a capacidade do sistema nervoso de ativar os músculos corretos, na intensidade adequada e no tempo exato para realizar um movimento eficiente. Quando realizamos exercícios complexos como agachamentos ou levantamentos terra sem controle adequado, estruturas passivas como ligamentos e discos intervertebrais recebem cargas lesivas.

![Controle Motor no Treino](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

### Principais Fatores de Risco:
*   **Falta de Mobilidade:** Articulações rígidas obrigam outras articulações a compensarem o movimento (ex: falta de mobilidade no tornozelo gera estresse no joelho).
*   **Assimetrias Musculares:** Desequilíbrios de força entre lados do corpo ou entre músculos agonistas e antagonistas.
*   **Volume e Intensidade Desregulados:** Aumentar a carga sem que os tecidos tendíneos estejam adaptados.

## Como a Fisioterapia Ajuda?

Uma avaliação fisioterapêutica preventiva identifica os déficits de mobilidade e as falhas no padrão de ativação muscular. A partir disso, traçamos um plano que inclui exercícios de ativação específicos e rotinas de liberação miofascial e mobilidade articular que devem preceder o treino de força.
`
  },
  {
    slug: 'terapia-manual-dor-lombar',
    title: 'Terapia Manual no Tratamento da Dor Lombar crônica',
    subtitle: 'Por que apenas tomar remédios não resolve e como as manipulações articulares atuam na causa raiz da dor.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
A dor lombar é uma das principais queixas nos consultórios e a maior causa de incapacidade no mundo. Apesar disso, o tratamento convencional muitas vezes se restringe a anti-inflamatórios e repouso, abordagens que apenas mascaram o problema.

## O Que Causa a Dor Lombar Crônica?

Na grande maioria dos casos (dor lombar inespecífica), a dor não é originada por uma estrutura "quebrada", mas sim por uma **disfunção de movimento**. Pode ser uma rigidez nas vértebras lombares ou torácicas, tensões na fáscia toracolombar ou fraqueza profunda dos músculos estabilizadores do Core (como o Transverso do Abdome e os Multífidos).

## A Terapia Manual como Solução

A terapia manual ortopédica engloba técnicas como mobilização articular, manipulação (o famoso "estalo") e liberação miofascial.

![Terapia Manual Aplicada](https://images.unsplash.com/photo-1611077543884-6ce5a43589b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

### Efeitos Comprovados:
1.  **Neurofisiológicos:** A manipulação articular envia um estímulo ao sistema nervoso central que inibe vias de dor (efeito hipoalgésico imediato).
2.  **Mecânicos:** Restaura o micro-movimento entre as vértebras, permitindo que a articulação deslize livremente sem atrito excessivo.
3.  **Musculares:** Reduz o espasmo protetor que os músculos formam ao redor de uma articulação dolorosa.

Após o alívio conquistado com a Terapia Manual, é essencial instituir o fortalecimento para manter os resultados a longo prazo.
`
  },
  {
    slug: 'liberacao-miofascial-performance',
    title: 'Liberação Miofascial e Recovery para Atletas',
    subtitle: 'A ciência por trás do recovery: como otimizar a recuperação muscular e melhorar a performance nos treinos.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
Para quem treina em alta intensidade—seja corrida, crossfit, ciclismo ou esportes de quadra—a recuperação é tão importante quanto o treino em si. É durante o repouso que as adaptações musculares ocorrem, mas muitas vezes a tensão acumulada dificulta esse processo.

## O Papel da Fáscia

A fáscia é um tecido conjuntivo contínuo que envolve músculos, ossos e nervos, conectando o corpo da cabeça aos pés. Com treinos exaustivos, pequenos traumas levam à formação de aderências e pontos gatilho (trigger points) nessa rede miofascial. O resultado é a sensação de "músculo preso", fadiga precoce e redução da amplitude de movimento.

![Liberação Miofascial em Atleta](https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

## Benefícios da Liberação Miofascial Instrumentada e Manual

Através de pressão contínua e deslizamentos sobre o ventre muscular e a fáscia, conseguimos:

*   **Aumento da Vasodilatação:** Mais sangue no local significa mais nutrientes chegando e maior remoção de metabólitos (como o lactato).
*   **Restauração da Viscoelasticidade:** A fáscia volta a deslizar sem atritos, melhorando a força gerada pelo músculo.
*   **Prevenção:** Músculos flexíveis e sem pontos de tensão têm um risco muito menor de estiramentos ou rupturas fibrilares.

A implementação de sessões regulares de *Recovery* garante que você esteja sempre apto para o próximo treino com 100% da sua capacidade.
`
  }
];
