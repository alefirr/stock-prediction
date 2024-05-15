from flask import Flask, jsonify, request
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import yfinance as yf
import random

app = Flask(__name__)

def load_and_prepare_data(stock):
    start = "1990-01-01"
    end = pd.Timestamp.now().strftime("%Y-%m-%d")
    stock_data = yf.download(stock, start, end)
    stock_data['Tomorrow'] = stock_data['Close'].shift(-1)
    stock_data['Target'] = (stock_data['Tomorrow'] > stock_data['Close']).astype(int)
    stock_data.dropna(inplace=True)
    return stock_data


@app.route('/predict', methods=['POST'])
def predict():
    stock_ticker = request.json.get('stock_ticker', '')
    stock_data = load_and_prepare_data(stock_ticker)
    model = RandomForestClassifier(n_estimators=100, min_samples_split=100, random_state=1)
    train = stock_data.iloc[:-110]
    test = stock_data.iloc[-110:]
    predictors = ["Close", "Volume", "Open", "High", "Low"]
    model.fit(train[predictors], train["Target"])
    predictions = model.predict(test[predictors])
    return jsonify({'predictions': predictions.tolist()})
    

if __name__ == '__main__':
   random_port = random.randint(5000, 9999)
   app.run(debug=True, port=random_port)