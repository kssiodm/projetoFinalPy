from django.shortcuts import render

# Create your views here.
def pesquisa(request):
    print('pesquisa')
    # search_query = request.GET.get('search', '')
    
    context = {
        'conteudo': 'pesquisa'
    }
    return render(
        request,
        'pesquisa/index.html',
        context,
    )