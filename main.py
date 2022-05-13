from flask import Flask, request, render_template
from werkzeug.utils import redirect
from buscar import busca_url, Salvar


app = Flask('__name__')
app.debug = True

@app.route('/')
#Vai para página principal onde se pede a url para encurtar
@app.route('/<redirecionar_url>')
#Se receber um paramentro e o mesmo estiver no BD, vai fazer o redirecionamento para url encontrada.
def redirecionar_url(redirecionar_url = 1):
    if redirecionar_url == 1:
        return render_template('index.html')
    else:
        try:
            retorno_da_url = busca_url(redirecionar_url)
            return redirect(retorno_da_url[0][0], code=301)
        except: return 'URL não encontrada'

#Aqui será guardado a URL original e o Hash gerado no processo

@app.route('/guardar/', methods=["POST", "GET"])
def guardar(): 

    url = request.form["link"]
    #Verifica se a variavel está vazia
    if not url:
        return 'Você precisa adicionar uma URL'
    
    else:

        verificar_http = url.startswith('http')
        if verificar_http:
            save = Salvar(url)

        else:
            save = Salvar(f'http://{url}')

        return render_template('exibirurl.html', url = f'http://127.0.0.1:5000/{save}')

#Lista todas as URLS já salvas no BD no navegador

@app.route('/listar/tudo/')
def listar():
    lista = busca_url(None)
    
    return render_template('exibir_urls.html', lista1 = lista)



if __name__ == '__main__':
    
    app.run(host='0.0.0.0')