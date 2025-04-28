from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .Services.age_culculator import calculate_age
from .Services.Date import get_current_date




# home Admin view
def HomeAdmin(request):
    template = loader.get_template('Admin/home_admin.html')
    return HttpResponse(template.render({}, request))






# Home view
def Home(request):
     
    date = get_current_date()

    context = {
        'date': date,
     }
    
    template = loader.get_template('Client/home.html')
    return HttpResponse(template.render(context, request))

# About view
def About(request):
    bith_year = 2001
    age = calculate_age(bith_year)

    context = {
        'age': age,
    }
    template = loader.get_template('Client/about.html')
    return HttpResponse(template.render(context, request))

#Resume view 
def Resume(request):
    template = loader.get_template('Client/resume.html')
    return HttpResponse(template.render({}, request))

# Contact view
def Contact(request):
    template = loader.get_template('Client/contact.html')
    return HttpResponse(template.render({}, request))

#Service view 
def Services(request):
    template = loader.get_template('Client/service.html')
    return HttpResponse(template.render({},request))

#Portfilio view 
def Portfolio(request):
    template = loader.get_template('Client/portfolio1.html')
    return HttpResponse(template.render({},request))