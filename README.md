# API Veiculo
API para gerenciamento de Veículos

## Docmunetação
OBS.:
    O banco de dados pode ser povoado de duas maneiras:
    
    1. Através do software Isomnia. Através das rotas mencionadas abaixo e dos parametros requeridos por cada rota.
    2. Através da interface web. Desenvolvida com ReactJS, é capaz de cadastrar por meio de formularios e exibir od dados cadastrados em tela de forma organizada.

**Create**
----
  Cria novos veículos
* **URL**

  /veiculos
  
* **Method**

  `POST`
  
* **Data params**

  `{
	"vehicle" : "Integra GS 1.8",
  "brand" : "Acura",
  "year" : 2015,
  "description" : "Com velocidade máxima de km/h..."
  }`

**Index**
----
Lista todos os Veículos
* **URL**

  /veiculos
  
* **Method**

  `GET`
  
* **Data params**

  None
  
* **URL params**

  None
  
**Delete**
----
Apaga um veículo
* **URL**

  /veiculos/:id
  
* **Method**

  `DELETE`
  
* **Data params**

  None
  
* **URL params**

  id = [integer]
  
**Update**
----
Atualiza os dados do veículo
* **URL**

  /veiculos/:id
  
* **Method**

  `PUT`
  
* **Data params**

  `{
	"vehicle" : "Integra GS 1.8",
  "brand" : "Acura",
  "year" : 2015,
  "description" : "Com velocidade máxima de km/h..."
  }`
  
* **URL params**

  id = [integer]
  
**Sold**
----
Atualiza o status de vendido do veículo
* **URL**

  /veiculos/:id
  
* **Method**

  `PATCH`
  
* **Data params**

  `{
	"sold" : true,
  }`
  
* **URL params**

  id = [integer]
  
**Detail**
----
Lista apenas um Veículos
* **URL**

  /veiculos/:id
  
* **Method**

  `GET`
  
* **Data params**

  None
  
* **URL params**

  id=[integer]
  
**Find**
----
Busca a partir do nome e marca os dados do veículos
* **URL**

  /veiculos/find
  
* **Method**

  `GET`
  
* **Data params**
  None
  
* **URL params**

  Query param -> q = [string]
  
