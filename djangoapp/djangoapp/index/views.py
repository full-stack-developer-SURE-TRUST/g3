from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import loader

# Create your views here.
def home(request):
    return render(request,'home.html')


def index(request):  
    template = loader.get_template('index.html') # getting our template  
    name = {  
        'student':'Deepak '  
    }  
    return HttpResponse(template.render(name)) 