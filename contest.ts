import TestSet from './testSet'

export default class Contest
{
  inputFile: string
  outputFile: string

  sets: {
    "JR": TestSet,
    "INT": TestSet,
    "SR": TestSet
  }

  constructor() {
    this.sets = {
      "JR": null,
      "INT": null,
      "SR": null
    }
  }
}