class NegociacaoController {
   constructor() {

      let $ = document.querySelector.bind(document)

      this._inputData = $('#data')
      this._inputQuantidade = $('#quantidade')
      this._inputValor = $('#valor')

      this._listaNegociacoes = new ListaNegociacoes()

      this._negociacoesViews = new NegociacoesViews($('#negociacoesViews'))
      this._negociacoesViews.update(this._listaNegociacoes)

      this._mensagem = new Mensagem()
      this._mensagemView = new MensagemView($('#mensagemView'))
      this._mensagemView.update(this._mensagem)

   }

   adiciona(event) {
      event.preventDefault()

      this._listaNegociacoes.adiciona(this._criarNegociacao())
      this._negociacoesViews.update(this._listaNegociacoes)

      this._mensagem.texto = 'Negociação adicionada com sucesso'
      this._mensagemView.update(this._mensagem)

      this._limpaFormulario()
      
   }

   _criarNegociacao() {
      let data = DateHelper.textoParaData(this._inputData.value)

      return new Negociacao(
         data,
         this._inputQuantidade.value,
         this._inputValor.value
      )
   }

   _limpaFormulario() {
      this._inputData.value = ''
      this._inputQuantidade.value = ''
      this._inputValor.value = ''

      this._inputData.focus()
   }
}