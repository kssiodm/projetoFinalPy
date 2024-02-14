from django.shortcuts import render

# Create your views here.
def faq(request):
    print('faq')
    
    context = {
        'title' : 'faq',
        'conteudo': 'faq',
    }
    return render(
        request,
        'faq/index.html',
        context,
    )