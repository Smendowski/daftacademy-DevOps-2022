from datetime import date
import os

import aioredis

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import Response

from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache

from pydantic import EmailStr

from redis_om.model import HashModel, NotFoundError
from redis_om.connections import get_redis_connection

REDIS_URL = os.getenv("REDIS_URL")

origins = ["*"]


class User(HashModel):
    first_name: str
    last_name: str
    email: EmailStr
    created_at: date = date.today()

    class Meta:
        database = get_redis_connection(url=REDIS_URL, decode_responses=True)


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/users")
async def create_user(user: User):
    return user.save()


@app.get("/api/users")
async def list_users(request: Request, response: Response):
    return {"users": User.all_pks()}


@app.get("/api/users/{pk}")
@cache(expire=5)
async def get_user(pk: str, request: Request, response: Response):
    try:
        return User.get(pk)
    except NotFoundError:
        raise HTTPException(status_code=404, detail="User not found")


@app.on_event("startup")
async def startup():
    r = aioredis.from_url(REDIS_URL, encoding="utf8", decode_responses=True)
    FastAPICache.init(RedisBackend(r), prefix="fastapi-users-cache")


@app.get("/ping", status_code=200)
async def ping():
    return "PONG"
