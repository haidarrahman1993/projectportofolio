from flask import Flask, render_template, request
import openai
import os


app = Flask(__name__)

# Load the API key from an environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

if openai.api_key:
    print("API key loaded successfully.")
else:
    print("API key not found. Please set the OPENAI_API_KEY environment variable.")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api", methods=["POST"])
def api():
    message = request.json.get("message")
    
    completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": message}
    ]
    )
    if completion.choices[0].message!=None:
        return completion.choices[0].message

    else :
        return 'Failed to Generate response!'
    

if __name__=='__main__':
    app.run()

