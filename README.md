# Projeto - Analista de Desenvolvimento (TecnoApp)
Este aplicativo tem como objetivo cadastrar veículos e suas respectivas montadoras. Assim, é possível cadastrar montadoras/veículos e visualizar os cadastrados na tela. 

## Tecnologias envolvidas

Este projeto foi desenvolvido usando no

### Mobile
* [React Native](https://reactnative.dev/) Com o lema: "Learn once, write anywhere", utiliza os mesmos conceitos do React para criar interfaces nativas para dispositivos móveis. Com um código e uma linguagem é possível criar apps para Android e iOS.

* [Expo](https://expo.io/) É um framework e uma plataforma universal para aplicação React, definindo ferramentas construídas em React Native e plataformas nativas que ajudam o desenvolvedor a construir, lançar e interagir rapidamente no iOS e Android a partir do mesmo código JavaScript/TypeScript.

### Back-end

* [Node.js](https://nodejs.org/en/) é um runtime JavaScript desenvolvido com o Chrome's V8 JavaScript engine. Basicamente.

* [Docker](https://www.docker.com/) Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

* [PostgreSQL](https://www.postgresql.org/) é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.



## Instruções e funcionamento do App
*[Vídeo apresentação do aplicativo em funcionamento](https://drive.google.com/file/d/1DSVrLBmGcqHicTulhTAU1bYEOc4rfg_B/view?usp=sharing)

O aplicativo foi construído para rodar em plataformas Android. 

Abaixo será apresentado prints das telas do app seguido pelas rotas que foram feitas as requisições e um exemplo de resposta do servidor backend:

Todas as requisições e respostas foram feitas no formato de [Json](https://www.json.org/). 


### Tela Home
Esta é a tela principal do app, onde é possível acessar todas as demais telas.

![image](https://user-images.githubusercontent.com/38054943/147143421-0c127ded-f8eb-46a6-885d-5aeeebae98af.png =100x20)


### Tela Cadastrar Montadora
Nesta tela é possível criar uma nova montadora.

(https://raw.githubusercontent.com/WillRike/TecnoApp/main/ScreenShots-TecnoApp/3.jpeg)

Na requisição para cadastrar a montadora é necessário somente inserir um nome. 
```java
await api.post('/registerautomaker, { automaker_name: automaker });
```
No backend o controller verifica se já existe a montadora cadastrada, caso não, continua o processo e grava o nome no BD. 


```java
const automakerExists = await Automaker.findOne({
      where: { automaker_name: req.body.automaker_name },
    });

    if (automakerExists) {
      return res
        .status(400)
        .json({ error: 'Já existe montadora com este nome!' });
    }

    const automaker = await Automaker.create(req.body);
```

### Tela Cadastrar Veículo
Nesta tela é necessário selecionar uma montadora e inserir o nome do veículo.

(https://raw.githubusercontent.com/WillRike/TecnoApp/main/ScreenShots-TecnoApp/4.jpeg)

Na requisição para cadastrar o veículo é necessário informar o id da montadora e o nome do veículo. 
```java
await api.post('/registervehicle, {
          vehicle_name: vehicle,
          id_automaker: selectAutomaker,
        });
```
No backend o controller verifica se existe a montadora informada e se o nome do veículo já foi cadastrado, caso esteja certo, continua o processo e grava as informações no BD. 


```java
// Verifica se existe uma montadora com este ID
    const idAutomakerExists = await Automaker.findOne({
      where: { id: req.body.id_automaker },
    });

    if (!idAutomakerExists) {
      return res.status(400).json({ error: 'Não exite montadora com este ID' });
    }

    // Verifica se o veicula ja esta cadastrado
    const vehicleExists = await Vehicle.findOne({
      where: { vehicle_name: req.body.vehicle_name },
    });

    if (vehicleExists) {
      return res
        .status(400)
        .json({ error: 'Este veiculo já está cadastrado!' });
    }

    const vehicle = await Vehicle.create(req.body);
```

### Tela Listar Veículos
Nesta tela é mostrado uma tabela com todos os veículos já cadastrados.

(https://raw.githubusercontent.com/WillRike/TecnoApp/main/ScreenShots-TecnoApp/2.jpeg)

Entrando na tela listar cadastros o hook useEffect() chama a função getListVehicles, onde é carregado todos os veículos cadastrados.  
```java
async function getListVehicles() {
    try {
      const response = await api.get('/getvehicles');

      const loadVehicles = response.data.map((item) => ({
        id: item.id,
        veiculo: item.vehicle_name,
        montadora: item.automaker.automaker_name,
      }));

      setListVehicles(loadVehicles);
    } catch (err) {
      console.log(err.response.data);
      Alert.alert(err.response.data.error);
    }
  }

  useEffect(() => {
    (async () => {
      getListVehicles();
    })();
  }, []);

```
Abaixo um exemplo da resposta do backend com os dados no formato Json:


```json
[
  {
    "id": 2,
    "vehicle_name": "Fox",
    "automaker": {
      "id": 1,
      "automaker_name": "Volkswagen"
    }
  },
  {
    "id": 3,
    "vehicle_name": "HB20",
    "automaker": {
      "id": 2,
      "automaker_name": "Hyundai"
    }
  },
  {
    "id": 1,
    "vehicle_name": "Gol",
    "automaker": {
      "id": 1,
      "automaker_name": "Volkswagen"
    }
  },
  {
    "id": 4,
    "vehicle_name": "Palio",
    "automaker": {
      "id": 4,
      "automaker_name": "Fiat"
    }
  },
 ]
```

### Modelagem do Banco de Dados
Foram criadas duas tabelas para armazenar e servir os dados e a modelagem pode ser vista abaixo:

(https://raw.githubusercontent.com/WillRike/TecnoApp/main/ScreenShots-TecnoApp/modelagemBD-TecnoApp.png)

Como pode ser visto o relacionamento entre as duas tabelas é feito através do campo id da tabela “automakers” que é inserido no campo id_automaker na tabela “vehicles”.


### Fazer Download do Aplicativo
A .apk está disponível neste repositório, mas também pode ser baixada nesse link [APK TecnoApp](https://drive.google.com/file/d/1AqbYYHu7oiv0B9Ace3X3_f09jRxBqnaI/view?usp=sharing).

Obs: para que o aplicativo funcione perfeitamente é necessário que o backend esteja rodando em uma máquina local. Os arquivos e instruções de como executar o servidor na máquina local está disponível em outro repositório do GitHub. Acessar →[Servidor Backend](https://github.com/WillRike/Tecno-api)  



##Contato
Willen Rike - [Github](https://github.com/WillRike) - **will_rike@hotmail.com**
