
#  Chat

O app está separado em backend e front 

a primeira tela é a de  identificação, e so colocar seu nickname. Em seguida voce será redirecionado pala sala do chat.

Será necessário o docker e docker-compose pré instalado pra subir o mongo e o backend ja configurado.

# Front

Entre na pasta    
```
cd frontend
```

Instalar dependencias
```
npm install 
```

Rodar servidor de desenvolvimento
```
npm start
```

Será levantado em http://localhost:3000


# Backend


Rodar docker compose para subir o banco Mongo e o Backend

Entre na pasta    
```
cd backend
```
```
sudo docker-compose up -d --build
```



o Serviço será levantada em http://localhost:9000/
