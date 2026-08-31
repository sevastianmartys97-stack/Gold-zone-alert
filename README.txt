GOLD AUTO ZONE PWA V2 / V6.4 FIX

Upload these 5 files to the ROOT of your GitHub repo and replace the old ones:
1. index.html
2. manifest.json
3. sw.js
4. icon-192.png
5. icon-512.png

What changed:
- Live price: XAUS + Biquote in parallel.
- XAUS price request uses a freshness cache-buster.
- Zone candles: Biquote OHLC first.
- If Biquote OHLC fails, app automatically uses XAUS 48h intraday data and builds H1/H4 candles itself.
- Local cached candles are only the last fallback.
- PWA/install function remains.
- Alerts/TP tracker still pause if LIVE PRICE itself is stale.

After commit:
1. Wait about 1 minute.
2. Open the GitHub Pages app.
3. Refresh once.
4. Look below CURRENT XAUUSD. It should show LIVE and the source.
