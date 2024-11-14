from flask import Flask #type: ignore
from app import app


if __name__ == '__main__':
    app.run(debug=True)