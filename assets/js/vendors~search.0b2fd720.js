(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,e,a){"use strict";a.r(e),e.default=[{title:"【实训笔记】《JavaScript》",path:"/posts/javascript.html",strippedContent:' ## 基本语法。    ### JavaScript概述。    1. JavaScript简介。       * JavaScript 诞生于 1995 年，主要是进行用户输入的合法性验证。     * 在 1995 年之前，Web 页面的一些验证工作都是由服务器端的语言来实现，这就要求用户输入的数据必须先通过网络传输到服务器端，服务器端进行相应的处理后，再将结果反馈给客户端。    2. JavaScript概念和执行原理。       * JavaScript 是一种轻型的、解释性的脚本语言，是一种由浏览器内的解释器执行的程序语言。     * 当客户端向服务器端请求页面时，服务器端将整个页面包含 JavaScript 的脚本代码发送到客户端，浏览器从上往下逐行读取并解析其中的 HTML 或脚本代码。    3. JavaScript脚本代码位置。       * 通常可以在 3 个地方编写 JavaScript 的脚本代码：         * script标签中直接编写脚本程序代码。       * 脚本程序代码放置在一个单独的文件中，然后在网页文件中引用这个脚本程序文件。、       * 将脚本程序代码作为某个 HTML 页面元素的事件属性值或超链接的 href 属性值。             ### JavaScript核心语法。    1. 变量。       * 变量有三种使用方式：       - 先声明再赋值   如：var  message; message="hi";       - 同时声明和赋值变量   如：var  message="hi";       - 不声明直接赋值   如：message="hi";     * 变量命名规则：       * 第一个字符必须是一个字母、下划线（_）或一个美元符号（$）。       * 其他字符可以是字母、下划线、美元符号或数字。       * 区分大小写。       * 不能与关键字同名，如 while、for 和 if 等。    2. 数据类型。       * JavaScript 中有 5 种简单数据类型，也称为基本数据类型：         *  undefined       *  null       *  boolean       *  number       *  string       * 另外还有一种复杂数据类型——object对象类型。       * 由于JavaScript中的变量是弱类型，可通过typeof操作符获取变量的数据类型         | **数据类型**  | **数据值**                                      | typeof    |       | ------------- | ----------------------------------------------- | --------- |       | number类型    | 浮点数、整数                                    | number    |       | boolean类型   | true、false                                     | boolean   |       | string类型    | 单引号或双引号引起来的若干字符                  | string    |       | null类型      | 只存在一个值null，表示对象不存在                | object    |       | undefined类型 | 只存在一个值undefined，表示未赋值或未声明的变量 | undefined |    3. JavaScript注释。       * JavaScript 与很多语言一样，如 Java、C# 都支持同样的注释形式：       *  单行注释：//。       *  多行注释：  /* 注释内容 */     ### 顺序结构和选择结构。    1. 顺序结构。     * 顺序结构，顾名思义就是程序按照语句出现的先后顺序依次执行。  2. 选择结构。     * 顺序结构，顾名思义就是程序按照语句出现的先后顺序依次执行。     * JavaScript中选择结构使用if语句和switch语句。     * if 语句有 3 种形式：单分支、双分支和多分支。    ### 循环结构。    1. while循环语句。       ![alt 图片1.png](C:\\Users\\xiaohaogege\\Desktop\\vuepress\\vuepress-theme-indigo-material\\img\\图片1.png)    2. do-while循环语句。       ![img](C:\\Users\\xiaohaogege\\Desktop\\vuepress\\vuepress-theme-indigo-material\\img\\图片2.png)    3. for循环语句。       ![img](C:\\Users\\xiaohaogege\\Desktop\\vuepress\\vuepress-theme-indigo-material\\img\\图片3.png)    4. break语句和continue语句。s       * JavaScript跳转语句：break语句和continue语句。     * break语句用于中断循环。     * continue语句用于跳过本次循环要执行的剩余语句，然后开始下一次循环。    ## javascript函数事件。    ### JavaScript自定义函数。    1. 函数的定义和调用。     * 函数的定义。       * 函数就是为了完成程序中的某些特定功能而进行专门定义的一段程序代码。       * 函数包括自定义函数和系统函数。       * 使用函数可以实现特定的功能，在使用函数前必须对函数进行定义，代码放置在 script标签之间     * 函数的调用。       * 函数是不会自动执行的，调用一个函数的方法是使用函数名称，并且在函数名后用括号包含所需要传入的参数值。       * 调用函数的语句也需要放置在script标签里。  2. 匿名函数。     * 匿名函数就是没有名字的函数，也被称为拉姆达函数，是一种使用 JavaScript 函数的强大方式。  3. 变量的作用域。     * 变量的作用域主要分为全局变量和局部变量两种。     * 全局变量是在函数体外部声明的，可以在任何地方，包括函数的内部使用。     * 局部变量是在函数体内声明的，只能在函数体内使用。局部变量随着函数的结束而消失。    ### JavaScript系统函数。    1. parselnt()函数。     * parseInt函数将字符串转换为整数。它从字符串的开头开始解析，在第一个非整数位置停止解析并返回前面读到的所有整数。如果字符串不是以整数开头，将返回NaN(Not a Number：非数字值)  2. parseFloat()函数。     * parseFloat()函数和parseInt()函数类似，只不过它是返回一个浮点数  3. isNaN()函数。     * isNaN() 函数用于判断参数是否是NaN（不是数字）。如果是 NaN， 那么 isNaN 函数返回 true ，否则返回 false  4. eval()函数。     * eval() 函数运行是以字符串形式表示的 JavaScript 代码串，并返回执行代码串后的结果    ### JavaScript事件。    1. 事件     * JavaScript 是基于对象、采用事件驱动的脚本语言       * 事件：用户使用鼠标或键盘在浏览器窗口或页面元素上执行的操作       * 事件源：产生事件的元素       * 事件处理程序：对事件进行处理的程序或函数       * 事件驱动：将一段程序代码与某个事件源上发生的事件进行绑定，当触发此事件，浏览器就会自动执行与之绑定的程序代码  2. 事件与处理程序的绑定     * 在JavaScript 中，有两种方式将对象事件与处理程序代码进行绑定：       * 在事件源对象所对应的 HTML 页面标签上增加一个要处理的事件属性，让事件属性值等于处理该事件的函数名或程序代码       * 可以直接在 JavaScript 代码中设置元素对象的事件属性，让事件属性值等于处理该事件的函数名或程序代码    ### JavaScript的常用事件。    1. 鼠标事件     * onclick 事件：鼠标单击页面元素时触发的事件     * onmouseover 事件和 onmouseout 事件：鼠标移入、移出页面元素时触发的事件     * onmousemove 事件：鼠标指针移动时发生的事件  2. 其他事件     * onload 事件：页面加载完成后立即发生     * onblur 事件：光标或者焦点离开元素后触发的事件     * onchange事件：输入框的值发生了变化或者改变下拉列表框的选项时会触发的事件  3. 表单事件     * 单击表单元素的“提交按钮”会触发form标签的 onsubmit 事件，浏览器对这个事件的默认处理方式是提交数据给 action 属性指定的页面进行处理     * 如果要阻止提交数据到指定的页面，就需要编写一个事件处理程序来改变浏览器对form标签的 onsubmit 事件的默认处理方式    ## JavaScript浏览对象模型。    ### 浏览对象模型    1. BOM 是浏览器对象模型的简称。JavaScript 将整个浏览器窗口按照实现的功能不同拆分成若干个对象       ![](C:\\Users\\xiaohaogege\\Desktop\\vuepress\\vuepress-theme-indigo-material\\img\\图片4.png)    2. 一个完整的 BOM 主要包括 window 对象、history 对象、location 对象和 document 对象等    ### window对象    1. window对象       * window 对象处于对象模型的第一层，对于每个打开的窗口系统都会自动将其定义为 window 对象。       * window 对象常用属性：         | **属性** | 含义                               |       | -------- | ---------------------------------- |       | document | 窗口中当前显示的文档对象           |       | history  | history 对象保存窗口最近加载的 URL |       | location | 当前窗口的 URL                     |       | status   | 状态栏文本                         |                * window 对象的常用方法:         | **方法**      | 说明                                             |       | ------------- | ------------------------------------------------ |       | prompt        | 显示可提示用户输入的对话框                       |       | alert         | 显示带有一个提示消息和一个确定按钮的警示框       |       | alert         | 显示带有一个提示消息和一个确定按钮的警示框       |       | close         | 关闭浏览器窗口                                   |       | open          | 打开一个新的浏览器窗口，加载给定URL所指定的文档  |       | setTimeout    | 在设定的毫秒数后调用函数或计算表达式             |       | setInterval   | 按照设定的周期（以毫秒计）来重复调用函数或表达式 |       | clearInterval | 取消重复设置，与setInterval对应                  |    ### history对象和location对象    1. history对象       * history对象保存了当前浏览器窗口中打开页面的一个历史记录列表，使用 history对象可以将当前浏览器页面跳转到某个曾经打开过的页面    2. location对象       * location对象用于管理当前打开窗口的URL信息，相当于浏览器的地址栏         | **名称**      | 描述                                         |       | ------------- | -------------------------------------------- |       | href 属性     | 返回或设置当前页面的 URL                     |       | hostname 属性 | 返回 Web 主机的域名                          |       | pathname 属性 | 返回当前页面的路径和文件名                   |       | port 属性     | 返回 Web 主机的端口（80 或 443）             |       | protocol 属性 | 返回所使用的 Web 协议（http:// 或 https://） |       | reload() 方法 | 重新加载当前页面，相对于浏览器的刷新按钮     |       | assign() 方法 | 加载新的文档                                 |    ### screen对象和navigator对象    1. screen对象       * window.screen 对象包含了用户屏幕的相关信息，在编写时可以不使用 window前缀         | **属性**    | 描述                                            |       | ----------- | ----------------------------------------------- |       | availWidth  | 返回显示屏幕的可用宽度（除 Windows 任务栏之外） |       | availHeight | 返回显示屏幕的可用高度（除 Windows 任务栏之外） |       | colorDepth  | 返回目标设备或缓冲器上的调色板的比特深度        |       | pixelDepth  | 返回显示屏幕的颜色分辨率（比特每像素）          |       | width       | 返回显示器屏幕的宽度                            |       | height      | 返回显示器屏幕的高度                            |    2. navigator对象       * navigator对象包含了浏览器的有关信息       * navigator 对象的实例是唯一的，可以用 window 对象的 navigator 属性来引用它         | **方法**       | 描述                                                         |       | -------------- | ------------------------------------------------------------ |       | javaEnabled()  | 规定浏览器是否启用 Java                                      |       | taintEnabled() | 规定浏览器是否启用数据污点，仅适用于 IE 浏览器（Data Tainting） |       * navigator对象的常用属性如下：         | **属性**        | 描述                                         |       | --------------- | -------------------------------------------- |       | appCodeName     | 返回浏览器的代号                             |       | appMinorVersion | 返回浏览器的次级版本                         |       | appName         | 返回浏览器的名称                             |       | appVersion      | 返回浏览器的平台和版本信息                   |       | browserLanguage | 返回当前浏览器的语言                         |       | cookieEnabled   | 返回浏览器中是否启用 cookie 的布尔值         |       | cpuClass        | 返回浏览器系统的 CPU 等级                    |       | onLine          | 返回系统是否处于联机模式的布尔值             |       | platform        | 返回运行浏览器的操作系统平台                 |       | systemLanguage  | 返回操作系统使用的默认语言                   |       | userAgent       | 返回由客户机发送服务器的 user-agent 头部的值 |       | userLanguage    | 返回操作系统的自然语言设置                   |       * 由于 navigator 会误导浏览器检测，所以可以使用对象检测来嗅探不同的浏览器。但不同的浏览器支持不同的对象，因此对于不同的浏览器，要使用不同的对象来检测         | **集合**  | 描述                                                         |       | --------- | ------------------------------------------------------------ |       |           | 返回对文档中所有嵌入式对象的引用                             |       | plugins[] | 该集合是一个 plugin 对象的数组，其中的元素代表浏览器已经安装的插件。plugin对象提供的是有关插件的信息，其中包括它所支持的 MIME 类型的列表 |       |           | 虽然 plugins[ ] 数组是由 IE4 定义的，但是在 IE4 中它却总是空的，因为 IE4 不支持插件和 plugin 对象 |    ## JavaScript文档对象模型。    ### 文档对象模型简介及属性    1. 文档对象模型概述       * DOM（Document Object Model）是文档对象模型的简称       * DOM 把HTML 文档看成由元素、属性和文本组成的一棵倒立的树         ![](C:\\Users\\xiaohaogege\\Desktop\\vuepress\\vuepress-theme-indigo-material\\img\\图片5.png)       * 可以把HTML 文档中的每个成分看成一个节点，所以DOM 的核心操作是查看节点、创建节点、增加节点、删除节点以及替换节点。节点的特点如下:         * 整个文档是一个文档节点       * 每个HTML 标签是一个元素节点       * 包含在HTML 元素中的文本是文本节点       * 每个HTML 属性是一个属性节点       * 注释属于注释节点       * HTML 文档中的节点彼此间都存在关系，类似一张家族图谱    2. document 对象的常用属性       * 整个HTML 文档在DOM 中是一个document 对象，常用属性如下表：         | **属性** | 含义           |       | -------- | -------------- |       | bgColor  | 页面的背景颜色 |       | fgColor  | 文本的前景颜色 |       | title    | 页面标题       |    ### document 对象查找 HTML 元素    1. 通过 id 查找 HTML 元素     * 使用 document.getElementById(id) 方法可以通过 id 获取 HTML 页面的元素。  2. 通过 name 查找 HTML 元素     * 使用 document.getElementsByName(name) 方法可以通过name获取页面元素。     * 参数 name 为必选项，为字符串类型。     * 返回值为数组对象，如果无符合条件的对象，则返回空数组。  3. 通过标签名查找 HTML 元素     * 使用 document.getElementsByTagName(tagname) 方法可以通过标签名访问页面元素。     * 参数 tagname 为必选项，为字符串类型。     * 返回值是指定标签名的对象的集合，如果无符合条件的对象，则返回空数组。  4. 通过类名查找 HTML 元素     * 使用 document.getElementsByClassName(classname) 方法可以通过类名访问页面元素。     * 参数 classname为必选项，是字符串类型，指需要获取的元素类名。     * 返回值为NodeList 对象，表示指定类名的元素集合。可通过节点列表中的节点索引号来访问列表中的节点。    ### document 对象改变 HTML    1. 改变 HTML 输出流     * JavaScript 中的 document 对象能够动态地创建 HTML 内容。document.write() 方法可用于直接向 HTML 的输出流写内容  2. 改变 HTML 内容     * 修改 HTML 内容最简单的方法是使用 innerHTML 属性  3. 改变 HTML 样式     * 如果需要改变 HTML 元素的样式，可使用以下语法：document.getElementById(id).style.property= 新样式  4. 改变 HTML 属性     * 如果需要改变 HTML 元素的属性，可使用以下语法:document.getElementById(id).attribute= 新属性值    ### DOM节点操作    1. 节点信息       * 可以根据层级关系来查找节点，在 DOM 中每个节点都具有访问其他节点的属性         | **属性**        | 描述                     |       | --------------- | ------------------------ |       | parentNode      | 当前节点的父节点引用     |       | childNodes      | 当前节点的所有子节点     |       | firstChild      | 当前节点的第一个子节点   |       | lastChild       | 当前节点的最后一个子节点 |       | previousSibling | 当前节点的前一个兄弟节点 |       | nextSibling     | 当前节点的后一个兄弟节点 |    2. 动态添加和删除节点       * 添加节点：       * 使用 createElement 创建节点       * 使用 appendChild(node) 方法将指定的节点追加到现有节点的末尾     * 删除节点：       * 使用 removeChild 删除节点    ## JavaScript对象。    ### Object 对象和 Date 对象    1. JavaScript 的内部对象       * JavaScript 提供了一些非常有用的内部对象，按使用方式可分为两种：       * 实例对象。在引用该对象的属性和方法时，必须先使用 new 关键字创建一个对象实例，然后再使用“对象实例名 . 成员”的格式来进行访问。       * 静态对象。在引用该对象的属性和方法时不需要使用 new 关键字来创建对象实例，可以直接使用“类名 . 成员”的格式来进行访问    2. Object 对象       * Object 对象提供了一种创建自定义对象的简单方式，因为它不需要开发人员定义构造函数。     * 在程序运行时可以为JavaScript 对象添加属性，因此使用 Object 对象创建出自定义对象非常简便    3. Date 对象       * 通过创建 Date 对象，可以获取本地计算机中的日期与时间。       * 初始化 Date 对象有 4 种方式，语法如下：         （1）new Date() // 当前日期和时间       （2）new Date(milliseconds) // 返回从 1970 年 1 月 1 日至今的毫秒数       （3）new Date(dateString)       （4）new Date(year, month, day, hours, minutes, seconds, milliseconds)       * Date对象的常用方法:         | **方法**          | 功能                                                       |       | ----------------- | ---------------------------------------------------------- |       | getDate()         | 返回一个月中的某一天（1 ～ 31）                            |       | getDay()          | 返回一周中的某一天（0 ～ 6），0 为周日，1 为周一，以此类推 |       | getFullYear()     | 以四位数返回年份                                           |       | getHours()        | 返回小时（0 ～ 23）                                        |       | getMilliseconds() | 返回毫秒                                                   |       | getMinutes()      | 返回分钟（0 ～ 59）                                        |       | getMonth()        | 返回月份（0 ～ 11），0 为一月，1 为二月，以此类推          |       | getSeconds()      | 返回秒数（0 ～ 59）                                        |       | getTime()         | 返回 1970 年 1 月 1 日至今的毫秒数                         |    ### Image 对象和 Math 对象    1. Image 对象       * 网页中使用图片，只需要调用 img标签，然后在 src 属性中设置图片的绝对路径或相对路径即可。     * 如果实现动画或者图像效果，则需要使用图像缓存技术，让用户对图像效果获得较好的体验，使用这种技术需要借助Image对象。    2. Math 对象       * JavaScript 中的基本数值运算符可以用来进行一些简单的数学计算，而使用Math 对象可以进行更多的高级运算，如平方根、三角函数、对数和随机数等       * 与其他对象不同，Math 不需要使用new 关键字创建对象的实例       * Math对象中常用的方法：         | **方法**                  | 功能                                              |       | ------------------------- | ------------------------------------------------- |       | Math.abs(number)          | 返回number 的绝对值                               |       | Math.ceil(number)         | 对number 向上取整，如Math.ceil(67.6) 返回值是68   |       | Math.floor(number)        | 对number 向下取整，如Math.floor (67.6) 返回值是67 |       | Math.max(number1,number2) | 返回number1 与number2 中的较大值                  |       | Math.min(number1,number2) | 返回number1 与number2 中的较小值                  |       | Math.pow(x,y)             | 返回x 的y 次幂                                    |       | Math.random()             | 返回0 和1 之间的伪随机数，可能为0，但总是小于1    |       | Math.round(number)        | 返回最接近number 的整数                           |       | Math.sqrt(number)         | number 的平方根                                   |    ### 数组与 String 对象    1. 数组       * 数组列表       * 数组列表用于表示一组数据的集合，它由一对方括号（[]）包围，列表中的每个元素用逗号分隔，数组元素可以是任意类型的数据（包括其他数组）     * Array       * JavaScript 中提供了一个名为Array 的内部对象，可用它来创建数组。通过调用Array 对象的各种方法，可以方便地对数组进行排序、删除和合并等操作。       * Array 对象创建数组常用的3种方式：（1）var arr=new Array()      //数组初始元素个数为0         （2）var arr=new Array(4); //创建具有指定大小的Array 对象         （3）var arr=new Array(1,2,3); //用指定的元素列表去初始化Array 对象，数组的长度是设置的元素的数目    2. String 对象       * 当某字符串使用单引号或双引号标注时，可以被当作字符串对象实例进行处理，从而直接调用String 对象的属性和方法         * 常用属性：length         * 常用方法:           | **方法**      | 描述                                                         |         | ------------- | ------------------------------------------------------------ |         | charAt()      | 返回字符串对象中指定索引处的字符，索引从0 开始，如"Hello World".charAt(3)，返回字符"l" |         | indexOf()     | 返回某个子字符串在目标字符串中首次出现的位置，如"Hello World".indexOf("a")，返回-1，在目标字符串中没有子字符串"a"，故返回-1 |         | substr()      | 从指定索引位置开始截取指定长度的字符串， 如"Hello World".substr(2,3)，返回"llo"。第一个参数表示从索引为2 的字符开始截取，即"l"，第二个参数表示截取的长度 |         | substring()   | 返回指定索引范围内的字符串， 如"Hello World".substring(2,3)，返回"l"，返回索引2和3 间的字符串，并且包括索引2 对应的字符，不包括索引3 对应的字符 |         | toLowerCase() | 将字符串转化为小写                                           |         | toUpperCase() | 将字符串转化为大写，如"Hello World".toUpperCase()，返回" HELLO WORLD" |         | split()       | 返回按照指定分隔符拆分的若干子字符串数组，如var arr="hello,world".split(",");arr 是数组变量，其中第一个元素是"hello"，第二个元素是"world" |    ### 对象的创建及常用语句    1. 创建对象     * 类（class）是一个模板，模板描述了本类中所有对象共同的属性和行为     * 定义JavaScript 类，需要编写一个函数，函数名为对象的类名，在函数体中定义属性和方法，即JavaScript 中的函数也是对象  2. 对象常用语句     * with 语句：       * 在一段连续的程序代码中，在with 关键字后的小括号中写出这个对象的名称，就可以在其后大括号里的执行语句中直接引用该对象的属性名或方法名，省略对象实例名和点（.）     * for…in 语句：       * 对某个对象的所有属性进行循环操作，它将某个对象的所有属性名称逐一赋值给一个变量，不需要事先知道对象属性的个数       * 根据索引取出每个数组元素'},{title:"【实训笔记】《CSS》",path:"/posts/css.html",strippedContent:" ## **1.**  概念及作用     ```css  Css：层叠样式表    Css作用：精确控制网页中的元素（文字 图片 音视频 超链接等）位置 颜色 大小 布局等。  ```            ## **2.** 引用方式      方式1 ：行内样式:写在HTML的开始标签中，只对当前标签起作用。         <p style=”color:blue;font-size:50px;font-family:宋体”></p>   说明：style：样式，color：文字颜色，font-size：字体大小，font-family:字体      方式2  ：内嵌式：在head标签中，当前页面中都可以用。    ```css      <style>      P{    Color:blue    Font-size:30px    Font-family:宋体    }     </style>  ```        方式3 ：外链样式，写在外部 css文件中，当前项目中的所有页面都可以用。         先在项目文件夹中创建名为：css的子文件夹      【ctrl+N】，【ctrl+s】。命名为：style.css，保存在css文件夹中。     在style.css中输入    ```css   P{    Color:blue    Font-size:30px    Font-family:宋体    }  ```             输入link按回车链接css      三种方式的应用范围不同。     ##  修饰文字：     ## 1. 文字颜色     ```css  Color：red   颜色名表示法    Color：#f00；  十六进制表示法（0-9 a-f）web常用    Color：rgb（255,0,0）；  reb表示法    Color：rgba（255,0,0,1）； rgba表示法，多设置透明度（0-1）  ```            ## 2. 文字字体     ```css  Font-family：“微软雅黑”；  ```            ## 3. 文字大小    ```css  Font-size：20px；单位一般为px像素  ```            ## **4.** 文字粗细    ```css  font-weight：bold；    //加粗    Font-weight：normal；   //去除加粗  ```            ## **5.** 行高    ```css  Line-height：1.5；     1.5倍行高，用于段落文字    Line-height：20px；    固定行高，用于一行文字  ```            ## **6.** 首行缩进    ```css  Text—indent：2em；  ```            ## **7.** 文字对齐    ```css  Text—align：center；      center水平居中 left：左  right：右  ```            ## **8.** 文本修饰    ```css  Text-decoration：none     去下划线    Text-decoration：underline    加下划线    Text-decoration：line-through；  加删除线  ```            #  选择器     ## **1.** 基本选择器    **1.** 标签选择器：主要用于重置默认样式（共同的样式）    例如 p{  }  body{  }   h1{  }    **2.** 类选择器：可以多次使用，且一个标签可以使用多个类。    .txt1{ }  .与HTML中的class对应    注意命名规范：不能以中文命名，不能以数字开头。         **3.** ID选择器：一个页面只能使用一次。    \\#wz1{  }  与HTML中的id对应    ## **2.** 高级选择器    \\1. 后代选择器  div p{  }    div中的p    .box1 p{ }  表示class名为box1中的p标签。    \\2. 子选择器     .box 1>p{ }  表示class名为box1中的子元素    ## **3.** 优先级    ！Important>行内样式>ID>类>标签    ```css      <style>      P{     Color: red !important;    }    .txt1{    Color:green;    }    \\#wz1{    Color:blue;    }    \\#wz2{    Color:blue;    }   ```        #  美化盒子或图片     ```css  \\1. width：宽    \\2. Height：高    \\3. Margin：0  auto； 让盒子居中    \\4. Background：背景    Background：red url（`img/1.jpg`） no-repeat  10px  20px;/颜色  背景图路径  是否重复  水平位置  垂直位置     说明：是否重复：repeat  默认的  x与y都重复    ​         Repeat - x:x    方向重复    Repeat - y:y    方向重复    No - repeat    不重复    位置：第一个表示水平  （left/center/right）       第二个表示垂直  （top/center/bottom）    背景图的路径：url(../img/1.jpg)一般用于外部css中    背景中各个属性与顺序无关    经验总结    Img插入图片和background中添加背景的区别    A. img可以右击另存为图片，background不能    B. Img可以成开盒子，background不能    C. Img中可以添加alt属性，添加关键字，background不能    D. Background可以设置图片重复    \\5. Border:边框    Border：solid  10px  #000；/四周相同/    Border-left:solid  10px  #000; /左/    Border-right:solid  10px  #000; /右/    Border-top:solid  10px  #000; /上/    Border-bottom:solid  10px  #000; /下/    说明：solid：实线  dashed：虚线   dotted：点划线    .Box2{    Width：0px；    Height：0px；    border-left：solid  5px  transparent；    border-right：solid  5px  transparent；    Border-top：solid   5px  orange；    Border-bottom：solid  5px  transparent；    }  ```        "},{title:"【实训笔记】《HTML》",path:"/posts/html.html",strippedContent:' ## 创建项目文件夹及文件     2.1 创建项目文件夹，命名“个人简历”，并在其中创建子文件夹，命名为images或img，用于存放图片。           2.2 将项目文件夹拖入sublime中。           2.3 按【Ctrl+N】创建文件后，按【Ctrl+s】保存，并命名为“index.html”。           2.4 输入html5按回车。           2.5 输入h1-h6添加标题，输入p添加2段落文字，hr水平线。     #      ## **1.** 插入图片：    ```html  <img src=”images/2.jpg”>  ```            说明：src：表示图像的来源或路径    ../   表示返回上一级目录    ../img 表示返回上一级目录中的img    ## **2.** 插入超链接：     ```html  <a href="images/2.jpg" target="_blank">      图片    </a>    <a href=”images/2.jpg”target=”_blank”>       <img src=”images/3.jpg”>    </a>     说明：href：表示跳转目标地址       _self：默认的，在原窗口打开    _blank：在新窗口打开  ```                              ## **3.** 插入锚记链接-页面内跳转          说明：#：表示空链接     \\#win：表示跳转到页面中id为win的位置    ## **4.** 列表     ```html  \x3c!--无序列表 --\x3e    <ul>      <li>苹果<li>    <li>梨<li>    <ul>          \x3c!--有序列表 --\x3e    <ol>      <li>html</li>    <li>css</li>    </ol>  ```    '},{title:"【实训笔记】《权威指南》",path:"/posts/five.html",strippedContent:" # 实训第五天    ​           1.在文件夹vue press中找到posts文件夹    ​           2.找到posts文件夹后在里面创建一个文本文档后缀名必须是md    ​           3.在md文本文档中输入：    ​            title: （标题）    ​            date: （时间，日期）    ​            ags:  [标题]    ​            4.在文件夹中输入cmd，cmd中输入npm run dev    ​            5.复制链接在浏览器中打开    ​            6.在百度上输入github进入官网找到克隆或下载复制链接    ​            7.在软件中修改第一行 前面加一个#，然后把后两行代码删除，在修改链接    ​            8.在文件夹cmd输入 npm run build ,完成    ​            9.双击文件夹中 deploy.sh    ​          10.打开github官网看是否上传成功"},{title:"【实训笔记】《权威指南》",path:"/posts/four.html",strippedContent:" #  实训第四天    ​        1.桌面创建一个文件夹命名为vue press    ​        2.进入后点右件git bash here    ​        3.百度 liujiaozhu666GitHub.io    ​        4.找到 indigo material点击    ​        5.找到使用模板分支   复制下载分支的命令    ​        6.出来一个文件夹后进入文件夹    ​        7.进入文件夹后 点击init.sh    ​        8.再次运行在文件夹输入cmd在里面输入 npm run dev    ​        9.如果代码出错删除no什么，在次点击cmd在他里面输入cnpm 空格 i    ​       10.完成后复制网站名称，在网页打开他    ​       11.将文件夹拖到软件中开始编辑"},{title:"【实训笔记】《权威指南》",path:"/posts/three.html",strippedContent:" #  实训第三天    ​            1.c盘 输入cmd    ​            2.在里面输入npm -v    ​            3.打开淘宝nom镜像 找到使用说明npm install -g cnpm --registry=https://registry.npm.taobao.org    ​            4.刷出来以后 打cnpm -v    ​            5.在输入一个 cnpm install -g @vue/cli    ​            6.输入一个 vue -V    ​            7.输入一个 cnpm i -g vuepress    ​            8.百度  vuepress    ​            9.创建工作文件夹 命名必须是README.md英文    ​            10.创建 文本文档 命名 md    ​            11.cmd命令打开文件夹    ​            12.输入vuepress dev .    ​            13. 粘贴网站名字 打开他就ok了。"},{title:"【实训笔记】《权威指南》",path:"/posts/two.html",strippedContent:" # 实训第二天    ​\t\t   1.安装     git    ​           2.创建一个存储库名称    ​           3.创建一个文件夹,在文件夹里面鼠标右级打开git bash here    ​           4 .输入 git clone 加 存储库名称     ​           5.输入 git status  （粘贴别人地址）    ​           6.输入 git add . （检查状态）    ​           7.输入 git commit -m'随便写什么' （提交版本库）    ​           8.输入 git push (上传)"},{title:"【实训笔记】《权威指南》",path:"/posts/one.html",strippedContent:" # 实训第一天     ​\t\t\t\t\t1.安装   node.js      ​\t\t\t\t\t2.安装   typora    ​\t\t\t\t\t3安装 jquery    ​\t\t\t\t\t4注册 github    ​\t\t\t\t\t5学习 github菜鸟教程  网站 https://www.runoob.com/git/git-tutorial.html    ​\t\t\t\t\tctrl+/   查看源码    ​\t\t\t\t\tctrl+n   新建一个文本网页    ​\t\t\t\t\t有序是  1 . 空格    ​\t\t\t\t\t无需是  *   空格    ​\t\t\t\t\t代码敲完后必须按 空格    ​\t\t\t\t\t保存文件后缀名必须是md"}]}}]);