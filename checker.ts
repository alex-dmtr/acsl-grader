var exec = require('child_process').exec
var execFile = require('child_process').execFile
import SourceFile from './sourceFile'
import * as fs from 'fs'

function compileAndRun(callback: (error, stdout: string, stderr: string) => any) {
  execFile('g++', ['./env/test.cpp', '-o', './env/test.exe'], {}, function(error, stdout, stderr) {

    if (error || stderr)
        callback(error, stdout, stderr)

    exec('test.exe', {cwd: './env/'}, function(error, stdout, stderr) {
        callback(error, stdout, stderr)
    })
  })

}


function testFile(file: SourceFile, cb: (error, file: SourceFile) => any) {
  fs.writeFile('./env/test.cpp', file.content, function(error) {

    console.log("Running for " + file.name)
    compileAndRun(function(error, stdout, stderr) {
        console.log(stdout)
        file.stdout = stdout

        cb(error, file)
    })
  })
}

export { testFile }


//   execFile('./env/a.exe', function(err, stdout, stderr) {
//     // console.log(stderr)
//     console.log(stdout)
//   })


/*
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
})*/