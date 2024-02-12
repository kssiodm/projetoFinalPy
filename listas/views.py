from django.shortcuts import render

# Create your views here.
def listas(request):
    print('listas')
    
    context = {
        'title' : 'listas',
        'ativado_list': 'active',
        'conteudo': 'listas',
    }
    return render(
        request,
        'listas/index.html',
        context,
    )