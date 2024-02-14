from django.shortcuts import render

# Create your views here.
def contato(request):
    print('contato')
    
    context = {
        'title' : 'contato',
        'conteudo': 'contato',
    }
    return render(
        request,
        'contato/index.html',
        context,
    )