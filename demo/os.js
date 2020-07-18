const os = require('os')

console.log('Operating system:', os.platform());

console.log('Processor architecture:', os.arch());

console.log('Processor inform:', os.cpus());

console.log('Free memory:', os.freemem());

console.log('Total memory:', os.totalmem());

console.log('Home directory:', os.homedir());

console.log('Time ON:', os.uptime());