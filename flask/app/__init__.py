from flask import Flask
from dotenv import load_dotenv
import os
from pymongo import MongoClient
from .config import db, collection

app = Flask(__name__)

load_dotenv("flask/.env") 

mongo_user = os.getenv('mongo_user')
mongo_pass = os.getenv('mongo_pass')
mongo_url = os.getenv('mongo_url').replace('<db_password>', mongo_pass)

client = MongoClient(mongo_url)

db = client.your_database_name
collection = db.your_collection_name

@app.route('/')
def index():
    document = collection.find_one()
    return str(document)