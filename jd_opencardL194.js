/*
7.14-7.17 品类联合 
新增开卡脚本 一次性脚本

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

————————————————
入口：[ 7.14-7.17 品类联合]

请求太频繁会被黑ip
过10分钟再执行
cron:1 12 14-17 7 *
============Quantumultx===============
[task_local]
#7.14-7.17 品类联合
1 12 14-17 7 * jd_opencardL194.js, tag=7.14-7.17 品类联合, enabled=true

*/
const $ = new Env('7.14-7.17 品类联合');
var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxe5b4c = ["\x69\x73\x4E\x6F\x64\x65", "\x2E\x2F\x6A\x64\x43\x6F\x6F\x6B\x69\x65\x2E\x6A\x73", "", "\x2E\x2F\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x65\x6E\x76", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x62\x61\x39\x37\x63\x30\x39\x64\x35\x65\x61\x39\x34\x61\x63\x32\x39\x35\x61\x63\x38\x65\x37\x36\x33\x35\x63\x30\x32\x34\x64\x30", "\x73\x68\x61\x72\x65\x55\x75\x69\x64", "\x30\x38\x30\x62\x30\x32\x32\x61\x30\x32\x65\x31\x34\x38\x66\x36\x39\x34\x30\x30\x66\x65\x66\x34\x31\x66\x36\x34\x61\x61\x38\x37", "\x76\x65\x6E\x64\x65\x72\x49\x64\x73", "\x35\x39\x39\x31\x31\x39", "\u6D3B\u52A8\u5165\u53E3\x3A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x66\x72\x69\x65\x6E\x64\x69\x64\x3D", "\x64\x32\x35\x39\x37\x61\x34\x63\x64\x37\x61\x33\x34\x61\x30\x64\x38\x30\x32\x61\x37\x31\x37\x39\x37\x62\x64\x37\x64\x39\x62\x32", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x6C\x65\x6E\x67\x74\x68", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A", "\x77\x61\x69\x74", "\x61\x63\x74\x6F\x72\x55\x75\x69\x64", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x68\x61\x73\x45\x6E\x64", "\x65\x6E\x64\x54\x69\x6D\x65", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\u6D3B\u52A8\u7ED3\u675F", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\u83B7\u53D6\x5B\x50\x69\x6E\x5D\u5931\u8D25\uFF01", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x4C\x69\x73\x74", "\x61\x6C\x6C\x4F\x70\x65\x6E\x43\x61\x72\x64", "\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74", "\u83B7\u53D6\u4E0D\u5230\x5B\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x5D\u9000\u51FA\u6267\u884C\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\u5F00\u5361\u4EFB\u52A1", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x6F\x70\x65\x6E\x53\x74\x61\x74\x75\x73", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\x76\x65\x6E\x64\x65\x72\x49\x64", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u7B2C", "\u6B21\x20\u91CD\u65B0\u5F00\u5361", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x69\x6E\x64\x65\x78\x4F\x66", "\u5F00\u5361\u5931\u8D25\u274C\x20\uFF0C\u91CD\u65B0\u6267\u884C\u811A\u672C", "\u5DF2\u5168\u90E8\u5F00\u5361", "\x75\x6E\x69\x6F\x6E\x53\x68\x6F\x70\x49\x6E\x66\x6F\x73", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x76\x65\x6E\x64\x65\x72\x49\x64\x73\x73", "\x76\x61\x6C\x75\x65", "\x76\x69\x73\x69\x74\x53\x6B\x75\x56\x61\x6C\x75\x65", "\u5173\u6CE8", "\x73\x63\x6F\x72\x65", "\u503C", "\u62BD\u5956\u6B21\u6570\u4E3A\x3A", "\u6B21\u62BD\u5956", "\x6C\x75\x63\x6B\x79\x44\x72\x61\x77", "\u62BD\u5956\u592A\u591A\u6B21\uFF0C\u591A\u4F59\u7684\u6B21\u6570\u8BF7\u518D\u6267\u884C\u811A\u672C", "\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6F\x72\x64\x48\x61\x73\x43\x6F\x75\x70\x6F\x6E", "\u5F53\u524D\u52A9\u529B\x3A", "\u540E\u9762\u7684\u53F7\u90FD\u4F1A\u52A9\u529B\x3A", "\u4F11\u606F\x31\u5206\u949F\uFF0C\u522B\u88AB\u9ED1\x69\x70\u4E86\x0A\u53EF\u6301\u7EED\u53D1\u5C55", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x75\x72\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x75\x75\x69\x64\x3D\x66\x33\x37\x61\x34\x64\x38\x62\x30\x39\x34\x34\x33\x34\x66\x35\x35\x62\x33\x64\x38\x62\x39\x37\x66\x35\x33\x61\x61\x36\x35\x39\x65\x36\x34\x39\x66\x65\x30\x36\x26\x63\x6C\x69\x65\x6E\x74\x3D\x61\x70\x70\x6C\x65\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x30\x2E\x31\x2E\x34\x26\x73\x74\x3D\x31\x36\x33\x34\x31\x38\x30\x33\x37\x33\x35\x37\x31\x26\x73\x76\x3D\x31\x32\x30\x26\x73\x69\x67\x6E\x3D\x65\x63\x33\x39\x63\x35\x65\x65\x33\x32\x32\x33\x34\x32\x36\x66\x30\x31\x66\x38\x38\x62\x38\x34\x33\x66\x38\x39\x38\x64\x62\x31", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x75\x73\x65\x72\x49\x64\x3D\x35\x39\x39\x31\x31\x39\x26\x74\x6F\x6B\x65\x6E\x3D", "\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50", "\x2F\x64\x72\x61\x77\x43\x65\x6E\x74\x65\x72\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x73\x68\x6F\x70\x49\x64", "\x26\x63\x6F\x64\x65\x3D\x39\x39\x26\x70\x69\x6E\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x70\x61\x67\x65\x55\x72\x6C\x3D", "\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x70\x69\x6E\x3D", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6F\x6E\x74\x65\x6E\x74", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x70\x69\x6E\x3D", "\x26\x70\x69\x6E\x49\x6D\x67\x3D", "\x61\x74\x74\x72\x54\x6F\x75\x58\x69\x61\x6E\x67", "\x26\x6E\x69\x63\x6B\x3D", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x66\x6F\x6C\x6C\x6F\x77\x53\x68\x6F\x70", "\x26\x62\x75\x79\x65\x72\x4E\x69\x63\x6B\x3D", "\x26\x75\x73\x65\x72\x49\x64\x3D", "\x26\x61\x63\x74\x6F\x72\x55\x75\x69\x64\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D\x39\x39\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\u52A0\u8D2D", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x67\x65\x74\x49\x6E\x66\x6F", "\u9886\u53D6\u5956\u52B1", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x6C\x75\x63\x6B\x79\x44\x72\x61\x77", "\x2F\x64\x69\x6E\x67\x7A\x68\x69\x2F\x74\x61\x73\x6B\x61\x63\x74\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6F\x72\x64\x48\x61\x73\x43\x6F\x75\x70\x6F\x6E", "\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x67\x65\x74\x41\x73\x73\x69\x73\x74\x49\x6E\x66\x6F", "\x26\x73\x6F\x72\x74\x53\x74\x61\x74\x75\x73\x3D\x31", "\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x20", "\x72\x65\x73\x75\x6C\x74", "\x64\x61\x74\x61", "\x73\x65\x63\x72\x65\x74\x50\x69\x6E", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\x20", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x6D\x67\x31\x30\x2E\x33\x36\x30\x62\x75\x79\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x69\x6D\x67\x7A\x6F\x6E\x65\x2F\x6A\x66\x73\x2F\x74\x31\x2F\x37\x30\x32\x30\x2F\x32\x37\x2F\x31\x33\x35\x31\x31\x2F\x36\x31\x34\x32\x2F\x35\x63\x35\x31\x33\x38\x64\x38\x45\x34\x64\x66\x32\x65\x37\x36\x34\x2F\x35\x61\x31\x32\x31\x36\x61\x33\x61\x35\x30\x34\x33\x63\x35\x64\x2E\x70\x6E\x67", "\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C", "\x74\x61\x73\x6B\x44\x61\x74\x61", "\x75\x6E\x69\x6F\x6E\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x43\x61\x72\x64\x53\x74\x61\x74\x75\x73", "\x6F\x70\x65\x6E\x49\x6E\x66\x6F", "\u83B7\u5F97\uFF1A", "\u7A7A\u6C14", "\u5DF2\u5B8C\u6210\u5173\u6CE8", "\x64\x72\x61\x77\x52\x65\x73\x75\x6C\x74", "\x64\x72\x61\x77\x4F\x6B", "\u4EAC\u8C46", "\u7A7A\u6C14\uD83D\uDCA8", "\x61\x64\x64\x50\x6F\x69\x6E\x74", "\u6E38\u620F\u673A\u4F1A", "\u83B7\u5F97\x3A", "\x69\x6E\x66\x6F\x4E\x61\x6D\x65", "\x72\x65\x70\x6C\x61\x63\x65", "\u5171\u83B7\u5F97", "\u9886\u53D6\u673A\u4F1A\x28", "\x68\x61\x73\x44\x72\x61\x77\x54\x69\x6D\x65\x73", "\x2F\x31\x30\x29\x20\u53EF\u9886\u53D6\u5956\u52B1", "\x74\x6F\x74\x61\x6C\x43\x6F\x75\x6E\x74", "\u6B21", "\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x20\u4F60\u9080\u8BF7\u4E86\x3A", "\x73\x68\x61\x72\x65\x52\x65\x63\x6F\x72\x64", "\u4E2A", "\x2D\x3E\x20", "\u706B\u7206", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x52\x65\x66\x65\x72\x65\x72", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x64\x7A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x63\x61\x74\x65\x67\x6F\x72\x79\x55\x6E\x69\x6F\x6E\x2F\x61\x63\x74\x69\x76\x69\x74\x79\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x74\x70\x6C\x49\x64\x3D\x30\x30\x30\x33\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3D", "\x4F\x72\x69\x67\x69\x6E", "\x43\x6F\x6F\x6B\x69\x65", "\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D", "\x3B", "\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\u6D3B\u52A8\u5DF2\u7ED3\u675F", "\x67\x65\x74", "\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65", "\x68\x65\x61\x64\x65\x72\x73", "\x3D", "\x73\x70\x6C\x69\x74", "\x73\x75\x62\x73\x74\x72", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x31\x2E\x34\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30", "\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x36\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x2A\x2F\x2A", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4D\x61\x63\x69\x6E\x74\x6F\x73\x68\x3B\x20\x49\x6E\x74\x65\x6C\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x20\x31\x30\x5F\x31\x35\x5F\x37\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x43\x68\x72\x6F\x6D\x65\x2F\x39\x39\x2E\x30\x2E\x34\x38\x34\x34\x2E\x35\x31\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\x74\x6F\x4F\x62\x6A", "\x73\x75\x63\x63\x65\x73\x73", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x36\x2C\x22\x70\x61\x79\x55\x70\x53\x68\x6F\x70\x22\x3A\x74\x72\x75\x65\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x6A\x73\x6A\x69\x61\x6D\x69\x2E\x63\x6F\x6D\x2E\x76\x36", "\u202E\x5F\x30\x78\x6F\x64\x62", "\x77\x71\x6B\x67\x41\x63\x4B\x65\x4F\x51\x3D\x3D", "\x4E\x42\x44\x43\x6E\x44\x45\x66", "\x77\x71\x68\x68\x77\x37\x48\x44\x69\x38\x4B\x61", "\x77\x72\x7A\x43\x75\x48\x4D\x2F\x77\x36\x51\x6A", "\x77\x70\x4A\x79\x77\x37\x50\x44\x75\x4D\x4B\x45", "\x45\x30\x62\x43\x6E\x41\x3D\x3D", "\x42\x78\x62\x43\x67\x38\x4B\x6F\x53\x41\x3D\x3D", "\x51\x6E\x6A\x44\x6B\x30\x59\x63\x77\x36\x64\x31\x5A\x73\x4B\x38\x77\x36\x52\x61\x77\x70\x54\x44\x68\x4D\x4B\x32\x44\x4D\x4F\x79\x5A\x63\x4B\x76\x42\x54\x70\x59\x77\x34\x70\x76\x50\x38\x4F\x79\x4E\x46\x6E\x43\x73\x73\x4F\x2F\x77\x35\x44\x44\x6A\x56\x76\x44\x68\x48\x33\x44\x6F\x63\x4B\x57\x77\x70\x4D\x47\x55\x4D\x4B\x56\x56\x73\x4B\x2F\x4A\x44\x58\x43\x76\x63\x4B\x39\x51\x4D\x4F\x49\x77\x71\x48\x44\x70\x4D\x4F\x58\x47\x6B\x2F\x44\x6C\x41\x6E\x44\x6B\x78\x72\x44\x6E\x4D\x4F\x2F\x77\x35\x76\x44\x6E\x32\x7A\x43\x71\x38\x4F\x39\x55\x73\x4B\x42\x77\x37\x68\x33\x48\x31\x4A\x46\x77\x70\x37\x43\x67\x7A\x54\x43\x6F\x38\x4B\x54\x61\x63\x4F\x61\x62\x32\x44\x43\x71\x63\x4F\x53\x77\x37\x55\x5A\x42\x56\x4C\x43\x67\x57\x50\x44\x6F\x38\x4B\x6F\x4A\x47\x62\x44\x73\x4D\x4B\x44\x42\x41\x2F\x43\x6C\x38\x4B\x54\x77\x6F\x42\x73\x46\x38\x4F\x59\x50\x63\x4F\x56\x77\x70\x55\x53\x57\x63\x4F\x61\x61\x47\x6C\x6B\x77\x71\x30\x41\x46\x32\x74\x6E\x50\x63\x4B\x36\x77\x34\x74\x6D\x65\x38\x4F\x63\x54\x4D\x4B\x5A\x77\x72\x77\x4E\x44\x38\x4F\x4D\x4C\x44\x4E\x43\x77\x35\x54\x43\x71\x38\x4F\x48\x77\x34\x42\x5A\x4A\x6B\x7A\x44\x6C\x42\x6F\x4F\x77\x6F\x48\x43\x69\x38\x4B\x73\x77\x6F\x66\x43\x75\x38\x4B\x65\x58\x38\x4F\x45\x77\x71\x37\x44\x72\x48\x73\x59\x77\x37\x62\x44\x6E\x38\x4B\x6E\x47\x43\x45\x43\x61\x6B\x77\x6A\x4B\x69\x54\x43\x72\x38\x4F\x44\x52\x68\x2F\x43\x67\x51\x3D\x3D", "\x4E\x38\x4B\x74\x52\x77\x3D\x3D", "\x4C\x44\x62\x43\x72\x4D\x4B\x53\x66\x51\x3D\x3D", "\x77\x36\x4C\x44\x70\x47\x31\x71\x4E\x41\x3D\x3D", "\x77\x70\x45\x58\x55\x63\x4F\x6A\x43\x41\x3D\x3D", "\x46\x56\x37\x43\x68\x38\x4B\x47\x5A\x51\x3D\x3D", "\x43\x57\x50\x43\x6D\x58\x50\x43\x6E\x41\x3D\x3D", "\x77\x72\x67\x30\x77\x34\x67\x3D", "\x59\x73\x4F\x59\x77\x34\x6F\x51\x77\x37\x6F\x4B\x41\x4D\x4F\x6F\x77\x6F\x6B\x3D", "\x41\x41\x62\x43\x67\x51\x77\x48\x77\x36\x67\x3D", "\x77\x35\x62\x44\x6A\x43\x6C\x61\x43\x63\x4F\x38\x59\x63\x4B\x37", "\x4A\x4D\x4B\x70\x4F\x73\x4F\x32\x61\x79\x52\x49", "\x57\x73\x4F\x35\x43\x4D\x4B\x66\x77\x71\x37\x44\x6E\x4D\x4F\x4A\x77\x71\x45\x3D", "\x77\x34\x30\x4B\x51\x6E\x6E\x43\x6E\x4D\x4F\x59\x66\x38\x4F\x4A\x77\x34\x4E\x61", "\x50\x73\x4B\x6E\x52\x47\x76\x43\x74\x6A\x55\x54\x5A\x45\x68\x45", "\x77\x37\x51\x6A\x77\x72\x56\x65\x53\x63\x4F\x77", "\x4A\x63\x4B\x67\x49\x63\x4F\x64\x65\x41\x3D\x3D", "\x4F\x4D\x4B\x67\x58\x30\x72\x43\x6B\x41\x3D\x3D", "\x56\x48\x6A\x43\x6C\x4D\x4F\x43\x77\x34\x51\x31\x77\x72\x37\x43\x6A\x51\x6A\x43\x68\x48\x66\x44\x72\x4D\x4F\x4B\x77\x6F\x7A\x44\x73\x41\x3D\x3D", "\x77\x35\x62\x43\x6D\x4D\x4F\x74\x77\x72\x41\x58\x77\x34\x4A\x65", "\x55\x48\x4C\x43\x6A\x73\x4F\x73\x77\x34\x77\x74", "\x46\x38\x4F\x33\x56\x73\x4F\x6D\x4B\x58\x58\x44\x6A\x44\x73\x4C\x4A\x43\x51\x3D", "\x77\x71\x6F\x6A\x4C\x38\x4B\x2F\x4C\x38\x4B\x65", "\x50\x6C\x66\x44\x67\x4D\x4B\x6D\x53\x63\x4F\x72", "\x77\x71\x5A\x6F\x77\x36\x6E\x44\x6E\x38\x4B\x77\x77\x6F\x67\x3D", "\x43\x55\x7A\x43\x6D\x48\x34\x3D", "\x77\x72\x48\x44\x6B\x54\x77\x3D", "\x54\x4D\x4F\x4E\x64\x4D\x4F\x63\x77\x71\x30\x3D", "\x4B\x67\x7A\x43\x6E\x51\x59\x53\x77\x37\x51\x3D", "\x4F\x63\x4B\x37\x4E\x38\x4B\x38\x77\x37\x77\x3D", "\x77\x72\x6F\x35\x49\x38\x4B\x76\x4F\x73\x4B\x59", "\x77\x72\x6F\x2B\x77\x35\x46\x6C\x48\x46\x67\x3D", "\x63\x38\x4F\x6D\x4D\x63\x4B\x68\x77\x6F\x4D\x3D", "\x57\x51\x51\x54\x77\x36\x46\x6F", "\x78\x6A\x73\x6A\x69\x61\x4E\x55\x6D\x69\x2E\x78\x75\x63\x6F\x4C\x4F\x77\x71\x6D\x2E\x76\x42\x6C\x65\x36\x56\x4B\x45\x3D\x3D", "\x70\x6F", "\x73\x68\x69\x66\x74", "\u202E", "\x70", "\x73\x6C\x69\x63\x65", "\x63\x6F\x6E\x63\x61\x74", "\x30\x78", "\x5A\x48\x76\x66\x49\x48", "\x66\x75\x6E\x63\x74\x69\x6F\x6E", "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D", "\x61\x74\x6F\x62", "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65", "\x25", "\x30\x30", "\x74\x6F\x53\x74\x72\x69\x6E\x67", "\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74", "\x75\x5A\x6B\x68\x4C\x4B", "\x50\x67\x42\x78\x74\x76", "\x6D\x7A\x77\x4F\x77\x67", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\u202E\x30", "\x77\x6A\x29\x69", "\u202E\x32", "\x33\x40\x51\x2A", "\u202E\x31", "\x5A\x2A\x68\x52", "\u202E\x35", "\x4C\x77\x57\x69", "\u202E\x34", "\x44\x61\x25\x59", "\u202E\x33", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x62\x30\x31\x63\x37\x63\x34\x66\x39\x39\x61\x38\x66\x66\x62\x32\x62\x35\x65\x36\x39\x32\x38\x32\x66\x34\x35\x61\x31\x34\x65\x31\x62\x38\x37\x63\x39\x30\x61\x39\x36\x32\x31\x37\x30\x30\x36\x33\x31\x31\x61\x65\x34\x63\x66\x64\x63\x62\x64\x31\x61\x39\x33\x32\x3B\x33\x2E\x30\x3B", "\u202E\x36", "\x40\x68\x58\x66", "\u202E\x37", "\x33\x42\x32\x53", "\u202B\x38", "\x46\x6F\x72\x6D\x61\x74", "\x45\x52\x64\x7A\x79", "\u202E\x39", "\x53\x43\x51\x46", "\u202E\x63", "\u202B\x62", "\x76\x57\x44\x57", "\u202E\x64", "\x37\x5D\x42\x6E", "\x44\x71\x72\x71\x48", "\u202B\x61", "\x25\x48\x6F\x4D", "\u202B\x66", "\u202B\x65", "\x67\x4D\x39\x24", "\u202E\x31\x30", "\x6C\x45\x62\x59", "\x67\x65\x74\x44\x61\x74\x65", "\u202E\x31\x31", "\x6D\x5D\x49\x72", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\u202B\x31\x32", "\x68\x4C\x6D\x62", "\u202B\x31\x33", "\x79\x5B\x6D\x53", "\u202E\x31\x34", "\u202B\x31\x35", "\x24\x6E\x30\x25", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\u202E\x31\x37", "\x77\x47\x41\x56\x6C", "\u202E\x31\x36", "\u202B\x31\x38", "\x33\x61\x41\x4E", "\x74\x65\x73\x74", "\x24\x31", "\u202B\x31\x64", "\x54\x38\x2A\x77", "\u202E\x31\x63", "\x63\x74\x75\x26", "\u202B\x31\x62", "\x6E\x31\x40\x42", "\u202E\x31\x61", "\u202B\x31\x39", "\x62\x6F\x73\x76", "\u202E\x31\x66", "\x29", "\u202E\x31\x65", "\x28", "\x53\x2B", "\x6B\x68\x76\x79\x41", "\u202B\x32\x30", "\x64\x76\x63\x48", "\u202B\x32\x32", "\u202B\x32\x31", "\x4A\x70\x40\x2A", "\u202B\x32\x35", "\u202E\x32\x34", "\u202B\x32\x33", "\x4A\x48\x39\x58", "\x4B\x4E\x67\x41\x43", "\u202E\x32\x38", "\u202B\x32\x37", "\x65\x53\x68\x6D", "\u202B\x32\x36", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
const jdCookieNode = $[__Oxe5b4c[0x0]]() ? require(__Oxe5b4c[0x1]) : __Oxe5b4c[0x2];
const notify = $[__Oxe5b4c[0x0]]() ? require(__Oxe5b4c[0x3]) : __Oxe5b4c[0x2];
let cookiesArr = [], cookie = __Oxe5b4c[0x2];
if ($[__Oxe5b4c[0x0]]()) {
    Object[__Oxe5b4c[0x6]](jdCookieNode)[__Oxe5b4c[0x5]]((_0x60dfx5) => {
        cookiesArr[__Oxe5b4c[0x4]](jdCookieNode[_0x60dfx5])
    });
    if (process[__Oxe5b4c[0x8]][__Oxe5b4c[0x7]] && process[__Oxe5b4c[0x8]][__Oxe5b4c[0x7]] === __Oxe5b4c[0x9]) {
        console[__Oxe5b4c[0xa]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxe5b4c[0xd]](__Oxe5b4c[0xc]), $[__Oxe5b4c[0xd]](__Oxe5b4c[0xe]), ...jsonParse($[__Oxe5b4c[0xd]](__Oxe5b4c[0x11]) || __Oxe5b4c[0x12])[__Oxe5b4c[0x10]]((_0x60dfx5) => {
        return _0x60dfx5[__Oxe5b4c[0xf]]
    })][__Oxe5b4c[0xb]]((_0x60dfx5) => {
        return !!_0x60dfx5
    })
}
;let lz_cookie = {};
allMessage = __Oxe5b4c[0x2];
message = __Oxe5b4c[0x2];
$[__Oxe5b4c[0x13]] = false;
$[__Oxe5b4c[0x14]] = false;
$[__Oxe5b4c[0x15]] = false;
let lz_jdpin_token_cookie = __Oxe5b4c[0x2];
let activityCookie = __Oxe5b4c[0x2];
!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxe5b4c[0x1d]]($[__Oxe5b4c[0x1a]], __Oxe5b4c[0x1b], __Oxe5b4c[0x1c], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxe5b4c[0x1c]});
        return
    }
    ;$[__Oxe5b4c[0x1e]] = __Oxe5b4c[0x1f];
    $[__Oxe5b4c[0x20]] = __Oxe5b4c[0x21];
    $[__Oxe5b4c[0x22]] = __Oxe5b4c[0x23];
    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x24]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x25]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`);
    let _0x60dfxa = ['b992294a92fe44eb9c34bc6203e1c75e','4cc7f968f4c14fc3999ab0e36de3cea3','1530cdec532948d89137ee86dbf55c71'];
    let _0x60dfxb = Math[__Oxe5b4c[0x28]]((Math[__Oxe5b4c[0x27]]() * 2));
    let _0x60dfxc = 0;
    for (let _0x60dfxd = 0; _0x60dfxd < cookiesArr[__Oxe5b4c[0x29]]; _0x60dfxd++) {
    _0x60dfxc = Math[__Oxe5b4c[0x28]]((Math[__Oxe5b4c[0x27]]() * _0x60dfxa[__Oxe5b4c[0x29]]));
    $[__Oxe5b4c[0x20]] = _0x60dfxa[_0x60dfxc] ? _0x60dfxa[_0x60dfxc] : $[__Oxe5b4c[0x20]];
        cookie = cookiesArr[_0x60dfxd];
        originCookie = cookiesArr[_0x60dfxd];
        if (cookie) {
            $[__Oxe5b4c[0x2a]] = decodeURIComponent(cookie[__Oxe5b4c[0x2b]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxe5b4c[0x2b]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[__Oxe5b4c[0x2c]] = _0x60dfxd + 1;
            message = __Oxe5b4c[0x2];
            $[__Oxe5b4c[0x2d]] = 0;
            $[__Oxe5b4c[0x13]] = false;
            $[__Oxe5b4c[0x2e]] = __Oxe5b4c[0x2];
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x2f] + $[__Oxe5b4c[0x2c]] + __Oxe5b4c[0x30] + ($[__Oxe5b4c[0x2e]] || $[__Oxe5b4c[0x2a]]) + __Oxe5b4c[0x31]);
            await getUA();
            await run();
            await $[__Oxe5b4c[0x32]](2000);
            if (_0x60dfxd == 0 && !$[__Oxe5b4c[0x33]]) {
                break
            }
            ;
            if ($[__Oxe5b4c[0x14]] || $[__Oxe5b4c[0x15]]) {
                break
            }
        }
    }
    ;
    if ($[__Oxe5b4c[0x14]]) {
        let _0x60dfxe = __Oxe5b4c[0x34];
        $[__Oxe5b4c[0x1d]]($[__Oxe5b4c[0x1a]], `${__Oxe5b4c[0x2]}`, `${__Oxe5b4c[0x2]}${_0x60dfxe}${__Oxe5b4c[0x2]}`);
        if ($[__Oxe5b4c[0x0]]()) {
            await notify[__Oxe5b4c[0x35]](`${__Oxe5b4c[0x2]}${$[__Oxe5b4c[0x1a]]}${__Oxe5b4c[0x2]}`, `${__Oxe5b4c[0x2]}${_0x60dfxe}${__Oxe5b4c[0x2]}`)
        }
    }
})()[__Oxe5b4c[0x19]]((_0x60dfx9) => {
    return $[__Oxe5b4c[0x18]](_0x60dfx9)
})[__Oxe5b4c[0x17]](() => {
    return $[__Oxe5b4c[0x16]]()
});

async function run() {
    try {
        $[__Oxe5b4c[0x36]] = true;
        $[__Oxe5b4c[0x37]] = 0;
        lz_jdpin_token_cookie = __Oxe5b4c[0x2];
        $[__Oxe5b4c[0x38]] = __Oxe5b4c[0x2];
        $[__Oxe5b4c[0x39]] = __Oxe5b4c[0x2];
        let _0x60dfx10 = false;
        await takePostRequest(__Oxe5b4c[0x3a]);
        if ($[__Oxe5b4c[0x38]] == __Oxe5b4c[0x2]) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x3b]);
            return
        }
        ;await getCk();
        if (activityCookie == __Oxe5b4c[0x2]) {
            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x3c]}`);
            return
        }
        ;
        if ($[__Oxe5b4c[0x15]] === true) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x3d]);
            return
        }
        ;
        if ($[__Oxe5b4c[0x14]]) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x3e]);
            return
        }
        ;await takePostRequest(__Oxe5b4c[0x3f]);
        if (!$[__Oxe5b4c[0x39]]) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x40]);
            return
        }
        ;await takePostRequest(__Oxe5b4c[0x41]);
        await takePostRequest(__Oxe5b4c[0x42]);
        $[__Oxe5b4c[0x43]] = [];
        $[__Oxe5b4c[0x44]] = false;
        await takePostRequest(__Oxe5b4c[0x45]);
        if (!$[__Oxe5b4c[0x33]]) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x46]);
            return
        }
        ;await takePostRequest(__Oxe5b4c[0x47]);
        await $[__Oxe5b4c[0x32]](1000);
        if ($[__Oxe5b4c[0x44]] == false) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x48]);
            for (o of $[__Oxe5b4c[0x43]]) {
                $[__Oxe5b4c[0x49]] = false;
                if (o[__Oxe5b4c[0x4a]] == false) {
                    _0x60dfx10 = true;
                    $[__Oxe5b4c[0x4b]] = o[__Oxe5b4c[0x4c]];
                    $[__Oxe5b4c[0x4d]] = __Oxe5b4c[0x2];
                    await getshopactivityId();
                    for (let _0x60dfxd = 0; _0x60dfxd < Array(5)[__Oxe5b4c[0x29]]; _0x60dfxd++) {
                        if (_0x60dfxd > 0) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x4e]}${_0x60dfxd}${__Oxe5b4c[0x4f]}`)
                        }
                        ;await joinShop();
                        if ($[__Oxe5b4c[0x4d]][__Oxe5b4c[0x51]](__Oxe5b4c[0x50]) == -1) {
                            break
                        }
                    }
                    ;
                    if ($[__Oxe5b4c[0x4d]][__Oxe5b4c[0x51]](__Oxe5b4c[0x50]) > -1) {
                        console[__Oxe5b4c[0xa]](__Oxe5b4c[0x52])
                    }
                    ;await takePostRequest(__Oxe5b4c[0x45]);
                    await takePostRequest(__Oxe5b4c[0x47]);
                    await $[__Oxe5b4c[0x32]](parseInt(Math[__Oxe5b4c[0x27]]() * 2000 + 3000, 10))
                }
            }
        } else {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x53])
        }
        ;
        for (const _0x60dfx11 of $[__Oxe5b4c[0x54]]) {
            if ($[__Oxe5b4c[0x55]] == false) {
                break
            }
            ;$[__Oxe5b4c[0x56]] = _0x60dfx11[__Oxe5b4c[0x57]];
            $[__Oxe5b4c[0x58]] = $[__Oxe5b4c[0x56]];
            await takePostRequest(__Oxe5b4c[0x59]);
            await $[__Oxe5b4c[0x32]](parseInt(Math[__Oxe5b4c[0x27]]() * 3000 + 3000, 10))
        }
        ;console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${$[__Oxe5b4c[0x5a]]}${__Oxe5b4c[0x5b]}`);
        $[__Oxe5b4c[0x55]] = true;
        let _0x60dfx12 = parseInt($[__Oxe5b4c[0x5a]] / 1);
        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x5c]}${_0x60dfx12}${__Oxe5b4c[0x2]}`);
        for (m = 1; _0x60dfx12--; m++) {
            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x4e]}${m}${__Oxe5b4c[0x5d]}`);
            await takePostRequest(__Oxe5b4c[0x5e]);
            if ($[__Oxe5b4c[0x55]] == false) {
                break
            }
            ;
            if (Number(_0x60dfx12) <= 0) {
                break
            }
            ;
            if (m >= 10) {
                console[__Oxe5b4c[0xa]](__Oxe5b4c[0x5f]);
                break
            }
            ;await $[__Oxe5b4c[0x32]](parseInt(Math[__Oxe5b4c[0x27]]() * 2000 + 2000, 10))
        }
        ;await takePostRequest(__Oxe5b4c[0x60]);
        if ($[__Oxe5b4c[0x14]]) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x3e]);
            return
        }
        ;console[__Oxe5b4c[0xa]]($[__Oxe5b4c[0x33]]);
        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x61]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`);
        if ($[__Oxe5b4c[0x2c]] == 1) {
            $[__Oxe5b4c[0x20]] = $[__Oxe5b4c[0x33]];
            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x62]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`)
        }
        ;
        return;
        if (_0x60dfx10) {
            await $[__Oxe5b4c[0x32]](parseInt(Math[__Oxe5b4c[0x27]]() * 1000 + 10000, 10))
        }
        ;
        if ($[__Oxe5b4c[0x2c]] % 3 == 0) {
            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x63])
        }
        ;
        if ($[__Oxe5b4c[0x2c]] % 3 == 0) {
            await $[__Oxe5b4c[0x32]](parseInt(Math[__Oxe5b4c[0x27]]() * 5000 + 10000, 10))
        }
    } catch (e) {
        console[__Oxe5b4c[0xa]](e)
    }
}

