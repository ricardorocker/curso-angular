# Curso Angular

## 02 - Hello World!
- npm install -g @angular/cli 
- ng new <meuapp>
- ng serve
- helloWorld app.component.html

## 03 - Estrutura
Mostrado a estrutura das pastas

## 04 - Componentes
- ng generate component components/first-component
- chamada do first-component no app.component

## 05 - Dados no template(Interpolation)
- propriedas: dados impressos no template(view)
- métodos: funcionalidades exec a partir de eventos(ex. click)
- constructor: inicializar prop no component
- interpolação de string, array, obj

## 06 - CSS no angular
- global: src/style.css
- scoped: css criado junto com component

## 07 - Compartilhamento de dados @Input
- @Input: filho recebe dados do component pai
- Component pai chama <app-filho-component> e passa a prop para o input <app-filho-component [name]="userName">
- Input de string e objeto
- '!' para não inicializar prop, falar que vai receber ainda.
-  Exemplos:
  @Input() name: string = '';
  @Input() userData!: { email: string, role: string };

## 08 - Diretivas do Angular
- Diretivas comecam sempre com "NG"
- ngStyle:  <div [ngStyle]="{'font-size': size}"> Sendo que a prop size vem do controller
- ngClass: <div [ngClass]="classesTeste"> Sendo que a prop classesTeste esta definida no controller   
classesTeste= [ 'green-title', 'small-title' ];

## 09 - Renderização condicional
- *ngIf name === 'Ricardo'
- else nameNotFound
- ng-template #nameNotFound
- Exemplo:
  <div *ngIf="hasName; else nameNotFound"> {{name}} </div>
  <ng-template #nameNotFound> Nome não encontrado! </ng-template>

## 10 - Eventos no Angular
- (click)="function()"
- ngIf pela prop em controller
- function showMessage()

## 11 - Emitindo eventos: @Output
- component filho cria uma prop com output para ser enviada
    @Output() changeNumber: EventEmitter<any> = new EventEmitter;
- emite o evento changeNumber através do handleClick() 
    this.changeNumber.emit();
- component pai chama o filho e escuta o evento changeNumber 
    <app-filho-component (changeNumber)="onChangeNumber()">
- gera um numero aleatório quando o evento do filho ocorre
    onChangeNumber(): void { this.myNumber = Math.random(); }

## 12 - Renderização de listas
- *ngFor="let dog of dogs"
- ngFor de obj dogs{name, type}

## 13 - Interfaces
- Descrevem a estrutura do objeto, como ele deve se parecer
- Padronização
- Facilita a manutenção
- Exemplo: 
    export interface Usuario { 
        name: "string"; 
        age: "number"; 
    }

## 14 - Pipe operators 
- uppercase
- titlecase
- percent
- date: "fullDate"
- currency
- Exemplo:    
  <p>{{ today | date: "fullDate" }}</p>
  <p>{{ 1600 | currency }}</p>

## 15 - Two way data binding
- import FormsModule em app.module
- diretiva [(ngModel)] dentro de input
- valor do ngModel sendo uma prop
- Exemplo:
    <form>
        <input  type="text" [(ngModel)]="name"  name="name" />
    </form>
    <p>O nome é: {{ name }}</p>

## 16 - Services do Angular
- Usada para fazer requisições para APIs
- ng generate service <nome>
- importar no component e inicializar no constructor
- depois acessar os métodos do service

## 17 - Angular Router
- Criação de arquivo de rotas: 
    app.routing.module.ts
- import RouterModule e Routes
- importar em app.module
- template principal usado para criar rotas
    app.component.html
- <router-outlet> substitui os components
- routerLink na tag <a> dentro de <nav> em vez de "href"

## 18 - Requisições HTTP
- import HttpClientModule em app.module
- import HttpClient(requisição) e HtppHeaders(cabeçalho) na service
- declara a url
- inicializa http em constructor da service
- método(getAll) para fazer requisição http.get em service
- cria método em controller inicializa ele no constructor
- chama getAll dentro desse método
- faz subscribe para popular o obj vindo da request
- Exemplo:
    getAll(): Observable<Dog[]> {
        return this.http.get<Dog[]>(this.apiUrl);
    }

## 19 - Dynamic routes - selecionando dado individual
- criar rota com (path: 'list/:id') em app.routing para reconhecer o "id"
- criar link com "id" dinamico
    <a routerLink="/list/{{ obj.id }}">
- pegar id pelo params da URL com ActivatedRoute, onde route é inicializado no construtor do tipo ActivatedRoute
     this.route.snapshot.paramMap.get("id")
- getItem na service com parametro id
      getItem(id: number): Observable<Dog> {
          return this.http.get<Dog>(`${this.apiUrl}/${id}`);
      }
- subscribe obj?: Objeto atual recebe valor do obj do get
          this.listservice.getItem(id).subscribe((dog) => (this.dog = dog))

## 20 - Excluindo dados pelo Service
- criar método em service para http.delete pelo id
- criar método em controller para chamar request.delete da service
- remover obj na view, pelo filter
