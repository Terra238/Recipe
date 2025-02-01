from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/process-cart", methods=["POST"])
def process_cart():
    cart_data = request.json  # Get cart data from the extension
    print("Received cart data:", cart_data)

    # Process cart data (e.g., identify ingredients using an API or database)
    processed_data = []
    for item in cart_data:
        processed_data.append({
            "name": item["name"],
            "ingredients": item["ingredients"],  # Add more processing if needed
        })

    return jsonify(processed_data)

if __name__ == "__main__":
    app.run(port=5000)
