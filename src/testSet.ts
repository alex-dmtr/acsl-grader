export default class TestSet
{
  input: string[]

  expectedOutput: string[]

  constructor(input: string[], expectedOutput: string[]) {
    this.input = input
    this.expectedOutput = expectedOutput
  }
}