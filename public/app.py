from flask import Flask, send_from_directory, render_template, request, redirect, url_for

comentarios = []

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', comentarios=comentarios)

@app.route('/comentarios', methods=['POST'])
def recibir_comentario():
    usuario = request.form['usuario']
    comentario = request.form['comentario']
    comentarios.append((usuario, comentario))
    return redirect(url_for('home'))

@app.route('/styles/<path:filename>')
def styles(filename):
    return send_from_directory('styles', filename)

@app.route('/script/<path:filename>')
def scripts(filename):
    return send_from_directory('script', filename)

@app.route('/assets/<path:filename>')
def assets(filename):
    return send_from_directory('assets', filename)

if __name__ == '__main__':
    print("🚀 Servidor de Retroverse corriendo en http://localhost:8000")
    app.run(host='localhost', port=8000)
