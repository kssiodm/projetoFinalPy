from django.shortcuts import render

# Create your views here.
def lancamentos(request):
    print('lancamentos')
    
    context = {
        'title' : 'lancamentos',
        'ativado_news': 'active',
        'conteudo': 'lancamentos',
    }
    return render(
        request,
        'lancamentos/index.html',
        context,
    )