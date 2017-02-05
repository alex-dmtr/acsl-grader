var recursive = require('recursive-readdir')
var async = require('async')
var fs = require('fs')



recursive('./c2', function (err, files) {
  // Files is an array of filename 

  async.map(files, function(item, callback) {
    // console.log(item)
    fs.readFile(item, function(err, data) {
      processFile({name: item, data}, callback)
    })
    
}
  , function(err, result) {
    console.log(result)
  })  
});

function parseValue(content, field) {

  var regex = new RegExp(field + ':.*', 'i')

  var regexResult = content.match(regex)
  if (regexResult == null)
    return null

  var text = regexResult[0]

  var indx = text.indexOf(':')

  return text.substr(indx+1).trim()
}
function processFile(file, callback) {
    var content = file.data.toString()

    var object = {
      file: file.name,
      name: parseValue(content, 'name'),
      div: parseValue(content, 'division')
    }

    callback(null, object)
}