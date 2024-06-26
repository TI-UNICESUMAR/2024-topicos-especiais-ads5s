- **_FROM_**: Especifica a imagem base a partir da qual a nova imagem será construída;
- **_WORKDIR_**: Define o diretório de trabalho dentro do container;
- **_RUN_**: Executa um comando no momento de construção da imagem;
- **_ENV_**: Define variáveis de ambiente que estarão disponíveis durante a construção da imagem e a execução do container;
- **_COPY_**: Copia arquivos ou diretórios do sistema de arquivos do host para o sistema de arquivos do container;
- **_ADD_**: Copia arquivos ou diretórios do sistema de arquivos do host para o sistema de arquivos do container, além de permitir a descompactação de arquivos .tar;
- **_EXPOSE_**: Documenta a porta que o container irá expor em tempo de execução;
- **_VOLUME_**: Cria um ponto de montagem para volumes no container;
- **_CMD_**: Define o comando padrão que será executado quando um container é iniciado a partir da imagem;
- **_ENTRYPOINT_**: Define o comando que sempre será executado quando o container iniciar, permitindo que CMD adicione argumentos ao comando;
- **_LABEL_**: Adiciona metadados à imagem na forma de pares chave-valor;
- **_ARG_**: Define variáveis de build-time que podem ser passadas durante a construção da imagem com --build-arg;
- **_HEALTHCHECK_**: Define um comando para verificar a saúde do container;
- **_ONBUILD_**: Define instruções que serão executadas quando uma imagem que usa esta imagem como base for construída.
