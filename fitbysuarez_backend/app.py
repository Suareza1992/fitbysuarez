from flask import Flask, render_template #type: ignore
# from flask_sqlalchemy import SQLAlchemy
# from templates.auth import auth_blueprint #type: ignore
# from templates.views import views_blueprint #type: ignore
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['DATABASE_URI'] = os.getenv('DATABASE_URL')

@app.route("/")
def index():
    return render_template("index.html") # This renders the index.html from the templates folder.

@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("aboutme.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")

@app.route("/iniciarsesion")
def iniciarsesion():
    return render_template("iniciarsesion.html")

@app.route("/crearcuenta")
def crearcuenta():
    return render_template("crearcuenta.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")