async function takePostRequest(_0x60dfx14) {
    if ($[__Oxe5b4c[0x14]]) {
        return
    }
    ;let _0x60dfx15 = __Oxe5b4c[0x64];
    let _0x60dfx16 = `${__Oxe5b4c[0x2]}`;
    let _0x60dfx17 = __Oxe5b4c[0x65];
    let _0x60dfx18 = __Oxe5b4c[0x2];
    switch (_0x60dfx14) {
        case __Oxe5b4c[0x3a]:
            _0x60dfx15 = `${__Oxe5b4c[0x66]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x67]}`;
            break;
        case __Oxe5b4c[0x3f]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x68]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x69]}${$[__Oxe5b4c[0x38]]}${__Oxe5b4c[0x6a]}`;
            break;
        case __Oxe5b4c[0x41]:
            let _0x60dfx19 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x6b]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x6c]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`;
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x6d]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x6e]}${$[__Oxe5b4c[0x6f]] || $[__Oxe5b4c[0x4c]] || $[__Oxe5b4c[0x22]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x70]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x71]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x72]}${encodeURIComponent(_0x60dfx19)}${__Oxe5b4c[0x73]}`;
            break;
        case __Oxe5b4c[0x42]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x74]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x75]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x45]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x76]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x78]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x79]}${encodeURIComponent($[__Oxe5b4c[0x7a]])}${__Oxe5b4c[0x7b]}${encodeURIComponent($[__Oxe5b4c[0x7c]])}${__Oxe5b4c[0x7d]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x47]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x7e]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x78]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x59]:
            ;
        case __Oxe5b4c[0x84]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x7f]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x80]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x81]}${$[__Oxe5b4c[0x58]]}${__Oxe5b4c[0x82]}${$[__Oxe5b4c[0x33]]}${__Oxe5b4c[0x83]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x86]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x85]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x78]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x82]}${$[__Oxe5b4c[0x33]]}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x5e]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x87]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x78]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x82]}${$[__Oxe5b4c[0x33]]}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x60]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x88]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x78]}${encodeURIComponent($.Pin)}${__Oxe5b4c[0x82]}${$[__Oxe5b4c[0x33]]}${__Oxe5b4c[0x2]}`;
            break;
        case __Oxe5b4c[0x8b]:
            _0x60dfx15 = `${__Oxe5b4c[0x2]}${_0x60dfx15}${__Oxe5b4c[0x89]}`;
            _0x60dfx16 = `${__Oxe5b4c[0x77]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x82]}${$[__Oxe5b4c[0x33]]}${__Oxe5b4c[0x8a]}`;
            break;
        default:
            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x8c]}${_0x60dfx14}${__Oxe5b4c[0x2]}`)
    }
    ;let _0x60dfx1a = getPostRequest(_0x60dfx15, _0x60dfx16, _0x60dfx17);
    return new Promise(async (_0x60dfx1b) => {
        $[__Oxe5b4c[0x91]](_0x60dfx1a, (_0x60dfx1c, _0x60dfx1d, _0x60dfx1e) => {
            try {
                setActivityCookie(_0x60dfx1d);
                if (_0x60dfx1c) {
                    if (_0x60dfx1d && typeof _0x60dfx1d[__Oxe5b4c[0x8d]] != __Oxe5b4c[0x8e]) {
                        if (_0x60dfx1d[__Oxe5b4c[0x8d]] == 493) {
                            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x3e]);
                            $[__Oxe5b4c[0x14]] = true
                        }
                    }
                    ;console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${$[__Oxe5b4c[0x8f]](_0x60dfx1c, _0x60dfx1c)}${__Oxe5b4c[0x2]}`);
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x90]}`)
                } else {
                    dealReturn(_0x60dfx14, _0x60dfx1e)
                }
            } catch (e) {
                console[__Oxe5b4c[0xa]](e, _0x60dfx1d)
            } finally {
                _0x60dfx1b()
            }
        })
    })
}

async function dealReturn(_0x60dfx14, _0x60dfx1e) {
    let _0x60dfx20 = __Oxe5b4c[0x2];
    try {
        if (_0x60dfx14 != __Oxe5b4c[0x41] || _0x60dfx14 != __Oxe5b4c[0x47]) {
            if (_0x60dfx1e) {
                _0x60dfx20 = JSON[__Oxe5b4c[0x92]](_0x60dfx1e)
            }
        }
    } catch (e) {
        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x93]}`);
        console[__Oxe5b4c[0xa]](_0x60dfx1e);
        $[__Oxe5b4c[0x55]] = false
    }
    ;
    try {
        switch (_0x60dfx14) {
            case __Oxe5b4c[0x3a]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x95]] == 0) {
                        if (typeof _0x60dfx20[__Oxe5b4c[0x96]] != __Oxe5b4c[0x8e]) {
                            $[__Oxe5b4c[0x38]] = _0x60dfx20[__Oxe5b4c[0x96]]
                        }
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x97]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x98]}${_0x60dfx20[__Oxe5b4c[0x97]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](_0x60dfx1e)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](_0x60dfx1e)
                }
                ;
                break;
            case __Oxe5b4c[0x3f]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        if (_0x60dfx20[__Oxe5b4c[0x9a]] && typeof _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x9b]] != __Oxe5b4c[0x8e]) {
                            $[__Oxe5b4c[0x39]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x9b]]
                        }
                        ;
                        if (_0x60dfx20[__Oxe5b4c[0x9a]] && typeof _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x7c]] != __Oxe5b4c[0x8e]) {
                            $[__Oxe5b4c[0x7c]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x7c]]
                        }
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9c]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x42]:
                $[__Oxe5b4c[0x7a]] = __Oxe5b4c[0x9e];
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        if (_0x60dfx20[__Oxe5b4c[0x9a]] && typeof _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x9f]] != __Oxe5b4c[0x8e]) {
                            $[__Oxe5b4c[0x7a]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x9f]] || $[__Oxe5b4c[0x7a]]
                        }
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9c]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x45]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        $[__Oxe5b4c[0x36]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x36]] || false;
                        $[__Oxe5b4c[0xa0]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x47]] || {};
                        $[__Oxe5b4c[0x33]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x33]] || __Oxe5b4c[0x2];
                        $[__Oxe5b4c[0x54]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xa1]] || [];
                        $[__Oxe5b4c[0x44]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xa2]][__Oxe5b4c[0x9a]][__Oxe5b4c[0x44]] || false;
                        $[__Oxe5b4c[0x43]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xa2]][__Oxe5b4c[0x9a]][__Oxe5b4c[0xa3]] || [];
                        $[__Oxe5b4c[0x5a]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x5a]] || 0
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9c]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x5e]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xa4]}${_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0x1a]]}${__Oxe5b4c[0x2]}`)
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x99]] === false) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xa5]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x59]:
                ;
            case __Oxe5b4c[0x84]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xa6]}`)
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx20[__Oxe5b4c[0x99]]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx20[__Oxe5b4c[0x99]]}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx20[__Oxe5b4c[0x99]]}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x86]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        if (typeof _0x60dfx20[__Oxe5b4c[0x9a]] == __Oxe5b4c[0x94]) {
                            let _0x60dfxe = __Oxe5b4c[0x2];
                            let _0x60dfx21 = _0x60dfx14;
                            if (_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xa7]]) {
                                _0x60dfxe += (_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xa7]][__Oxe5b4c[0xa8]] == true && _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xa7]][__Oxe5b4c[0x57]] + __Oxe5b4c[0xa9]) || __Oxe5b4c[0xaa]
                            }
                            ;
                            if (_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xab]]) {
                                _0x60dfxe += `${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xab]]}${__Oxe5b4c[0xac]}`
                            }
                            ;console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx21}${__Oxe5b4c[0xad]}${_0x60dfxe || _0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx1e[__Oxe5b4c[0x99]]}${__Oxe5b4c[0x2]}`)
                        }
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            $[__Oxe5b4c[0x55]] = false;
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9c]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x60]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true) {
                        let _0x60dfx22 = 0;
                        for (let _0x60dfxd in _0x60dfx20[__Oxe5b4c[0x9a]]) {
                            let _0x60dfx5 = _0x60dfx20[__Oxe5b4c[0x9a]][_0x60dfxd];
                            if (_0x60dfx5[__Oxe5b4c[0xae]][__Oxe5b4c[0x51]](__Oxe5b4c[0xa9]) > -1) {
                                _0x60dfx22 += Number(_0x60dfx5[__Oxe5b4c[0xae]][__Oxe5b4c[0xaf]](__Oxe5b4c[0xa9], __Oxe5b4c[0x2])) || 0
                            }
                        }
                        ;
                        if (_0x60dfx22 > 0) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xb0]}${parseInt(_0x60dfx22, 10) || 0}${__Oxe5b4c[0xa9]}`)
                        }
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9c]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x8b]:
                if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]] === true && _0x60dfx20[__Oxe5b4c[0x9a]]) {
                        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xb1]}${_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xb2]]}${__Oxe5b4c[0xb3]}${_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xb4]]}${__Oxe5b4c[0xb5]}`);
                        $[__Oxe5b4c[0xb4]] = _0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xb4]];
                        $[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xb6]}${_0x60dfx20[__Oxe5b4c[0x9a]][__Oxe5b4c[0xb7]][__Oxe5b4c[0x29]]}${__Oxe5b4c[0xb8]}`)
                    } else {
                        if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx20[__Oxe5b4c[0x9c]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0x9d]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
                }
                ;
                break;
            case __Oxe5b4c[0x41]:
                ;
            case __Oxe5b4c[0x47]:
                break;
            default:
                console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx14}${__Oxe5b4c[0xb9]}${_0x60dfx1e}${__Oxe5b4c[0x2]}`)
        }
        ;
        if (typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
            if (_0x60dfx20[__Oxe5b4c[0x9c]]) {
                if (_0x60dfx20[__Oxe5b4c[0x9c]][__Oxe5b4c[0x51]](__Oxe5b4c[0xba]) > -1) {
                    $[__Oxe5b4c[0x13]] = true
                }
            }
        }
    } catch (e) {
        console[__Oxe5b4c[0xa]](e)
    }
}

function getPostRequest(_0x60dfx15, _0x60dfx16, _0x60dfx17 = __Oxe5b4c[0x65]) {
    let _0x60dfx24 = {
        "\x41\x63\x63\x65\x70\x74": __Oxe5b4c[0xbb],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxe5b4c[0xbc],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxe5b4c[0xbd],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxe5b4c[0xbe],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxe5b4c[0xbf],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe5b4c[0xc0]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxe5b4c[0xc1]
    };
    if (_0x60dfx15[__Oxe5b4c[0x51]](__Oxe5b4c[0x64]) > -1) {
        _0x60dfx24[__Oxe5b4c[0xc2]] = `${__Oxe5b4c[0xc3]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0xc4]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`;
        _0x60dfx24[__Oxe5b4c[0xc5]] = `${__Oxe5b4c[0x64]}`;
        _0x60dfx24[__Oxe5b4c[0xc6]] = `${__Oxe5b4c[0x2]}${lz_jdpin_token_cookie && lz_jdpin_token_cookie || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}${$[__Oxe5b4c[0x39]] && __Oxe5b4c[0xc7] + $[__Oxe5b4c[0x39]] + __Oxe5b4c[0xc8] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}${activityCookie}${__Oxe5b4c[0x2]}`
    }
    ;
    return {url: _0x60dfx15, method: _0x60dfx17, headers: _0x60dfx24, body: _0x60dfx16, timeout: 30000}
}

function getCk() {
    return new Promise((_0x60dfx1b) => {
        let _0x60dfx26 = {
            url: `${__Oxe5b4c[0xc3]}${$[__Oxe5b4c[0x1e]]}${__Oxe5b4c[0x6c]}${$[__Oxe5b4c[0x20]]}${__Oxe5b4c[0x2]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxe5b4c[0xc0]]},
            timeout: 30000
        };
        $[__Oxe5b4c[0xcb]](_0x60dfx26, async (_0x60dfx1c, _0x60dfx1d, _0x60dfx1e) => {
            try {
                if (_0x60dfx1c) {
                    if (_0x60dfx1d && typeof _0x60dfx1d[__Oxe5b4c[0x8d]] != __Oxe5b4c[0x8e]) {
                        if (_0x60dfx1d[__Oxe5b4c[0x8d]] == 493) {
                            console[__Oxe5b4c[0xa]](__Oxe5b4c[0x3e]);
                            $[__Oxe5b4c[0x14]] = true
                        }
                    }
                    ;console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${$[__Oxe5b4c[0x8f]](_0x60dfx1c)}${__Oxe5b4c[0x2]}`);
                    console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${$[__Oxe5b4c[0x1a]]}${__Oxe5b4c[0xc9]}`)
                } else {
                    let _0x60dfx27 = _0x60dfx1e[__Oxe5b4c[0x2b]](/(活动已经结束)/) && _0x60dfx1e[__Oxe5b4c[0x2b]](/(活动已经结束)/)[0x1] || __Oxe5b4c[0x2];
                    if (_0x60dfx27) {
                        $[__Oxe5b4c[0x15]] = true;
                        console[__Oxe5b4c[0xa]](__Oxe5b4c[0xca])
                    }
                    ;setActivityCookie(_0x60dfx1d)
                }
            } catch (e) {
                $[__Oxe5b4c[0x18]](e, _0x60dfx1d)
            } finally {
                _0x60dfx1b()
            }
        })
    })
}

