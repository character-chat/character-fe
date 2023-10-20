"""ebdjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from . import chatModel
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def my_view(request):
    if request.method == 'POST':
        content = request.POST.get('content')
        question = request.POST.get('question')
        print(content)
        print(question)

        result = chatModel.main(content, question) 
        print(result)
        
        return HttpResponse(result, content_type='text/plain')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('test', my_view),
]
