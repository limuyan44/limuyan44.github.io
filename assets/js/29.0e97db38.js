(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{527:function(t,s,a){"use strict";a.r(s);var r=a(6),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("要理解标题中内容首先要了解OSI7层网络。\n"),a("img",{attrs:{src:t.$withBase("/osi.jpg")}})]),t._v(" "),a("h2",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),a("p",[t._v("当我们在浏览器输入一个域名"),a("code",[t._v("www.zycat.top")]),t._v("时，敲下回车键，浏览器会先寻找浏览器的dns缓存->操作系统的dns缓存->hosts文件->网卡dns->路由器dns->isp dns->根服务器。 通常来说，浏览器和操作系统的缓存时间都非常短，正常修改完dns之后只需要一分钟之内即可生效。当浏览器获取到域名对应的ip之后便开始发起请求。可以通过"),a("code",[t._v("ipconfig /displaydns")]),t._v("查看系统dns缓存。")]),t._v(" "),a("h2",{attrs:{id:"ip通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ip通信"}},[t._v("#")]),t._v(" IP通信")]),t._v(" "),a("p",[t._v("我们知道，网络中的2台机器能够相互连接在于他们具有唯一的mac地址，这个地址即是网卡的地址，当我们需要请求某个ip的时候，就需要先找到ip对应的mac地址，对于局域网来说，此时查看本地没有这个ip-mac的缓存，则会发送arp广播请求，收到的机器发现是自己的ip则将mac地址返回，如果不处于同一个网络，则需要先过路由（路由器是网关的一种），可以通过"),a("code",[t._v("route print")]),t._v(" 查看路由表")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("因为ARP本身是网络层的一部分，ARP协议为IP协议提供了转换地址的服务；数据链路层使用硬件地址而不使用IP地址，无需ARP协议数据链路层本身即可正常运行。因此ARP不在数据链路层。")])]),t._v(" "),a("p",[t._v("通过ip协议划分了逻辑地址以及网段，ipv4 32位二进制，包括网络号和主机号，由子网掩码确认网络号，相同网络号在同一网段，如"),a("code",[t._v("255 255 255 0")]),t._v("，则说明前28位为网络号，最后4位为主机号。")]),t._v(" "),a("h2",{attrs:{id:"传输层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),a("p",[t._v("通过tcp udp之类协议发送数据，由端口确认访问的进程，网络层提供主机之间的通信，而传输层提供程序之间的通信。")]),t._v(" "),a("h2",{attrs:{id:"应用层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),a("p",[t._v("通常的http,smtp等处于应用层。")]),t._v(" "),a("h2",{attrs:{id:"物理层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),a("p",[t._v("光纤，网线，网卡等等物理设备")]),t._v(" "),a("h2",{attrs:{id:"数据链路层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),a("p",[t._v("向网络层提供可靠的物理层数据，网桥，交换机等等。")])])}),[],!1,null,null,null);s.default=v.exports}}]);