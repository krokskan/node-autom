console.log('in:', msg)
let perc = global.get('percentage')
let results = global.get('results')
let entity = {};
let comp = 0;
if (typeof results == "undefined" || results.length == 0 || results.length > 5) {
    results = []
}
if(msg.type == 'test') {
    comp = 100/5
}
if (parseInt(perc) >= 0 && parseInt(perc) < 100) {
    perc += comp;
    results.push({test_start: msg.test_start, test_end: msg.test_end, test_name: msg.test_name, test_id: msg.test_id, test_result: msg.test_result})
} else {
    perc = comp;
}
console.log(entity)
global.set('percentage', perc)
global.set('results', results)

msg.payload = global.get('percentage')
return msg;