function setActivityCookie(_0x60dfx1d) {
    if (_0x60dfx1d[__Oxe5b4c[0xcd]][__Oxe5b4c[0xcc]]) {
        cookie = `${__Oxe5b4c[0x2]}${originCookie}${__Oxe5b4c[0xc8]}`;
        for (let _0x60dfx29 of _0x60dfx1d[__Oxe5b4c[0xcd]][__Oxe5b4c[0xcc]]) {
            lz_cookie[_0x60dfx29[__Oxe5b4c[0xcf]](__Oxe5b4c[0xc8])[0x0][__Oxe5b4c[0xd0]](0, _0x60dfx29[__Oxe5b4c[0xcf]](__Oxe5b4c[0xc8])[0x0][__Oxe5b4c[0x51]](__Oxe5b4c[0xce]))] = _0x60dfx29[__Oxe5b4c[0xcf]](__Oxe5b4c[0xc8])[0x0][__Oxe5b4c[0xd0]](_0x60dfx29[__Oxe5b4c[0xcf]](__Oxe5b4c[0xc8])[0x0][__Oxe5b4c[0x51]](__Oxe5b4c[0xce]) + 1)
        }
        ;
        for (const _0x60dfx11 of Object[__Oxe5b4c[0x6]](lz_cookie)) {
            cookie += _0x60dfx11 + __Oxe5b4c[0xce] + lz_cookie[_0x60dfx11] + __Oxe5b4c[0xc8]
        }
        ;activityCookie = cookie
    }
}

