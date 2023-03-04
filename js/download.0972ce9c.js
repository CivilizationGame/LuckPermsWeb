(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["download"],{"0ae5":function(t,n,e){t.exports=e.p+"img/sponge.0f8879f0.png"},"1ab6":function(t,n,e){t.exports=e.p+"img/velocity.f5357f94.png"},"30c0":function(t,n,e){},3971:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"download"},[e("section",{staticClass:"hero"},[e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.$t("download.title")))]),e("div",{staticClass:"version"},[e("p",[e("span",[t._v("v"+t._s(t.version))])]),e("p",[t._v(t._s(t.$t("download.build",{time:t.relativeTimestamp})))]),t.version?t._e():e("font-awesome",{attrs:{icon:"asterisk",spin:!0}})],1)])]),e("div",{staticClass:"container"},[e("section",{staticClass:"resources"},[e("div",[e("h2",[t._v(t._s(t.$t("download.typeChoose")))]),e("a",{staticClass:"resource",attrs:{href:t.downloads.bukkit},on:{click:function(n){return t.logDownload("bukkit")}}},[t._m(0),e("small",[t._v(t._s(t.$t("download.bukkit")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads.sponge},on:{click:function(n){return t.logDownload("sponge")}}},[t._m(1),e("small",[t._v(t._s(t.$t("download.sponge")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads.fabric},on:{click:function(n){return t.logDownload("fabric")}}},[t._m(2),e("small",[t._v(t._s(t.$t("download.fabric")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads.forge},on:{click:function(n){return t.logDownload("forge")}}},[t._m(3),e("small",[t._v(t._s(t.$t("download.forge")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads.nukkit},on:{click:function(n){return t.logDownload("nukkit")}}},[t._m(4),e("small",[t._v(t._s(t.$t("download.nukkit")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads.velocity},on:{click:function(n){return t.logDownload("velocity")}}},[t._m(5),e("small",[t._v(t._s(t.$t("download.velocity")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads.bungee},on:{click:function(n){return t.logDownload("bungee")}}},[t._m(6),e("small",[t._v(t._s(t.$t("download.bungee")))])]),e("a",{staticClass:"resource",attrs:{href:t.downloads["bukkit-legacy"]},on:{click:function(n){return t.logDownload("bukkit-legacy")}}},[t._m(7),e("small",[t._v(t._s(t.$t("download.bukkitLegacy")))])]),e("button",{staticClass:"button",on:{click:t.openQuiz}},[e("font-awesome",{attrs:{icon:"question-circle"}}),t._v("\n          "+t._s(t.$t("download.typeHelp"))+"\n        ")],1)]),e("div",[e("h2",[t._v(t._s(t.$t("download.changelog")))]),e("ul",{staticClass:"changelog"},t._l(t.changeLog,(function(n){return e("li",{key:n.version},[e("span",[e("a",{attrs:{href:"https://github.com/LuckPerms/LuckPerms/commit/"+n.commit,target:"_blank"}},[e("code",[t._v("v"+t._s(n.version))])]),e("span",{staticClass:"title"},[t._v(t._s(n.title))])]),e("span",{staticClass:"time lighter"},[t._v(t._s(t.relativeDate(n.timestamp)))])])})),0),e("h2",[t._v(t._s(t.$t("download.install.title")))]),e("ol",[e("li",{domProps:{innerHTML:t._s(t.$t("download.install.add"))}}),e("li",{domProps:{innerHTML:t._s(t.$t("download.install.restart"))}}),e("li",{domProps:{innerHTML:t._s(t.$t("download.install.config"))}}),e("i18n",{attrs:{path:"download.install.setup",tag:"li"},scopedSlots:t._u([{key:"wiki",fn:function(){return[e("router-link",{attrs:{to:"wiki/Usage"}},[t._v("\n                "+t._s(t.$t("download.install.wiki"))+"\n              ")])]},proxy:!0}])})],1),e("h2",[t._v(t._s(t.$t("download.trouble.title")))]),e("ul",[e("li",{domProps:{innerHTML:t._s(t.$t("download.trouble.console"))}}),e("i18n",{attrs:{path:"download.trouble.read",tag:"li"},scopedSlots:t._u([{key:"wiki",fn:function(){return[e("router-link",{attrs:{to:"wiki/Installation"}},[t._v("\n                "+t._s(t.$t("download.trouble.wiki"))+"\n              ")])]},proxy:!0}])}),e("i18n",{attrs:{path:"download.trouble.support",tag:"li"},scopedSlots:t._u([{key:"discord",fn:function(){return[e("a",{attrs:{href:"https://discord.gg/luckperms",target:"_blank"}},[t._v("Discord")])]},proxy:!0}])})],1)])])]),e("section",{staticClass:"hero extensions"},[e("div",{staticClass:"container"},[e("div",[e("h1",[t._v(t._s(t.$t("download.extensions.title")))]),e("i18n",{attrs:{path:"download.extensions.description",tag:"p"},scopedSlots:t._u([{key:"wiki",fn:function(){return[e("router-link",{attrs:{to:"/wiki/Extensions"}},[t._v("\n              "+t._s(t.$t("download.extensions.descriptionWiki"))+"\n            ")])]},proxy:!0}])})],1)])]),e("div",{staticClass:"container extensions"},[e("section",{staticClass:"resources"},[e("div",[e("a",{staticClass:"resource",attrs:{href:t.extensions["extension-legacy-api"]},on:{click:function(n){return t.logDownload("extension-legacy-api")}}},[e("span",[e("font-awesome",{attrs:{icon:"arrow-alt-circle-down"}}),t._v("\n            "+t._s(t.$t("download.extensions.legacy"))+"\n          ")],1),e("small",[t._v(t._s(t.$t("download.extensions.version")))])]),e("div",[e("p",[t._v(t._s(t.$t("download.extensions.legacyInfo")))]),e("i18n",{attrs:{path:"download.extensions.more",tag:"p"},scopedSlots:t._u([{key:"wiki",fn:function(){return[e("router-link",{attrs:{to:"/wiki/Extensions#extension-legacy-api"}},[t._v("\n                "+t._s(t.$t("download.extensions.wiki"))+"\n              ")])]},proxy:!0}])})],1)]),e("div",[e("a",{staticClass:"resource",attrs:{href:t.extensions["extension-default-assignments"]},on:{click:function(n){return t.logDownload("extension-default-assignments")}}},[e("span",[e("font-awesome",{attrs:{icon:"arrow-alt-circle-down"}}),t._v("\n            "+t._s(t.$t("download.extensions.defaultAssignments"))+"\n          ")],1),e("small",[t._v(t._s(t.$t("download.extensions.version")))])]),e("div",[e("i18n",{attrs:{path:"download.extensions.defaultAssignmentsInfo",tag:"p"},scopedSlots:t._u([{key:"wiki",fn:function(){return[e("router-link",{attrs:{to:"/wiki/Default-Groups"}},[t._v("\n                "+t._s(t.$t("download.extensions.groups"))+"\n              ")])]},proxy:!0}])}),e("p",[t._v("Check out the "),e("router-link",{attrs:{to:"/wiki/Extensions#extension-default-assignments"}},[t._v("wiki\n            section")]),t._v(" for more information. See also\n            "),e("a",{attrs:{href:"/wiki/Default-Groups#configure-default-assignments"}},[t._v("this section")]),t._v(" about\n            configuring default assignments.\n          ")],1)],1)])])]),t._m(8),e("div",{staticClass:"container additional-plugins"},[e("section",{staticClass:"resources"},[e("div",[e("a",{staticClass:"resource",attrs:{href:t.additionalPlugins["extracontexts"]}},[e("span",[e("font-awesome",{attrs:{icon:"arrow-alt-circle-down"}}),t._v("\n            ExtraContexts Plugin\n          ")],1),e("small",[t._v("LuckPerms 5.0 and above, Bukkit only")])]),t._m(9)])])]),e("section",{staticClass:"hero placeholder-expansions"},[e("div",{staticClass:"container"},[e("div",[e("h1",[t._v("Placeholder Expansions")]),e("p",[t._v("\n          LuckPerms adds\n          "),e("router-link",{attrs:{to:"/wiki/Placeholders#placeholders"}},[t._v("placeholders")]),t._v("\n          to PlaceholderAPI and MVdWPlaceholderAPI\n        .\n        ")],1)])])]),e("div",{staticClass:"container placeholder-expansions"},[e("section",{staticClass:"resources"},[e("div",[e("a",{staticClass:"resource",attrs:{href:t.placeholderExpansions["bukkit-placeholderapi"]}},[e("span",[e("font-awesome",{attrs:{icon:"arrow-alt-circle-down"}}),t._v("\n            PlaceholderAPI\n          ")],1),e("small",[t._v("LuckPerms 5.0 and above, Bukkit only")])]),e("div",[e("p",[t._v("\n            Install using either\n            "),e("code",[t._v("/papi ecloud download LuckPerms")]),t._v("\n            or by\n            "),e("router-link",{attrs:{to:"/wiki/Placeholders#manual-install"}},[t._v("installing manually")]),t._v("\n            .\n          ")],1)])]),e("div",[e("a",{staticClass:"resource",attrs:{href:t.placeholderExpansions["bukkit-mvdw"]}},[e("span",[e("font-awesome",{attrs:{icon:"arrow-alt-circle-down"}}),t._v("\n            MVdWPlaceholderAPI\n          ")],1),e("small",[t._v("LuckPerms 5.0 and above, Bukkit only")])]),t._m(10)]),e("div",[e("a",{staticClass:"resource",attrs:{href:t.placeholderExpansions["fabric-placeholderapi"]}},[e("span",[e("font-awesome",{attrs:{icon:"arrow-alt-circle-down"}}),t._v("\n            Fabric PlaceholderAPI\n          ")],1),e("small",[t._v("LuckPerms 5.0 and above, Fabric only")])]),t._m(11)])])]),e("transition",{attrs:{name:"fade"}},[t.quiz.open?e("Quiz",{attrs:{downloads:t.downloads},on:{close:function(n){t.quiz.open=!1}}}):t._e()],1)],1)},o=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("611c"),alt:"Bukkit"}}),t._v("\n            Bukkit\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("0ae5"),alt:"Sponge"}}),t._v("\n            Sponge\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("eb2f"),alt:"Fabric"}}),t._v("\n            Fabric\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("7e2e"),alt:"Forge"}}),t._v("\n            Forge\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("eaf1"),alt:"Nukkit"}}),t._v("\n            Nukkit\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("1ab6"),alt:"Velocity"}}),t._v("\n            Velocity\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("7479"),alt:"BungeeCord"}}),t._v("\n            BungeeCord\n          ")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("span",[s("img",{attrs:{src:e("611c"),alt:"Bukkit"}}),t._v("\n            Bukkit Legacy\n          ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"hero additional-plugins"},[e("div",{staticClass:"container"},[e("div",[e("h1",[t._v("Additional Plugins")]),e("p",[t._v("\n          Additional plugins can provide more complex features,\n          but may not be available on all platforms\n        .\n        ")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("Add more contexts, including some for other plugins")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("Place the JAR file in your "),e("code",[t._v("/plugins/")]),t._v(" folder.")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("Place the JAR file in your "),e("code",[t._v("/mods/")]),t._v(" folder.")])])}],a=e("84df"),i={name:"Download",metaInfo:{title:"Download"},components:{Quiz:function(){return e.e("chunk-0ccc2b65").then(e.bind(null,"006c"))}},data:function(){return{quiz:{open:!1}}},computed:{extensions:function(){return this.$store.getters.extensions},additionalPlugins:function(){return this.$store.getters.additionalPlugins},placeholderExpansions:function(){return this.$store.getters.placeholderExpansions},downloads:function(){return this.$store.getters.downloads},version:function(){return this.$store.getters.version},versionTimestamp:function(){return this.$store.getters.versionTimestamp},relativeTimestamp:function(){return this.versionTimestamp?Object(a["a"])(this.versionTimestamp,this.$i18n.locale,(new Date).getTime(),!0):null},changeLog:function(){return this.$store.getters.changeLog}},methods:{logDownload:function(t){plausible("Download",{props:{type:t}})},openQuiz:function(){this.quiz.open=!0},closeQuiz:function(){this.quiz.open=!1},relativeDate:function(t){return Object(a["a"])(t,this.$i18n.locale)}}},r=i,l=(e("eeb3"),e("2877")),c=Object(l["a"])(r,s,o,!1,null,null,null);n["default"]=c.exports},"611c":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAACo1BMVEVHcEzjjD+oqKhycnKWlpbY2Ng1NTX///////9RUVH////k0lzn5+fKysriz1rLRie/ln7MRiiromurgmvFQCHDPh+VjFWpqamVbFWje2PYUzS/tn7qk0bchjjq12LpkkXf39/b29vg4ODa2trc3NzX19fm5ubZ2dnOzs7e3t7V1dWnp6f36efW1tbMzMzQ0NDz8/PNzc335+W0tLTy8vLLy8vd3d3Pz8/l5eXx8fH35uTBwcHk5OS+vr7T09PS0tKxsbH46uidnZ346+rx19Py2db57evo6OjgnZPz29fh4eHy2NTR0dG/v7/57ezU1NTs7Ozel4zq6urp6env7+/w8PC7u7vi4uKvr6+wsLD14t/r6+vu7u61tbVUVFT46+mfn59+fn6urq736Ob24+F0dHTj4+P25eL14d7t7e3039xNTU2rq6tsbGz77+f25uPz3Nj57uz88+1lZWVubm7z3dpfX19VVVVvb2/Jyclqamr77eRSUlJMTExaWlry2dX47Or88er88uv66N1QUFD77uZbW1tOTk6srKz66t/66d704N1jY2P66NxeXl766+Cmpqbz29j25eP88OnFxcXuq3j03dqzs7OlpaX76+JdXV1mZmZWVlatra1CQkJoaGjXfGz55tnCwsI/Pz/urHn03ttwcHBhYWH55djWemqkpKTurn6ysrLur366urr659tXV1furHr77OP659rXfW777eP77OJBQUHXfG1paWlcXFzurXz65tpiYmL14N5zc3NnZ2dERERxcXH55Nfurn1AQEDurXtZWVn55df14+Dy19T88Oj25OHy2tb88uz88+7tq3f77uXXfm/76+FgYGBtbW3tqnZHR0dkZGRTU1NLS0vXe2tFRUVra2vWeWnkqqHz3NmfCSwuAAAACXRSTlMA////////aXfzer1aAAAGgUlEQVR42uzYzUtUURiAcSf1gjalZt+fpuQMphOjRFKiDGaSWtEmQYiCJMWFmeDKhR/RoiLCSqWdgoImJpqGYLhRpAz7hDZB9ac048xA5nmv99C4cM7zLIe7+vG+5945CbHOikkpMSgh5oEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFlrlYllYHhDKV7dIqUyhdmR4t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"},7479:function(t,n){t.exports="data:image/png;base64,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"},"7e2e":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAC4lBMVEUAAAD////68/P////69PP////69PL69PP68/P59PL79PT29vb////69PL/8PD79PT69fL69PP69fX68/P////69PP69PP69PP69PP69PT69PP78/P69PL68/P78/P69PP58/P69fP69PP79PP69PP69PL69PP78/P69PP68/P59PT79fP69PT69fL58/P89fX78vL69PT48fH/9PT////////48fH69PP79PL69PP69PP78/P69PP79fP69PT69fL78/P48PD/7+/69PP59PP79PP69PL69fP79PT58/P78/P/8/P69fP69PP69PP69PP59PT89fX////69fP79PP79vL79fP78vL69PT78/P69PP/6ur69fL69PP69PT59PT39/D69PP59PL69PP69fP59PT/7u779fP58/P59PT69PP69PP79PT79fP69PT59PP39+/49fL69PP69PP69PT58vL69PP69PP/7e359PT69PT59PT69PP4+PD29vb58/P69PP59fL89fH69PP69fP48vL69PP68/P69PP58/P/8vL69PP//+j68/P58/P79fL69vH69PP59PT69vH78/P69PP69PT69PP/9PT69fP79PL49fL69PT58/P69PL58/P69fX////69PP69PP69PP59fL69PP69PP58/P79PL69fP69PP69PT69PP/8fH48vL78vL69fP/8vL////69fX59PT69PL58/P79PT69PP79PT39/f59PT69fP69PT69vH69fX59PT69PP69PT69PL58/P69PP69PT59PP58/P69PL/9fX69PL79fP78vL59PT59PP68/P68/P59PL69fP19fX58/P/8/P68/P69fP69PP79PL79PL68/P39/f29vb69fX69PP59vL69fP79PT69PT58/P68/P79PT/6+v69PP68/P59PT79PT89fL58/P78/P69PL69PL69PP69PP59PIw5x7SAAAA9nRSTlMAA5kF/wTL8mm2shsCjRFEZfoxbQb+7+LVybyvopdC7lOV8eTXyr2xp5qKfXFkV0o9MCQXCgEl2Xa+8LCkf3BjPyMQu+fjo5ZyVj4WlL/91olJCWjlOXw8L0DrDGL8by0h0ov5xYgPrVi02JBI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"},"84df":function(t,n,e){"use strict";function s(t,n,e,s){var o,a,i=new Intl.RelativeTimeFormat(n,{numeric:"auto"}),r=e||(new Date).getTime(),l=t-r,c=Math.abs(l);c<6e4?(o=Math.floor(l/1e3),a="second"):c>=6e4&&c<36e5?(o=Math.floor(l/6e4),a="minute"):c>=36e5&&c<864e5?(o=Math.floor(l/36e5),a="hour"):c>=864e5&&c<6048e5?(o=Math.floor(l/864e5),a="day"):c>=6048e5&&c<26298e5?(o=Math.floor(l/6048e5),a="week"):(o=Math.floor(l/26298e5),a="month");var P=i.format(o,a);if(s){var d=new Intl.DateTimeFormat(n,{hour:"numeric",minute:"numeric",second:"numeric"}),u=d.format(new Date(t));return"".concat(P," @ ").concat(u)}return P}e.d(n,"a",(function(){return s}))},eaf1:function(t,n,e){t.exports=e.p+"img/nukkit.e9216608.png"},eb2f:function(t,n,e){t.exports=e.p+"img/fabric.cb7185ea.png"},eeb3:function(t,n,e){"use strict";var s=e("30c0"),o=e.n(s);o.a}}]);
//# sourceMappingURL=download.0972ce9c.js.map