from django.shortcuts import render

# Create your views here.

def titulo(request):
    print('titulo')
    
    context = {
        'title' : 'titulo',
        'conteudo': 'titulo',
    }
    return render(
        request,
        'titulo/index.html',
        context,
    )
    
