from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# URL of the Ryu controller running the load balancer
RYU_BASE_URL = 'http://localhost:8080/loadbalance'

@app.route('/loadbalance/pid', methods=['POST'])
def switch_to_pid():
    # Forward request to Ryu controller's PID endpoint
    ryu_response = requests.post(f'{RYU_BASE_URL}/pid')
    return jsonify(ryu_response.json())

@app.route('/loadbalance/roundrobin', methods=['POST'])
def switch_to_round_robin():
    # Forward request to Ryu controller's round-robin endpoint
    ryu_response = requests.post(f'{RYU_BASE_URL}/roundrobin')
    return jsonify(ryu_response.json())

@app.route('/loadbalance/weightedroundrobin', methods=['POST'])
def switch_to_weighted_round_robin():
    # Forward request to Ryu controller's weighted round-robin endpoint
    ryu_response = requests.post(f'{RYU_BASE_URL}/weightedroundrobin')
    return jsonify(ryu_response.json())

if __name__ == '__main__':
    app.run(debug=True)
