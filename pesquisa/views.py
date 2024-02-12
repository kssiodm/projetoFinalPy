from django.shortcuts import render

def pesquisa_view(request):
    print('pesquisa')
    search_query = request.GET.get('search', '')
    context = {
        'title' : 'pesquisa',
        'conteudo': 'pesquisa',
        'search_query': search_query,
    }
    
    # Faça o processamento necessário com a query string aqui
    
    return render(request, 'pesquisa/index.html', context, )

# Create your views here.
# def pesquisa(request):
#     print('pesquisa')
#     # search_query = request.GET.get('search', '')
    
#     context = {
#         'conteudo': 'pesquisa'
#     }
#     return render(
#         request,
#         'pesquisa/index.html',
#         context,
#     )