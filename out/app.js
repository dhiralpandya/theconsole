"use strict";
const FileBean_1 = require("./bean/FileBean");
class App {
    static main() {
        console.log("THis is example");
        let fileBean = new FileBean_1.FileBean();
        fileBean.text = "omt file";
        console.log("Printing File Name :" + fileBean.text);
        return 0;
    }
}
App.main();
//# sourceMappingURL=app.js.map