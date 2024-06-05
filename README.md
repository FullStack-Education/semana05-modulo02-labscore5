# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 05 - Módulo 02

### M2S05 | Parte 2 do LabScore - Roteiro

Roteiro:

Dando continuidade ao mini-projeto visto na semana 03, daremos continuidade com essa lista de exercícios. A semana 04 não terá sequência para essa semana, portanto, fica de aviso que as semanas 03, 05 e 06 formarão um projeto para somar no portfólio de vocês. Nesta semana, iremos dar uma interface para nossa plataforma, além de ser feita algumas modificações em funções criadas na semana 03.

Desejo uma boa semana a todos ^-^.

### M2S05 | Ex 1 - LabScore (Pt.2)

1. Para nossa primeira atividade deverá ser criada uma interface que seja parecida com o exemplo a seguir:

![AD_4nXfg4diEGxzuLOBavA2fYqB3HwQg9yS3HsyWsPJQxYi8vS3Otitg0MY4paWW5pAT2LgdgpwhW5H0AyggpNRCjo3ZF50iIdY3bAB76veBxpfJQglmkM2ODVDsdQeuCsN2j4eOYZPp7KhYne9i_VSTJwpLXSVv?key=s2BAd_hAiDuWy37yz092uA](https://lh7-us.googleusercontent.com/docsz/AD_4nXfg4diEGxzuLOBavA2fYqB3HwQg9yS3HsyWsPJQxYi8vS3Otitg0MY4paWW5pAT2LgdgpwhW5H0AyggpNRCjo3ZF50iIdY3bAB76veBxpfJQglmkM2ODVDsdQeuCsN2j4eOYZPp7KhYne9i_VSTJwpLXSVv?key=s2BAd_hAiDuWy37yz092uA)

Ela representa uma plataforma de acompanhamento de notas de um aluno em específico.

### M2S05 | Ex 2 - LabScore (Pt.2)

Assim que a página carregar, deverá ser executado o método criado na semana 3, que fazia as seguintes perguntas (exercício 05):

- Qual o nome do aluno?
- Qual a idade do aluno?
- Qual a série do aluno?
- Qual o nome da escola?
- Qual a sua matéria favorita?

Dica: Caso não tenha criado um método para esse exercício, tudo bem você executar ele no corpo do arquivo script criado.

### M2S05 | Ex 3 - LabScore (Pt.2)

Dando sequência ao exercício anterior, após preencher todas as respostas e capturá-las em diferentes variáveis, substitua os textos **“João da Silva”**, **“16 anos”**, **“2º ano do Ensino Médio”**, **“Escola Estadual Professor José”** e **“Matemática”** da interface criada no exercício 01 pelo que o usuário digitou no prompt. **A captura deverá ser feita por Id.**

### M2S05 | Ex 4 - LabScore (Pt.2)

Na interface citada no exercício 01, observe o botão com o texto “Adicionar Linha”; execute o método criado na **semana 03 - exercício 06**, seguindo o seguinte fluxo:

- Ao clicar no botão, pergunte qual a matéria deseja cadastrar.
- Após isso, perguntar as 4 notas com o laço while e montar o objeto citado no exercício 06 da semana 03.
- Além disso, envie como parâmetro da função criada no exercício 01 da semana 03 a propriedade notas para que seja calculada a média.
- Por último, adicione mais uma linha na tabela na interface produzida no primeiro exercício dessa semana.

**Dica:** Para esse último passo deve ser criado mais uma função no mesmo código javascript que os demais. Capture a tag <tbody>, e com o operador de reatribuição (+=) adicione mais uma tag <tr> com innerHTML.
Lembre-se também que dentro da tag <tr> deverá ter 6 tags <td> uma para cada coluna, sendo a última tag a média.

A ideia é que. ao finalizar a primeira parte do código. ele adicione mais uma linha na tabela com os dados cadastrados.

### M2S05 | Ex 5 - LabScore (Pt.2)

Também utilizando o **exercício 01 da semana 03,** calcule a média geral de todas as matérias cadastradas na tabela (para isso, faça uma modificação no exercício anterior para salvar todas as médias calculadas em um array de médias: utilize o .push() para adicionar); caso fique muito complexo, poderá ser criado um array fixo (ex: let array = [10,9,3,2]) para fazer esse cálculo.

### M2S05 | Ex 6 - LabScore (Pt.2)

No card/setor, onde possui o texto “**média geral do aluno**”, na interface criada no primeiro exercício, capture com **querySelector** o valor numérico da média geral do aluno (7.6 no exemplo da interface) e, assim que carregar a página de script, deverá ser atualizado esse valor pelo resultado retornado do exercício anterior, ou seja, a média geral de todas as médias.

OBS: Até o atual momento, toda vez que criar mais um registro na tabela não será necessário atualizar esse valor. Deixaremos para fazer isso mais futuramente.

### M2S05 | Ex 7 - LabScore (Pt.2)

Por último, chame a função criada no **exercício 07 da semana 3** e substitua o texto no card/setor “**Maior média entre as matérias**” pela média que retornar nessa função do exercício 07. Nele, era necessário passar um parâmetro que era um array de médias, logo, poderá ser usado ou um array fixo ou o array de médias do exercício 05 desta semana.
