# [Princípios SOLID em uma API REST](https://www.youtube.com/watch?v=vAV4Vy4jfkc)

## SOLID

**Single responsibility principle:**
- Cada classe/arquivo da aplicação deve ter apenas uma responsabilidade ( executar uma única tarefá dentro da aplicação ).

**Open closed principle:**
- Uma classe deve ser aberta para extensões, mas fechada para modificações.

**Liskov substitution principle:**
- Podemos substituir implementações que uma classe depende.

**Interface segregation principle:**
- Dividir um objeto em diversas interfaces.

**Dependency inversion principle:**
- As classes não devem depender de implementações, devem depender de interfaces.

**Padrão de pastas usado:** [Package by feature](https://phauer.com/2020/package-by-feature/)

---

O objetivo desse projeto é aprender um pouco sobre os princípios SOLID em uma API desenvolvida em Typescript rodando em Node.js.

**Dependências utilizadas:**
- express
- nodemailer
- uuidv4
- ts-node-dev (dev)
- typescript (dev)

_Também foi gerado um arquivo docker-compose para rodar o código_
