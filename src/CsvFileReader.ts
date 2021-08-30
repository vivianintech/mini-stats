import fs from 'fs';
// import { dateStringtoDate } from './Utils';
// import { MatchResult } from './MatchResults';

// type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  // data: MatchData[]=[];
  data: string[][] = [];
  
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',')
        }
      );
    };
}