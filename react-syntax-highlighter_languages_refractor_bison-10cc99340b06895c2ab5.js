(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"31EH":function(n,e,a){"use strict";var s=a("pr4O");function i(n){n.register(s),n.languages.bison=n.languages.extend("c",{}),n.languages.insertBefore("bison","comment",{bison:{pattern:/^[\s\S]*?%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:n.languages.c}},comment:n.languages.c.comment,string:n.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}n.exports=i,i.displayName="bison",i.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_bison-10cc99340b06895c2ab5.js.map