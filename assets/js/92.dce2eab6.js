(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{588:function(e,a,s){"use strict";s.r(a);var t=s(6),v=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[e._v("#")]),e._v(" 准备")]),e._v(" "),s("ol",[s("li",[e._v("逍遥模拟器（因为支持xposed installer）")]),e._v(" "),s("li",[e._v("xposed install （用来支持反射大师）")]),e._v(" "),s("li",[e._v("mt管理器（免费版即可,用了签名和替换dex）")]),e._v(" "),s("li",[e._v("反射大师清羽版（用来脱出dex）")]),e._v(" "),s("li",[e._v("jadx-gui （用来查看dex的java代码）")]),e._v(" "),s("li",[e._v("安卓逆向助手（用来修复dex,反编译dex,重打包dex）")])]),e._v(" "),s("p",[e._v("使用到的工具地址")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("链接：https://pan.baidu.com/s/1d1-fazkmeDVEqg2uSQMv-g \n提取码：1332 \n复制这段内容后打开百度网盘手机App，操作更方便哦\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[e._v("#")]),e._v(" 开始")]),e._v(" "),s("p",[e._v("模拟器安装好xposed，mt,反射大师，某腾讯御安全加固的apk,打开反射大师选取apk,然后打开apk，有的软件需要多点击几个页面不然可能脱不全，反射大师选择提取dex,记下路径，打开mt管理器，提取待脱壳的apk,打开apk,修改"),s("code",[e._v("AndroidManifest.xml")]),e._v(",找到"),s("code",[e._v("application")]),e._v("节点里面的"),s("code",[e._v("android:name")]),e._v(",这里是应用的入口，御安全的是"),s("code",[e._v('android:name="MyWrapperProxyApplication"')]),e._v(",使用jadx打开apk,查看这个类的代码，可以看到定义了"),s("code",[e._v("className")]),e._v("的局部变量，这就是应用的真正入口，将"),s("code",[e._v("android:name")]),e._v("修改为这个即可。然后打开"),s("code",[e._v("安卓逆向助手")]),e._v("，选择"),s("code",[e._v("修复dex")]),e._v("(因为mt管理器会员才能修复，所以使用逆向助手来修复，必须要做否则可能无法启动应用)，然后"),s("code",[e._v("反编译dex")]),e._v("得到"),s("code",[e._v("smali")]),e._v("文件,使用jadx打开dex查看应用的逻辑，对照着修改smali的内容，修改完之后使用逆向助手重新打包dex,将dex放到模拟器的共享文件夹，使用mt管理器打开apk,删除掉原来的dex,可能有多个，那么替换过去的dex也对着修改名称，通常只有一个叫做"),s("code",[e._v("classes.dex")]),e._v("，将修改好的dex换进去，这些步骤"),s("code",[e._v("都不要签名")]),e._v(",最后退出来重新签名安装即可。")]),e._v(" "),s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[e._v("#")]),e._v(" 注意")]),e._v(" "),s("p",[e._v("步骤不难，有几个注意的点。")]),e._v(" "),s("ol",[s("li",[e._v("对于修改跳转逻辑的，不一定需要修改"),s("code",[e._v("if-nez v0, :cond_d")]),e._v("这种条件，可以直接使用"),s("code",[e._v("goto :cond_d")]),e._v("跳转过去。")]),e._v(" "),s("li",[e._v("有时候只能在第一次进入apk的时候才能提取dex。")]),e._v(" "),s("li",[e._v("对于增加逻辑的时候，如果要新建变量，尽量新建一个方法来调用，这样不会影响原来的寄存器大小，不然修改起来很麻烦。\n比如需要将广告的view去掉的时候，可以新增一个方法")]),e._v(" "),s("li",[e._v("寄存器个数+1的时候，接着v变量接着使用，因为p变量始终占据最后几个寄存器。比如有3个寄存器v0 p0 p1,修改"),s("code",[e._v(".registers 4")]),e._v(",这是应该使用v1而不是p2.")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".method private  closeAd()V\n    .registers 3\n\n    .line 0\n    iget-object v1, p0, Lcom/baby/live/module/ui/activity/PlayActivity;->lyAdvert:Landroid/widget/RelativeLayout;\n\n    const/16 v0, 0x8\n\n    invoke-virtual {v1, v0}, Landroid/widget/RelativeLayout;->setVisibility(I)V\n\n    return-void\n.end method\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("然后在页面的载入逻辑那里调用")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("invoke-direct {p0}, Lcom/baby/live/module/ui/activity/PlayActivity;->closeAd()V\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("code",[e._v("p0")]),e._v("代表"),s("code",[e._v("this")]),e._v("，即调用者本身，可以看到没有改变寄存器大小。\n至于语法随便找一个文章学一下就好，不是很复杂。有几个注意的地方，第一个一个类对应一个"),s("code",[e._v("smali")]),e._v("文件，内部类也是，会有一个同名开头的"),s("code",[e._v("smali")]),e._v("文件")]),e._v(" "),s("h2",{attrs:{id:"寄存器的命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#寄存器的命名"}},[e._v("#")]),e._v(" 寄存器的命名")]),e._v(" "),s("p",[e._v("v命名法采用小写的’v‘开头，表示函数中用到的局部变量与参数，所有的寄存器命名从v0开始，依次递增。p命名法采用小写的"),s("code",[e._v("p")]),e._v("开头，其命名规则是：函数中引入的参数命名从p0开始，依次递增。 假设一个函数中使用到了M个寄存器，并且该函数有N个参数，根据Dalvik虚拟机参数传递方式中的规定：参数使用最后的N个寄存器中，局部变量使用从v0开始的前M-N个寄存器。下面给出一副图示说明：")]),e._v(" "),s("img",{attrs:{src:"/jcq.jpg",alt:"d"}})])}),[],!1,null,null,null);a.default=v.exports}}]);