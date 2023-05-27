/*function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = ()=>{
        console.log(this.nome + ' andou');
    }
}

const pessoa = new Pessoa('lucas', 24)

function Dom(elements){
    const nodelist = document.querySelectorAll(elements);
    console.log(nodelist);
    this.addClass = (classe)=>{
        nodelist.forEach(element=> element.classList.add(classe))
    }
    this.removeClass = (classe)=>{
        nodelist.forEach(element=> element.classList.remove(classe))
    }
}


const li = new Dom('.js-menu li')
li.addClass('peixe')

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}

const lucas = new Pessoa('Lucas', 'Silva', 24)
console.log(lucas.nomeCompleto());

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

const li = document.querySelector('.js-menu li')
li //HTMLLIElement
li.click //Function
li.innerText //String
li.value //Number
li.hidden //Boolean
li.offsetLeft // Number
li.click() // undefined

li.hidden.constructir.name // string


const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Clente',
        valor: 'R$ 39',
    },
];

let valorFinal = 0
let recebimentoFinal = 0
transacoes.forEach((v)=>{
    novoValor = +v.valor.replace('R$ ', '')   
    if(v.descricao.slice(0, 4) === 'Taxa'){
        valorFinal += novoValor
    }else if (v.descricao.slice(0, 11) == 'Recebimento'){
        recebimentoFinal += novoValor
    }
})

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'

const arrayTransportes = transportes.split(';')
//console.log(arrayTransportes);

const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produto</span></li>
                <li><span>Contato</span></li>
            </ul>`

novoHtml = html.split('span').join('a')

const frase = 'melhor do ano!'
novaFrase = frase.slice(-1)

const transacoes2 = ['Taxas do Banco', '     TAXA DO PÃO', '  taxa do mercado  ',
'depósito Bancário', 'TARIFA especial  ']

let taxaTotal = 0
transacoes2.forEach((item)=>{  
    if(item.toLowerCase().trim().slice(0, 4) === 'taxa'){
        taxaTotal++
    }
})

const numAle = Math.floor(Math.random() * (2000 - 1050 + 1) +1050)

const numeros = '4, 5, 20, 8, 9'
const arrayNum = numeros.split(', ')
const numeroMax = Math.max(...arrayNum)

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230 ', 'r$ 200']
let valorTotal = 0
listaPrecos.forEach((valo)=>{
    n = +valo.trim().toUpperCase().replace('R$', '').replace(',', '.')
    n = +n.toFixed(2)
    valorTotal += n
})
valorTotal.toLocaleString('pt-BR', {style: 'currency', currency: "BRL"})

const carros = ['gol', 'SW4', 'strada']
carros.unshift('bmw') //adiciona no inicio do array
carros.shift() // remove no inicio do array
carros.push('Kia') // adiciona no final do array
carros.pop() // remove no final do array
carros.reverse() // reverte  o array

const linguagem = ['js', 'phyton', 'js','php', 'css', 'html']
const pesq = linguagem.includes('js')

const comidas = ['Marcio', 'Frango', 'Carne', "Macarrão"]
const primeiroValor = comidas.shift()
const ultimoValor = comidas.pop()
comidas.push('Arroz')
comidas.unshift('Peixe', 'Batata')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

estudantes.sort()
estudantes.reverse()
estudantes.includes('Joana')
estudantes.includes('Juliana')


let html2 = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contatos</div>
            </section>`

html2 = html2.split('section').join('ul').split('div').join('li')

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda']

const backupCarros = carros2.slice()
carros2.pop()

const num = [10, 12, 14, 20, 16, 18]
const novnum = num.reduce((ant, atual)=>{
    return ant>atual ? ant : atual
}, 0)



const li = document.querySelectorAll('.js-menu li')

li.forEach((i,ind)=> {
    ind == 2 ? i.classList.add('lista'): ''
    ind == 3 ? i.classList.add('lista'): ''
    }  
)

const filtro = Array.prototype.filter.call(li, (item)=>{
    return item.classList.contains('lista')
})*/

//.bind é a mesma coisa que o call so que tem que ativar ela ex: filtro()

// .apply recebe um array

const h2 = document.querySelector('.js-tabcontent section')
const p = h2.querySelectorAll('p')
const somaCaracteres = Array.prototype.reduce.call(p, (acumulador, item)=>{
    return acumulador + item.innerText.length
},0)



