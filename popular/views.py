from django.shortcuts import render

# Create your views here.
def popular(request):
    print('popular')
    
    context = {
        'conteudo': 'popular'
    }
    return render(
        request,
        'popular/index.html',
        context,
    )