async function getUA() {
    $[__Oxe5b4c[0xc0]] = `${__Oxe5b4c[0xd1]}${randomString(40)}${__Oxe5b4c[0xd2]}`
}

function randomString(_0x60dfx9) {
    _0x60dfx9 = _0x60dfx9 || 32;
    let _0x60dfx2c = __Oxe5b4c[0xd3], _0x60dfx2d = _0x60dfx2c[__Oxe5b4c[0x29]], _0x60dfxc = __Oxe5b4c[0x2];
    for (i = 0; i < _0x60dfx9; i++) {
        _0x60dfxc += _0x60dfx2c[__Oxe5b4c[0xd4]](Math[__Oxe5b4c[0x28]](Math[__Oxe5b4c[0x27]]() * _0x60dfx2d))
    }
    ;
    return _0x60dfxc
}

function jsonParse(_0x60dfx2f) {
    if (typeof _0x60dfx2f == __Oxe5b4c[0xd5]) {
        try {
            return JSON[__Oxe5b4c[0x92]](_0x60dfx2f)
        } catch (e) {
            console[__Oxe5b4c[0xa]](e);
            $[__Oxe5b4c[0x1d]]($[__Oxe5b4c[0x1a]], __Oxe5b4c[0x2], __Oxe5b4c[0xd6]);
            return []
        }
    }
}

