# Aula 02

## 🎲 Tipos de Dados

- `Number` representa um conjunto de dados numéricos positivos ou negativos, inteiros, reais ou decimais;

- `String` é a sequência de caracteres, sejam eles textuais, numericos, simbolos e afins;

- `Boolean` é uma variável que recebe um dado lógico com apenas duas possibilidades: ser verdadeiro ou falso (true or false);

- `Null` representa uma variável vazia ou nula que não armazena nada.

## 📦 Variáveis e Constantes

As variáveis tem o poder de armazenar informações inseridas em nossos códigos. A forma que escolhemos determinará se será uma variável de escopo local ou escopo global. Mas como assim?

- <b>Escopo global</b> quer dizer que uma vez declarada, essa variável estará “viva” ”durante toda a aplicação e poderá ser acessada em toda a aplicação.

- <b>Escopo local</b>, o escopo das variáveis locais é vinculado ao bloco onde elas são declaradas. Sendo assim, elas “morrem” ao final da instrução em que estão sendo executadas.

### Declarando variáveis e constantes

- `var` declara uma variável, opcionalmente, inicializando-a com um valor. [USO NÃO RECOMENDADO]

- `let` declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

- `const` declara uma constante de escopo de bloco, apenas de leitura.

🐼 🐼 🐼

`Todas as vezes que uma variável é criada com o VAR, um panda morre. Atualmente o seu uso está depreciado e não é considerado uma boa prática. Salvem os pandas, não usem VAR.`

🐼 🐼 🐼

<p align="center">
  <img width="600" src="https://miro.medium.com/max/1200/0*mYuuRwjUfUOAdHpo.jpg">
</p>

### Padrões de nomeclatura

`Iremos utilizar o camelCaseNoCurso`

<p align="center">
  <img width="400" src="https://juniortoexpert.com/wp-content/uploads/naming-convention-snake-case-kebab-case-camel-case.png">
</p>

### 🏋🏽 Bora praticar

Abra o Visual Studio

  <details>
    <summary>Declare e insira os valores nas seguintes variáveis ou constantes: Nome do país, Pontos turísticos, Capital do país, Quantidade de estados, O país é da América Latina?
    </summary>

```javascript
const nomePais = "Brasil";
let pontosTuristicos = "Pelorinho, Cristo Redentor";
const capitalPais = "Brasilia";
const quantidadeEstados = 26;
const eDaAmericaLatina = true;
```

  </details>


## Concatenação

<b>Tradicional: </b> Através do + conseguimos unir textos com variaveis.

<b>Template string: </b> Através do da crase envolvendo toda a frase, adicionando as variaveis dentro do `${}` conseguimos unir textos e variáveis.

```javascript
const nomePais = "Brasil";
const capitalPais = "Brasilia";
const quantidadeEstados = 26;

// Tradicional
console.log(
  "Eu me chamo Lisandra e moro no " +
    nomePais +
    " que tem " +
    capitalPais +
    " como capital. Aqui sou muito feliz pois tenho " +
    quantidadeEstados +
    " estados para desbravar!"
);

// Template String
console.log(
  `Eu me chamo Lisandra e moro no ${nomePais} que tem ${capitalPais} como capital. Aqui sou muito feliz pois tenho ${quantidadeEstados} estados para desbravar!`
);
```

### 🏋🏽 Bora praticar

Abra o Visual Studio

  <details>
    <summary>Crie as seguintes constantes e em seguida use a criatividade para concatená-las, formando uma frase: primeiro nome; último nome; ano de nascimento; cor preferida; hobby; um sentimento.
    </summary>
   </details>

## 🧮 Operadores Aritméticos e Lógicos

### Os operadores aritméticos são os conhecidos por nós na matemática.

```javascript
const soma = 21 + 21;
const subtracao = 21 - 21;
const multiplicacao = 21 * 21;
const divisao = 21 / 21;
```

Além dos mais comuns cidatos acima existe também o módulo da divisão que consiste no resto da divisão de dois números.

```javascript
const moduloDaDivisao = 21 % 21;
```

### Operadores de comparação e lógico

```javascript
// Comparação
const estritamenteIgual = 21 === 21;
const estritamenteDiferente = 21 !== 21;
const maiorQue = 21 > 21;
const maiorOuIgualQue = 21 >= 21;
const menorQue = 21 < 21;
const menorOuIgualQue = 21 <= 21;
// Lógicos
const and_e = estritamenteIgual && maiorQue;
const or_ou = maiorQue || estritamenteDiferente;
const not_nao = !estritamenteDiferente;
```

### 💡 Dicas

Durante o processo de aprendizagem inserir comentários ao longo do código para descrevê-lo pode ser útil para relembrar.

```javascript
// comentário de uma linha

/* isto é um comentário longo
  de múltiplas linhas.
*/
```

---

<p align="center">
  Feito com carinho, por Lis :)
</p>
