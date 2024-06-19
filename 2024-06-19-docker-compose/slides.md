### Docker Compose

O **_Docker Compose_** é uma ferramenta que permite definir e executar aplicativos Docker multi-contêineres. Ele utiliza um arquivo chamado **_docker-compose.yml_** para configurar os serviços do aplicativo.

Ele é útil para desenvolvimento, teste e produção, pois permite que você defina e execute vários contêineres com um único comando.

---

#### Exemplo de arquivo docker-compose.yml

```yaml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - '8080:80'
  db:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
```

---

No exemplo acima temos dois serviços, **_web_** e **_db_**. O serviço **_web_** utiliza a imagem **_nginx:latest_** e mapeia a porta **_8080_** do host para a porta **_80_** do contêiner. O serviço **_db_** utiliza a imagem **_mysql:latest_** e define variáveis de ambiente para o MySQL.

---

Para iniciar os serviços definidos no arquivo **_docker-compose.yml_**, basta rodar o comando:

```bash
docker-compose up
```

Para parar os serviços, basta rodar o comando:

```bash
docker-compose down
```

[Documentação Docker Compose](https://docs.docker.com/compose/reference/)
