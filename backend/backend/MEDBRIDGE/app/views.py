from django.shortcuts import render, redirect
from .models import Patient

def BASE(request):
    return render(request,'project.html')

def ADD_PATIENT(request):
    if request.method == "POST":
        name= request.POST.get('name')
        email=request.POST.get('email')
        date=request.POST.get('date')
        time=request.POST.get('time')
        doctor=request.POST.get('doctor')

        patient_instance = Patient(name=name, email=email, date=date, time=time,doctor=doctor)
        patient_instance.save()

        return render(request, 'final.html', context={"name":name,"email":email,"date":date,"time":time,"doctor":doctor})