var spawn = require('child_process').spawn;
var compile = spawn('g++',  ['./env/test.cpp', '-o', './env/a.exe']);
compile.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
compile.stderr.on('data', function (data) {
    console.log(String(data));
});
compile.on('close', function (data) {
    if (data === 0) {
        var run = spawn('./env/a.exe', ['/D', './env'])
        // var run = spawn('start', ['//D',  './/env', './/env//a.exe']);
        run.stdout.on('data', function (output) {
            console.log(String(output));
        });
        run.stderr.on('data', function (output) {
            console.log(String(output));
        });
        run.on('close', function (output) {
            console.log('stdout: ' + output);
        })
    }
})