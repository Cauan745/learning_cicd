Projeto de estudo focado na implementação de um pipeline de deploy automatizado utilizando GitHub Actions, Docker e uma VPS.

O objetivo foi criar um fluxo onde qualquer push na branch `main` atualiza a aplicação no servidor automaticamente, sem necessidade de acesso SSH manual.

## Como funciona o Pipeline

O workflow realiza a estratégia de deploy em 3 etapas principais:

1.  **Checkout & Transferência:** O GitHub Actions baixa o código e utiliza o `scp-action` para copiar os arquivos para a pasta `first_cicd` dentro da VPS.
2.  **Limpeza de Ambiente**: Conecta via SSH, força a remoção de containers antigos (`docker rm -f`) e mata processos que estejam ocupando as portas 3000 ou 80.
3.  **Build & Run:**
    * Constrói a imagem Docker localmente no servidor (`docker build`).
    * Sobe o novo container mapeando a porta 80 da VPS para a 3000 da aplicação.

## Tecnologias

- **GitHub Actions:** Orquestração do pipeline.
- **Docker:** Containerização da aplicação.
- **Linux (VPS):** Servidor de hospedagem.
- **Node.js:** Runtime da aplicação.

## Estrutura do Deploy

- **Dockerfile:** Configurado com imagem base `node:20`, diretório de trabalho `docker_images` e instalação de dependências via npm.
- **Workflow:** Utiliza as actions `appleboy/scp-action` para transferência de arquivos e `appleboy/ssh-action` para execução remota de scripts.

## Como testar localmente

Para rodar a aplicação sem o pipeline de deploy:

1.  Construa a imagem:
    ```bash
    docker build -t learning_docker .
    ```

2.  Rode o container:
    ```bash
    docker run -p 3000:3000 learning_docker
    ```