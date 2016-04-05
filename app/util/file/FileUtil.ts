///<reference path="../../../typings/node/node.d.ts" />
import * as fs from "fs";

export class FileUtil {

    private static listOfFileInWatch: [string, fs.FSWatcher];

    constructor() {

    }

    public static addFileToWatchList(path: string): boolean {

       // let w: fs.FSWatcher = fs.watch(path, function(event: string, fileName: string) { });



        return false;
    }

    // public static removeFileFromWatchList(path: string): boolean {

    //     let newList: [string,fs.FSWatcher];

    //     for (let entry in FileUtil.listOfFileInWatch) {
    //         if (entry != path) {
    //             newList[entry]=FileUtil.listOfFileInWatch[entry];
    //         } else {
    //             let w:fs.FSWatcher = FileUtil.listOfFileInWatch[entry];
    //         }
    //     }

    //      FileUtil.listOfFileInWatch = newList;

    //     return true;
    // }


    // public static getListOfFileInWatchList(): string[] {
    //     let newList: Array<string> = [];

    //     for (let entry in FileUtil.listOfFileInWatch) {
    //         newList.push(entry);
    //     };

    //     return newList;
    // }

}