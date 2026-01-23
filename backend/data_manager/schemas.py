from ninja import Schema
from typing import Optional
from datetime import datetime

class ProductLocationSchema(Schema):
    ProductLocationID: str
    LocationId: str
    ProductId: str

class LoginSchema(Schema):
    username: str
    password: str

class TokenSchema(Schema):
    access_token: str
    tokern_type: str = "bearer"

class messageSchema(Schema):
    message: str 

class UserSchema(Schema):
    id: int
    username: str
    email: str
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    is_active: bool
    is_staff: bool
    date_joined: Optional[datetime] = None
    # Adicione outros campos que você precisa
    
class ErrorSchema(Schema):
    message: str   