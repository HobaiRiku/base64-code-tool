# Simple tool for Base64 code
一个非常简单的base64编解码工具，为公司入门级程序员提供的工具。    
因为这个工具其实就是`Buffer.from(data).toString()`的UI版本。    
如果你有以下症状，说明这个项目还算适合的：
* 老是问：“base64怎么解密？”
* 老是问：“为什么接口不提供十六进制显示？”
* 老是问：“你的数据是不是十六进制格式的？”
* 老是问：“我的设备发的是FF EE AA 01 02...，怎么传上来的是乱码？”   

总而言之，适合暂时还分不清base64、字符串、十六进制、hex字符串、raw数据的朋友

## Usage
1. Install the nodejs
2. Run this
   ```bash
   npm i
   ```
3. And run this
   ```bash
   node index.js 2002
   ```
    > The param '2002' is http port, and you can change it  by yourself
4. Visit `http://localhost:2002` in browser, and done.
    > Not every browser can run this site, please check the supported kind and version of the browser here https://caniuse.com/#search=fetch

## Demo
http://reachnn.com:2002

## License
MIT
