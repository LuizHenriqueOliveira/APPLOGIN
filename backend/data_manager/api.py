from ninja import NinjaAPI, Router
from .models import ProductLocation
from .schemas import ProductLocationSchema, LoginSchema, TokenSchema, messageSchema, UserSchema, ErrorSchema
from ninja.security import HttpBearer, django_auth
import jwt
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate 
from datetime import datetime, timedelta

class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        # Implement your authentication logic here
        try:
            payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])
            user = User.objects.get(id=payload['user_id'])
            return user  # Placeholder for actual authentication
        except jwt.ExpiredSignatureError:
            return None
        except (jwt.InvalidTokenError, User.DoesNotExist):
            return None

#api = NinjaAPI(auth=[AuthBearer()])
#auth_router = NinjaAPI()
api = NinjaAPI(
    title="Product API", 
    version="1.0.0")
public_router = Router()
protected_router = Router(auth=AuthBearer())

@public_router.post("auth/login", response={200:TokenSchema, 401: messageSchema})
def login(request, data: LoginSchema):
    user = authenticate(username=data.username, password=data.password)
    if user is not None:
        token = create_token(user)
        return 200, {'access_token': token}
    else:
        return 401, {'message': 'Invalid credentials'}

@protected_router.get("/me", response={200: UserSchema, 401: ErrorSchema, 404: ErrorSchema})
def get_current_user(request):
    """
    Retorna os dados do usuário autenticado
    """
    # O usuário autenticado está disponível em request.auth
    user = request.auth
    
    if not user:
        return 401, {"message": "Token inválido ou expirado"}
    
    if not user.is_active:
        return 401, {"message": "Usuário inativo"}
    
    return 200, user


@protected_router.get("/product-locations", response=list[ProductLocationSchema])
def get_product_locations(request):
    product_locations = ProductLocation.objects.all()
    return product_locations

@protected_router.post("/product-locations", response=ProductLocationSchema)
def create_product_location(request, data: ProductLocationSchema):
    product_location = ProductLocation.objects.create(**data.dict())
    return product_location

def create_token(user):
    exp = datetime.now() + timedelta(seconds=settings.JWT_EXP_DELTA_SECONDS)
    payload = {
        'user_id': user.id,
        'exp': exp,
        # Add more fields as necessary, e.g., expiration
    }
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)
    return token

# ========== REGISTRA OS ROUTERS NA API ==========
# Endpoints públicos
api.add_router("/", public_router)
# Endpoints protegidos (prefixo opcional)
api.add_router("/", protected_router)