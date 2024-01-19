from django.db import models


class Patient(models.Model):
    name=models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    email=models.CharField(max_length=100)
    doctor = models.CharField(max_length=255,default='Default doctor')

    def __str__(self):
        return self.name