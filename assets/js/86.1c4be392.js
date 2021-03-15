(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{583:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"vuepress搭建博客"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建博客"}},[s._v("#")]),s._v(" VuePress搭建博客")]),s._v(" "),t("p",[s._v("博客经历了wordpress,hexo,最终决定换成了vuepress,一方面为了顺便熟悉一下vue,另一方面重要的是我希望博客最重要的聚集在内容上，因此对于md的要求希望能够自定义程度高一些，vuepress能够在md里面使用vue的一些东西，对于写作来说自由度很高。")]),s._v(" "),t("h1",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("前提条件")]),s._v(" "),t("p",[s._v("VuePress 需要 "),t("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),t("OutboundLink")],1),s._v(" >= 8.6")])]),s._v(" "),t("ol",[t("li",[s._v("创建并进入一个新目录")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-starter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-starter\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("使用你喜欢的包管理器进行初始化")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[s._v("将 VuePress 安装为本地依赖")]),s._v(" "),t("p",[s._v("我们已经不再推荐全局安装 VuePress")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果你的现有项目依赖了 webpack 3.x，我们推荐使用 "),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),t("OutboundLink")],1),s._v(" 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。")])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[s._v("创建你的第一篇文档")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[t("p",[s._v("在 "),t("code",[s._v("package.json")]),s._v(" 中添加一些 "),t("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"}},[s._v("scripts"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。")])])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("在本地启动服务器")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:dev")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("vuepress不限制你的文章在哪个文件夹里面，只要在docs里面即可。")])]),s._v(" "),t("h1",{attrs:{id:"自定义主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义主题"}},[s._v("#")]),s._v(" 自定义主题")]),s._v(" "),t("ol",[t("li",[s._v("安装")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# init")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-theme-reco\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("应用")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// .vuepress/config.js\n\nmodule.exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    theme: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("p",[s._v("开发主题")]),s._v(" "),t("p",[s._v("想要书写一个主题，首先在你文档根目录创建一个 "),t("code",[s._v(".vuepress/theme")]),s._v(" 目录，接着创建一个 "),t("code",[s._v("Layout.vue")]),s._v(" 文件：")])])]),s._v(" "),t("p",[s._v("到这里，就像开发一个普通的 Vue 应用一样。如何组织你的主题，这完全取决于你。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("其他的内容参见"),t("a",{attrs:{href:"https://www.vuepress.cn/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1)])]),s._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[s._v("编写文章")]),s._v(" "),t("p",[s._v("在docs里面任意建立文件夹编写md即可。")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("---\ntitle: vuepress搭建\ndate: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-07-08\nsidebar: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\ntags: \n- vuepress\ncategories:\n- 杂谈\nnext: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\nprev: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n---\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"自定义容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[s._v("#")]),s._v(" 自定义容器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("::: tip\n这是一个提示\n:::\n\n::: warning\n这是一个警告\n:::\n\n::: danger\n这是一个危险警告\n:::\n\n::: details\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("输出")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("这是一个提示")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[s._v("这是一个警告")])]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[s._v("这是一个危险警告")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("See More")]),s._v(" "),t("p",[s._v("这是一个详情块，在 IE / Edge 中不生效")])])])}),[],!1,null,null,null);a.default=n.exports}}]);