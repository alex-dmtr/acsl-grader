import * as recursive from 'recursive-readdir'
import * as async from 'async'
import * as fs from 'fs'
import * as checker from './checker'
import SourceFile from './sourceFile'
import Contest from './contest'
import TestSet from './testSet'

let contest : Contest = new Contest()

contest.inputFile = 'asc.in'
contest.outputFile = 'asc.out'
contest.sets.JR = new TestSet(['1', '2', '3', '4', '5'], ['1','2','3','4','5'])
contest.sets.INT = new TestSet(['11','12','13','14','15'], ['1','2','3','4','5'])
contest.sets.SR = new TestSet(['1', '2', '3', '4', '5'], ['1','2','3','4','5'])

recursive('./c2', function (err, files) {
  // Files is an array of filename 

  async.map(files, function(item, callback) {
    // console.log(item)
    fs.readFile(item, function(err, data) {

      let sourceFile = new SourceFile()

      sourceFile.file = item
      sourceFile.content = data.toString()
      fillFileData(sourceFile)

      callback(null, sourceFile)
    })
    
}
  , function(err, result: SourceFile[]) {
    testFiles(result)
  })  
});


function testFiles(files: SourceFile[]) {
  async.eachSeries(files, function(file: SourceFile, callback) {
      if (file.div_code != null)
        checker.testFile(contest, file, callback)
      else {
        file.score = 0
        callback(null, file)
      }

}, function(error) {
    console.log(files.map((x) => { return {name:x.name, score:x.score}}))
  })
}

function parseValue(content: string, field: string): string {

  var regex = new RegExp(field + ':.*', 'i')

  var regexResult = content.match(regex)
  if (regexResult == null)
    return null

  var text = regexResult[0]

  var indx = text.indexOf(':')

  return text.substr(indx+1).trim()
}

function fillFileData(sourceFile : SourceFile): void {
  var content = sourceFile.content

  sourceFile.name = parseValue(content, 'name')
  sourceFile.div_long = parseValue(content, 'division')
  if (sourceFile.div_long == null)
    sourceFile.div_code = null;
  else
  switch (sourceFile.div_long[0])
  {
    case 'J':
    sourceFile.div_code = "JR"
    break
    case 'I':
    sourceFile.div_code = "INT"
    break
    case 'S':
    sourceFile.div_code = "SR"
    break
  }

  let surname = parseValue(content, 'surname')
  if (sourceFile.name && surname)
  {
    sourceFile.name = sourceFile.name + ' ' + surname
  }
}