var exec = require('child_process').exec;
var execFile = require('child_process').execFile;
import SourceFile from './sourceFile';
import * as fs from 'fs';
import Contest from './contest';
import TestSet from './testSet';

function compileAndRun(callback: (error, stdout: string, stderr: string) => any) {
  execFile('g++', ['./env/test.cpp', '-o', './env/test.exe', '-std=c++11'], {}, function(error, stdout, stderr) {

    if (error || stderr)
        callback(error, stdout, stderr)
    
    else
      exec('test.exe', {cwd: './env/'}, function(error, stdout, stderr) {
          callback(error, stdout, stderr)
      })
  })

}


function testFile(contest: Contest, file: SourceFile, cb: (error, file: SourceFile) => any) {

    
  var testSet = contest.sets[file.div_code]

  fs.writeFile('./env/' + contest.inputFile, testSet.input.join('\n'), function(error) {
    fs.writeFile('./env/test.cpp', file.content, function(error) {

      console.log("Running for " + file.name + ' [' + file.div_code + ']')
      
          file.score = 0
      

      compileAndRun(function(error, stdout, stderr) {
        if (error) {
          console.log(error)
          cb(error, file)
        }

        else {

          file.stdout = stdout
          
          var lines = stdout.split(/\r?\n/)

          for (let i = 0; i < testSet.expectedOutput.length; i++) {
              let s = testSet.expectedOutput[i]
              let debugString = lines[i]

              if (i < lines.length) {
              
                if (s.trim() === lines[i].trim()) {
                    file.score++
                    debugString += '\t[✓]'
                }
                else 
                    debugString += '\t[X]'

                debugString += '\t' + testSet.expectedOutput[i]
                console.log(debugString)
              }
              
          }

          console.log("Score:\t" + file.score)

          cb(error, file)
        }
      })
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