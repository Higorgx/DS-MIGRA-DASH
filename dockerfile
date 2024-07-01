# Use uma imagem base oficial do Node.js com a versão 14
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /src

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY ./package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY ./ .

# Exponha a porta em que a aplicação será executada
EXPOSE 8080

# Comando para rodar a aplicação em modo de desenvolvimento
CMD ["npm", "run", "serve"]