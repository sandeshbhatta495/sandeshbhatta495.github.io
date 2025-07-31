from flask import Flask, render_template, request, jsonify, url_for, send_from_directory
import os

app = Flask(__name__, static_url_path='/static')

# Ensure the static folder exists
static_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
if not os.path.exists(static_folder):
    os.makedirs(static_folder)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        # Here you can add code to handle the contact form submission
        # For now, we'll just return a success message
        return jsonify({"status": "success", "message": "Message sent successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