async function joinShop() {
    if (!$[__Oxe5b4c[0x4b]]) {
        return
    }
    ;
    return new Promise(async (_0x60dfx1b) => {
        $[__Oxe5b4c[0x4d]] = __Oxe5b4c[0x50];
        let _0x60dfx31 = `${__Oxe5b4c[0x2]}`;
        if ($[__Oxe5b4c[0xd7]]) {
            _0x60dfx31 = `${__Oxe5b4c[0xd8]}${$[__Oxe5b4c[0xd7]]}${__Oxe5b4c[0x2]}`
        }
        ;let _0x60dfx16 = `${__Oxe5b4c[0xd9]}${$[__Oxe5b4c[0x4b]]}${__Oxe5b4c[0xda]}${$[__Oxe5b4c[0x4b]]}${__Oxe5b4c[0xdb]}${_0x60dfx31}${__Oxe5b4c[0xdc]}`;
        let _0x60dfx32 = await geth5st();
        const _0x60dfx33 = {
            url: `${__Oxe5b4c[0xdd]}${_0x60dfx16}${__Oxe5b4c[0xde]}${_0x60dfx32}${__Oxe5b4c[0x2]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxe5b4c[0xdf],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxe5b4c[0xbc],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxe5b4c[0xe0],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxe5b4c[0xe1],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': __Oxe5b4c[0xe2]
            }
        };
        $[__Oxe5b4c[0xcb]](_0x60dfx33, async (_0x60dfx1c, _0x60dfx1d, _0x60dfx1e) => {
            try {
                _0x60dfx1e = _0x60dfx1e && _0x60dfx1e[__Oxe5b4c[0x2b]](/jsonp_.*?\((.*?)\);/) && _0x60dfx1e[__Oxe5b4c[0x2b]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x60dfx1e;
                let _0x60dfx20 = $[__Oxe5b4c[0xe3]](_0x60dfx1e, _0x60dfx1e);
                if (_0x60dfx20 && typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20 && _0x60dfx20[__Oxe5b4c[0xe4]] === true) {
                        console[__Oxe5b4c[0xa]](_0x60dfx20[__Oxe5b4c[0x97]]);
                        $[__Oxe5b4c[0x4d]] = _0x60dfx20[__Oxe5b4c[0x97]];
                        if (_0x60dfx20[__Oxe5b4c[0x99]] && _0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xe5]]) {
                            for (let _0x60dfxd of _0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xe5]][__Oxe5b4c[0xe6]]) {
                                console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xe7]}${_0x60dfxd[__Oxe5b4c[0xe8]]}${__Oxe5b4c[0x2]}${_0x60dfxd[__Oxe5b4c[0xe9]]}${__Oxe5b4c[0x2]}${_0x60dfxd[__Oxe5b4c[0xea]]}${__Oxe5b4c[0x2]}`)
                            }
                        }
                    } else {
                        if (_0x60dfx20 && typeof _0x60dfx20 == __Oxe5b4c[0x94] && _0x60dfx20[__Oxe5b4c[0x97]]) {
                            $[__Oxe5b4c[0x4d]] = _0x60dfx20[__Oxe5b4c[0x97]];
                            console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0x2]}${_0x60dfx20[__Oxe5b4c[0x97]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`)
                        } else {
                            console[__Oxe5b4c[0xa]](_0x60dfx1e)
                        }
                    }
                } else {
                    console[__Oxe5b4c[0xa]](_0x60dfx1e)
                }
            } catch (e) {
                $[__Oxe5b4c[0x18]](e, _0x60dfx1d)
            } finally {
                _0x60dfx1b()
            }
        })
    })
}

async function getshopactivityId() {
    return new Promise(async (_0x60dfx1b) => {
        let _0x60dfx16 = `${__Oxe5b4c[0xd9]}${$[__Oxe5b4c[0x4b]]}${__Oxe5b4c[0xeb]}`;
        let _0x60dfx32 = await geth5st();
        const _0x60dfx33 = {
            url: `${__Oxe5b4c[0xec]}${_0x60dfx16}${__Oxe5b4c[0xde]}${_0x60dfx32}${__Oxe5b4c[0x2]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxe5b4c[0xdf],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxe5b4c[0xbc],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxe5b4c[0xe0],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxe5b4c[0xe1],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': __Oxe5b4c[0xe2]
            }
        };
        $[__Oxe5b4c[0xcb]](_0x60dfx33, async (_0x60dfx1c, _0x60dfx1d, _0x60dfx1e) => {
            try {
                _0x60dfx1e = _0x60dfx1e && _0x60dfx1e[__Oxe5b4c[0x2b]](/jsonp_.*?\((.*?)\);/) && _0x60dfx1e[__Oxe5b4c[0x2b]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x60dfx1e;
                let _0x60dfx20 = $[__Oxe5b4c[0xe3]](_0x60dfx1e, _0x60dfx1e);
                if (_0x60dfx20 && typeof _0x60dfx20 == __Oxe5b4c[0x94]) {
                    if (_0x60dfx20 && _0x60dfx20[__Oxe5b4c[0xe4]] == true) {
                        console[__Oxe5b4c[0xa]](`${__Oxe5b4c[0xed]}${_0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xef]][__Oxe5b4c[0xee]] || __Oxe5b4c[0x2]}${__Oxe5b4c[0x2]}`);
                        $[__Oxe5b4c[0xd7]] = _0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xf0]] && _0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xf0]][0x0] && _0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xf0]][0x0][__Oxe5b4c[0xf1]] && _0x60dfx20[__Oxe5b4c[0x99]][__Oxe5b4c[0xf0]][0x0][__Oxe5b4c[0xf1]][__Oxe5b4c[0x1e]] || __Oxe5b4c[0x2]
                    }
                } else {
                    console[__Oxe5b4c[0xa]](_0x60dfx1e)
                }
            } catch (e) {
                $[__Oxe5b4c[0x18]](e, _0x60dfx1d)
            } finally {
                _0x60dfx1b()
            }
        })
    })
}

