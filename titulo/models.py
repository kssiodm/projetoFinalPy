from django.db import models

# Create your models here.

class Media(models.Model):
    title = models.CharField(max_length=255)
    overview = models.TextField()
    image_url = models.URLField()