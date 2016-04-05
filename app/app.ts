import {FileBean} from "./bean/FileBean";

class App {
    public static main(): number {

        console.log("THis is example");


        let fileBean: FileBean = new FileBean();
        fileBean.text = "omt file";

        console.log("Printing File Name :" + fileBean.text);

        return 0;
    }
}


App.main();