var _0xodb = __Oxe5b4c[0xf2], _0xodb_ = [__Oxe5b4c[0xf3]],
    _0x3c1b = [_0xodb, __Oxe5b4c[0xf4], __Oxe5b4c[0xf5], __Oxe5b4c[0xf6], __Oxe5b4c[0xf7], __Oxe5b4c[0xf8], __Oxe5b4c[0xf9], __Oxe5b4c[0xfa], __Oxe5b4c[0xfb], __Oxe5b4c[0xfc], __Oxe5b4c[0xfd], __Oxe5b4c[0xfe], __Oxe5b4c[0xff], __Oxe5b4c[0x100], __Oxe5b4c[0x101], __Oxe5b4c[0x102], __Oxe5b4c[0x103], __Oxe5b4c[0x104], __Oxe5b4c[0x105], __Oxe5b4c[0x106], __Oxe5b4c[0x107], __Oxe5b4c[0x108], __Oxe5b4c[0x109], __Oxe5b4c[0x10a], __Oxe5b4c[0x10b], __Oxe5b4c[0x10c], __Oxe5b4c[0x10d], __Oxe5b4c[0x10e], __Oxe5b4c[0x10f], __Oxe5b4c[0x110], __Oxe5b4c[0x111], __Oxe5b4c[0x112], __Oxe5b4c[0x113], __Oxe5b4c[0x114], __Oxe5b4c[0x115], __Oxe5b4c[0x116], __Oxe5b4c[0x117], __Oxe5b4c[0x118], __Oxe5b4c[0x119], __Oxe5b4c[0x11a], __Oxe5b4c[0x11b], __Oxe5b4c[0x11c], __Oxe5b4c[0x11d]];
