from django.db import models

# Create your models here.
class ProductLocation(models.Model):
    ProductLocationID = models.CharField(primary_key=True, max_length=23)
    LocationId = models.CharField(max_length=15)
    ProductId = models.CharField(max_length=18)

    def __str__(self):
        return self.ProductLocationID
    
