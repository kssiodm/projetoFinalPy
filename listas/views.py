from django.shortcuts import render

# Create your views here.
def listas(request):
    print('listas')
    
    context = {
        'conteudo': 'listas'
    }
    return render(
        request,
        'listas/index.html',
        context,
    )