class Negociacao {
   //Definer atributos da classe, dentro do constructor
   constructor(data, quantidade, valor) {
      // O this é uma variável implícita que sempre apontará para a instância 
      // que está executando a operação naquele momento
      //variaveis privadas private = _ (underline)
      this._data = new Date(data.getTime())
      this._quantidade = quantidade
      this._valor = valor
      Object.freeze(this)
   }
   get volume(){
      return this._quantidade * this._valor
   }
   get data(){
      return  this._data //new Date(this._data.getTime())
   }
   get quantidade(){
      return this._quantidade
   }
   get valor(){
      return this._valor
   }
}