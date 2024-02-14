from django.shortcuts import render

# Create your views here.
def cadastro(request):
    print('cadastro')
    
    context = {
        'title' : 'cadastro',
        'conteudo': 'cadastro',
    }
    return render(
        request,
        'cadastro/index.html',
        context,
    )