if (function (_0x60dfx38, _0x60dfx39, _0x60dfx3a) {
    function _0x60dfx3b(_0x60dfx3c, _0x60dfx3d, _0x60dfx3e, _0x60dfx3f, _0x60dfx40, _0x60dfx41) {
        _0x60dfx3d = _0x60dfx3d >> 0x8, _0x60dfx40 = __Oxe5b4c[0x11e];
        var _0x60dfx42 = __Oxe5b4c[0x11f], _0x60dfx43 = __Oxe5b4c[0x4], _0x60dfx41 = __Oxe5b4c[0x120];
        if (_0x60dfx3d < _0x60dfx3c) {
            while (--_0x60dfx3c) {
                _0x60dfx3f = _0x60dfx38[_0x60dfx42]();
                if (_0x60dfx3d === _0x60dfx3c && _0x60dfx41 === __Oxe5b4c[0x120] && _0x60dfx41[__Oxe5b4c[0x29]] === 0x1) {
                    _0x60dfx3d = _0x60dfx3f, _0x60dfx3e = _0x60dfx38[_0x60dfx40 + __Oxe5b4c[0x121]]()
                } else {
                    if (_0x60dfx3d && _0x60dfx3e[__Oxe5b4c[0xaf]](/[xNUxuLOwqBleVKE=]/g, __Oxe5b4c[0x2]) === _0x60dfx3d) {
                        _0x60dfx38[_0x60dfx43](_0x60dfx3f)
                    }
                }
            }
            ;_0x60dfx38[_0x60dfx43](_0x60dfx38[_0x60dfx42]())
        }
        ;
        return 0xec806
    }

    return _0x60dfx3b(++_0x60dfx39, _0x60dfx3a) >> _0x60dfx39 ^ _0x60dfx3a
}(_0x3c1b, 0x19b, 0x19b00), _0x3c1b) {
    _0xodb_ = _0x3c1b[__Oxe5b4c[0x29]] ^ 0x19b
}
;

function _0x80d0(_0x60dfx45, _0x60dfx46) {
    _0x60dfx45 = ~~__Oxe5b4c[0x124][__Oxe5b4c[0x123]](_0x60dfx45[__Oxe5b4c[0x122]](0x1));
    var _0x60dfx47 = _0x3c1b[_0x60dfx45];
    if (_0x80d0[__Oxe5b4c[0x125]] === undefined) {
        (function () {
            var _0x60dfx48 = typeof window !== __Oxe5b4c[0x8e] ? window : typeof process === __Oxe5b4c[0x94] && typeof require === __Oxe5b4c[0x126] && typeof global === __Oxe5b4c[0x94] ? global : this;
            var _0x60dfx49 = __Oxe5b4c[0x127];
            _0x60dfx48[__Oxe5b4c[0x128]] || (_0x60dfx48[__Oxe5b4c[0x128]] = function (_0x60dfx4a) {
                var _0x60dfx4b = String(_0x60dfx4a)[__Oxe5b4c[0xaf]](/=+$/, __Oxe5b4c[0x2]);
                for (var _0x60dfx4c = 0x0, _0x60dfx4d, _0x60dfx4e, _0x60dfx4f = 0x0, _0x60dfx50 = __Oxe5b4c[0x2]; _0x60dfx4e = _0x60dfx4b[__Oxe5b4c[0xd4]](_0x60dfx4f++); ~_0x60dfx4e && (_0x60dfx4d = _0x60dfx4c % 0x4 ? _0x60dfx4d * 0x40 + _0x60dfx4e : _0x60dfx4e, _0x60dfx4c++ % 0x4) ? _0x60dfx50 += String[__Oxe5b4c[0x129]](0xff & _0x60dfx4d >> (-0x2 * _0x60dfx4c & 0x6)) : 0x0) {
                    _0x60dfx4e = _0x60dfx49[__Oxe5b4c[0x51]](_0x60dfx4e)
                }
                ;
                return _0x60dfx50
            })
        }());

        function _0x60dfx51(_0x60dfx52, _0x60dfx46) {
            var _0x60dfx53 = [], _0x60dfx54 = 0x0, _0x60dfx55, _0x60dfx56 = __Oxe5b4c[0x2], _0x60dfx57 = __Oxe5b4c[0x2];
            _0x60dfx52 = atob(_0x60dfx52);
            for (var _0x60dfx58 = 0x0, _0x60dfx59 = _0x60dfx52[__Oxe5b4c[0x29]]; _0x60dfx58 < _0x60dfx59; _0x60dfx58++) {
                _0x60dfx57 += __Oxe5b4c[0x12a] + (__Oxe5b4c[0x12b] + _0x60dfx52[__Oxe5b4c[0x12d]](_0x60dfx58)[__Oxe5b4c[0x12c]](0x10))[__Oxe5b4c[0x122]](-0x2)
            }
            ;_0x60dfx52 = decodeURIComponent(_0x60dfx57);
            for (var _0x60dfx5a = 0x0; _0x60dfx5a < 0x100; _0x60dfx5a++) {
                _0x60dfx53[_0x60dfx5a] = _0x60dfx5a
            }
            ;
            for (_0x60dfx5a = 0x0; _0x60dfx5a < 0x100; _0x60dfx5a++) {
                _0x60dfx54 = (_0x60dfx54 + _0x60dfx53[_0x60dfx5a] + _0x60dfx46[__Oxe5b4c[0x12d]](_0x60dfx5a % _0x60dfx46[__Oxe5b4c[0x29]])) % 0x100;
                _0x60dfx55 = _0x60dfx53[_0x60dfx5a];
                _0x60dfx53[_0x60dfx5a] = _0x60dfx53[_0x60dfx54];
                _0x60dfx53[_0x60dfx54] = _0x60dfx55
            }
            ;_0x60dfx5a = 0x0;
            _0x60dfx54 = 0x0;
            for (var _0x60dfx5b = 0x0; _0x60dfx5b < _0x60dfx52[__Oxe5b4c[0x29]]; _0x60dfx5b++) {
                _0x60dfx5a = (_0x60dfx5a + 0x1) % 0x100;
                _0x60dfx54 = (_0x60dfx54 + _0x60dfx53[_0x60dfx5a]) % 0x100;
                _0x60dfx55 = _0x60dfx53[_0x60dfx5a];
                _0x60dfx53[_0x60dfx5a] = _0x60dfx53[_0x60dfx54];
                _0x60dfx53[_0x60dfx54] = _0x60dfx55;
                _0x60dfx56 += String[__Oxe5b4c[0x129]](_0x60dfx52[__Oxe5b4c[0x12d]](_0x60dfx5b) ^ _0x60dfx53[(_0x60dfx53[_0x60dfx5a] + _0x60dfx53[_0x60dfx54]) % 0x100])
            }
            ;
            return _0x60dfx56
        }

        _0x80d0[__Oxe5b4c[0x12e]] = _0x60dfx51;
        _0x80d0[__Oxe5b4c[0x12f]] = {};
        _0x80d0[__Oxe5b4c[0x125]] = !![]
    }
    ;var _0x60dfx5c = _0x80d0[__Oxe5b4c[0x12f]][_0x60dfx45];
    if (_0x60dfx5c === undefined) {
        if (_0x80d0[__Oxe5b4c[0x130]] === undefined) {
            _0x80d0[__Oxe5b4c[0x130]] = !![]
        }
        ;_0x60dfx47 = _0x80d0[__Oxe5b4c[0x12e]](_0x60dfx47, _0x60dfx46);
        _0x80d0[__Oxe5b4c[0x12f]][_0x60dfx45] = _0x60dfx47
    } else {
        _0x60dfx47 = _0x60dfx5c
    }
    ;
    return _0x60dfx47
}

function generateFp() {
    var _0x60dfx5e = {
        '\x72\x79\x6F\x50\x79': __Oxe5b4c[0x131],
        '\x6D\x66\x76\x77\x4B': function (_0x60dfx5f, _0x60dfx60) {
            return _0x60dfx5f | _0x60dfx60
        },
        '\x57\x75\x74\x44\x55': function (_0x60dfx61, _0x60dfx62) {
            return _0x60dfx61 + _0x60dfx62
        }
    };
    let _0x60dfx63 = _0x60dfx5e[_0x80d0(__Oxe5b4c[0x132], __Oxe5b4c[0x133])];
    let _0x60dfx64 = 0xd;
    let _0x60dfx65 = __Oxe5b4c[0x2];
    for (; _0x60dfx64--;) {
        _0x60dfx65 += _0x60dfx63[_0x60dfx5e[_0x80d0(__Oxe5b4c[0x136], __Oxe5b4c[0x137])](Math[__Oxe5b4c[0x27]]() * _0x60dfx63[_0x80d0(__Oxe5b4c[0x134], __Oxe5b4c[0x135])], 0x0)]
    }
    ;
    return _0x60dfx5e[_0x80d0(__Oxe5b4c[0x13c], __Oxe5b4c[0x137])](_0x60dfx65, Date[_0x80d0(__Oxe5b4c[0x13a], __Oxe5b4c[0x13b])]())[_0x80d0(__Oxe5b4c[0x138], __Oxe5b4c[0x139])](0x0, 0x10)
}

