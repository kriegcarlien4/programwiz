// 创建一个名为 ProgramWiz 的类
class ProgramWiz {
    constructor(name) {
        this.name = name;
    }

    // 方法：执行程序
    run() {
        console.log(`${this.name} 正在执行程序...`);
        // 在这里编写程序执行的代码
    }

    // 方法：调试程序
    debug() {
        console.log(`${this.name} 正在调试程序...`);
        // 在这里编写调试程序的代码
    }

    // 方法：发布程序
    publish() {
        console.log(`${this.name} 正在发布程序...`);
        // 在这里编写发布程序的代码
    }
}

// 创建一个名为 myProgramWiz 的 ProgramWiz 实例
const myProgramWiz = new ProgramWiz("myProgramWiz");

// 运行程序
myProgramWiz.run();

// 调试程序
myProgramWiz.debug();

// 发布程序
myProgramWiz.publish();
