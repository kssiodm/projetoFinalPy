from django.shortcuts import render

# Create your views here.
def login(request):
    print('login')
    
    context = {
        'title' : 'login',
        'conteudo': 'login',
    }
    return render(
        request,
        'login/index.html',
        context,
    )