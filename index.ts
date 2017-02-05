import * as recursive from 'recursive-readdir'
import * as async from 'async'
import * as fs from 'fs'
import * as checker from './checker'
import SourceFile from './sourceFile'


recursive('./c', function (err, files) {
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
  async.eachSeries(files, checker.testFile, function(error) {
    console.log(files)
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
  sourceFile.division = parseValue(content, 'division')
  

  let surname = parseValue(content, 'surname')
  if (sourceFile.name && surname)
  {
    sourceFile.name = sourceFile.name + ' ' + surname
  }
}