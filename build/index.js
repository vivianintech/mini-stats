"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// The first way to read and parse data in the csv file
// If it is put in this index.ts, it is hard coding 
// so it's not recommended in the context of this project
// The below code will be placed in CsvFileReader.ts so it can be reused
// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// }).split('\n')
// .map((row: string): string[] => {
//   return row.split(',')
// });
// The second way to read and parse data in the csv file is through the CsvFileReader
// const reader = new MatchReader('football.csv');
// reader.read();
// console.log(reader.data[0]);
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D'
// };
// The third way: create an object that satisfy the 'DataReader' interface
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// matchReader.matches
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// );
var summary = Summary_1.Summary.winsAnlysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
// let ManUnitedWins = 0;
// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     ManUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     ManUnitedWins++;
//   }
// }
// console.log(`Man United has won ${ManUnitedWins} games`);