function geth5st() {
    var _0x60dfx67 = {
        '\x58\x4C\x46\x59\x50': __Oxe5b4c[0x13d],
        '\x45\x52\x64\x7A\x79': __Oxe5b4c[0x13e],
        '\x65\x61\x46\x76\x73': _0x80d0(__Oxe5b4c[0x13f], __Oxe5b4c[0x140]),
        '\x4E\x71\x6B\x6C\x51': function (_0x60dfx68, _0x60dfx69) {
            return _0x60dfx68(_0x60dfx69)
        },
        '\x44\x71\x72\x71\x48': function (_0x60dfx6a, _0x60dfx6b) {
            return _0x60dfx6a + _0x60dfx6b
        },
        '\x47\x45\x44\x70\x61': function (_0x60dfx6c, _0x60dfx6d) {
            return _0x60dfx6c + _0x60dfx6d
        },
        '\x74\x4A\x72\x79\x4A': function (_0x60dfx6e, _0x60dfx6f) {
            return _0x60dfx6e + _0x60dfx6f
        }
    };
    let _0x60dfx70 = Date[_0x80d0(__Oxe5b4c[0x141], __Oxe5b4c[0x142])]();
    let _0x60dfx71 = generateFp();
    let _0x60dfx72 = new Date(_0x60dfx70)[__Oxe5b4c[0x144]](_0x60dfx67[_0x80d0(__Oxe5b4c[0x143], __Oxe5b4c[0x139])]);
    let _0x60dfx73 = [_0x60dfx67[__Oxe5b4c[0x145]], _0x60dfx67[_0x80d0(__Oxe5b4c[0x146], __Oxe5b4c[0x147])]];
    let _0x60dfx74 = _0x60dfx73[random(0x0, _0x60dfx73[__Oxe5b4c[0x29]])];
    return _0x60dfx67[_0x80d0(__Oxe5b4c[0x14e], __Oxe5b4c[0x14f])](encodeURIComponent, _0x60dfx67[__Oxe5b4c[0x14d]](_0x60dfx67[_0x80d0(__Oxe5b4c[0x149], __Oxe5b4c[0x14a])](_0x60dfx67[_0x80d0(__Oxe5b4c[0x148], __Oxe5b4c[0x13b])](_0x60dfx72, __Oxe5b4c[0xc8]) + _0x60dfx71, _0x60dfx74), Date[_0x80d0(__Oxe5b4c[0x14b], __Oxe5b4c[0x14c])]()))
}

Date[_0x80d0(__Oxe5b4c[0x151], __Oxe5b4c[0x152])][_0x80d0(__Oxe5b4c[0x150], __Oxe5b4c[0x133])] = function (_0x60dfx75) {
    var _0x60dfx76 = {
        '\x77\x47\x41\x56\x6C': function (_0x60dfx77, _0x60dfx78) {
            return _0x60dfx77 / _0x60dfx78
        }, '\x61\x62\x6F\x72\x43': function (_0x60dfx79, _0x60dfx7a) {
            return _0x60dfx79 + _0x60dfx7a
        }, '\x6B\x68\x76\x79\x41': function (_0x60dfx7b, _0x60dfx7c) {
            return _0x60dfx7b === _0x60dfx7c
        }, '\x52\x6B\x68\x48\x4E': function (_0x60dfx7d, _0x60dfx7e) {
            return _0x60dfx7d == _0x60dfx7e
        }
    };
    var _0x60dfx7f, _0x60dfx80 = this, _0x60dfx81 = _0x60dfx75, _0x60dfx82 = {
        '\x4D\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x153], __Oxe5b4c[0x154])]() + 0x1,
        '\x64\x2B': _0x60dfx80[__Oxe5b4c[0x155]](),
        '\x44\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x156], __Oxe5b4c[0x157])](),
        '\x68\x2B': _0x60dfx80[__Oxe5b4c[0x158]](),
        '\x48\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x159], __Oxe5b4c[0x15a])](),
        '\x6D\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x15b], __Oxe5b4c[0x15c])](),
        '\x73\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x15d], __Oxe5b4c[0x142])](),
        '\x77\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x15e], __Oxe5b4c[0x15f])](),
        '\x71\x2B': Math[_0x80d0(__Oxe5b4c[0x163], __Oxe5b4c[0x157])](_0x60dfx76[__Oxe5b4c[0x162]](_0x60dfx76[_0x80d0(__Oxe5b4c[0x161], __Oxe5b4c[0x142])](_0x60dfx80[__Oxe5b4c[0x160]](), 0x3), 0x3)),
        '\x53\x2B': _0x60dfx80[_0x80d0(__Oxe5b4c[0x164], __Oxe5b4c[0x165])]()
    };
    /(y+)/i[__Oxe5b4c[0x166]](_0x60dfx81) && (_0x60dfx81 = _0x60dfx81[_0x80d0(__Oxe5b4c[0x16f], __Oxe5b4c[0x170])](RegExp[__Oxe5b4c[0x167]], __Oxe5b4c[0x2][_0x80d0(__Oxe5b4c[0x16e], __Oxe5b4c[0x165])](_0x60dfx80[_0x80d0(__Oxe5b4c[0x16c], __Oxe5b4c[0x16d])]())[_0x80d0(__Oxe5b4c[0x16a], __Oxe5b4c[0x16b])](0x4 - RegExp[__Oxe5b4c[0x167]][_0x80d0(__Oxe5b4c[0x168], __Oxe5b4c[0x169])])));
    for (var _0x60dfx83 in _0x60dfx82) {
        if (new RegExp(__Oxe5b4c[0x174][_0x80d0(__Oxe5b4c[0x173], __Oxe5b4c[0x137])](_0x60dfx83, __Oxe5b4c[0x172]))[_0x80d0(__Oxe5b4c[0x171], __Oxe5b4c[0x13b])](_0x60dfx81)) {
            var _0x60dfx84,
                _0x60dfx85 = _0x60dfx76[__Oxe5b4c[0x176]](__Oxe5b4c[0x175], _0x60dfx83) ? _0x80d0(__Oxe5b4c[0x177], __Oxe5b4c[0x178]) : __Oxe5b4c[0x12b];
            _0x60dfx81 = _0x60dfx81[__Oxe5b4c[0xaf]](RegExp[__Oxe5b4c[0x167]], _0x60dfx76[_0x80d0(__Oxe5b4c[0x17a], __Oxe5b4c[0x17b])](0x1, RegExp[__Oxe5b4c[0x167]][_0x80d0(__Oxe5b4c[0x179], __Oxe5b4c[0x133])]) ? _0x60dfx82[_0x60dfx83] : _0x60dfx76[_0x80d0(__Oxe5b4c[0x17e], __Oxe5b4c[0x17f])](__Oxe5b4c[0x2][__Oxe5b4c[0x123]](_0x60dfx85), _0x60dfx82[_0x60dfx83])[__Oxe5b4c[0xd0]](__Oxe5b4c[0x2][_0x80d0(__Oxe5b4c[0x17d], __Oxe5b4c[0x16b])](_0x60dfx82[_0x60dfx83])[_0x80d0(__Oxe5b4c[0x17c], __Oxe5b4c[0x14c])]))
        }
    }
    ;
    return _0x60dfx81
};

function random(_0x60dfx87, _0x60dfx88) {
    var _0x60dfx89 = {
        '\x4E\x7A\x4D\x76\x42': function (_0x60dfx8a, _0x60dfx8b) {
            return _0x60dfx8a + _0x60dfx8b
        }, '\x70\x76\x4C\x52\x62': function (_0x60dfx8c, _0x60dfx8d) {
            return _0x60dfx8c * _0x60dfx8d
        }, '\x4B\x4E\x67\x41\x43': function (_0x60dfx8e, _0x60dfx8f) {
            return _0x60dfx8e - _0x60dfx8f
        }
    };
    return _0x60dfx89[_0x80d0(__Oxe5b4c[0x184], __Oxe5b4c[0x15a])](Math[_0x80d0(__Oxe5b4c[0x182], __Oxe5b4c[0x183])](_0x60dfx89[_0x80d0(__Oxe5b4c[0x181], __Oxe5b4c[0x16b])](Math[__Oxe5b4c[0x27]](), _0x60dfx89[__Oxe5b4c[0x180]](_0x60dfx88, _0x60dfx87))), _0x60dfx87)
}

_0xodb = __Oxe5b4c[0xf2];
;
;(function (_0x60dfx90, _0x60dfx91, _0x60dfx92, _0x60dfx93, _0x60dfx94, _0x60dfx95) {
    _0x60dfx95 = __Oxe5b4c[0x8e];
    _0x60dfx93 = function (_0x60dfx96) {
        if (typeof alert !== _0x60dfx95) {
            alert(_0x60dfx96)
        }
        ;
        if (typeof console !== _0x60dfx95) {
            console[__Oxe5b4c[0xa]](_0x60dfx96)
        }
    };
    _0x60dfx92 = function (_0x60dfx2d, _0x60dfx90) {
        return _0x60dfx2d + _0x60dfx90
    };
    _0x60dfx94 = _0x60dfx92(__Oxe5b4c[0x185], _0x60dfx92(_0x60dfx92(__Oxe5b4c[0x186], __Oxe5b4c[0x187]), __Oxe5b4c[0x188]));
    try {
        _0x60dfx90 = __encode;
        if (!(typeof _0x60dfx90 !== _0x60dfx95 && _0x60dfx90 === _0x60dfx92(__Oxe5b4c[0x189], __Oxe5b4c[0x18a]))) {
            _0x60dfx93(_0x60dfx94)
        }
    } catch (e) {
        _0x60dfx93(_0x60dfx94)
    }
})({})

// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
