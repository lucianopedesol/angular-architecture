# Angular Clean Architecture

Um modelo inicial completo: exemplo de estrutura de aplicativo sob medida para escabilidade e boas praticas de desenvolvimento com Clean Code, SOLID, Clean Architecture e Orientação a Objetose código para cada coisa comum necessária em projetos corporativos, como testes de unidade, roteamento, autenticação, extensões de serviço HTTPS, suporte a i18n com alteração dinâmica de idioma e detecção automática de idioma do usuário
 
### Estrutura do projeto

````
| - app
| | - core
| | | - domain
| | | | - [+] entity
| | | - interfaces
| | | | - [+] controllers
| | | | - [+] entity
| | | | - [+] message
| | | | - [+] repository
| | | | - [+] usecases
| | | | - [+] validations
| | | - [+] message
| | | - [+] usecases
| | | - core.module.ts
| | - data
| | | - [+] repository
| | | - data.module.ts
| | - infra
| | | - [+] auth
| | | - [+] http
| | | - [+] translations
| | | - infra.module.ts
| | - presentation
| | | - [+] base
| | | - [+] controllers
| | | - [+] pages
| | | - [+] shared
| | | - presentation.module.ts
````
 
 
