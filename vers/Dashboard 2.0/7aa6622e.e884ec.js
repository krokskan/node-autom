let results = global.get('results')
if(results.length > 5) {
    results.splie(0, 5);
}
msg.payload = results

return msg;