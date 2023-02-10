(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{402:function(a,t,s){"use strict";s.r(t);var e=s(7),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"java-进程内缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-进程内缓存"}},[a._v("#")]),a._v(" Java 进程内缓存")]),a._v(" "),t("blockquote",[t("p",[a._v("关键词：ConcurrentHashMap、LRUHashMap、Guava Cache、Caffeine、Ehcache")])]),a._v(" "),t("h2",{attrs:{id:"一、concurrenthashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、concurrenthashmap"}},[a._v("#")]),a._v(" 一、ConcurrentHashMap")]),a._v(" "),t("p",[a._v("最简单的进程内缓存可以通过 JDK 自带的 "),t("code",[a._v("HashMap")]),a._v(" 或 "),t("code",[a._v("ConcurrentHashMap")]),a._v(" 实现。")]),a._v(" "),t("p",[a._v("适用场景："),t("strong",[a._v("不需要淘汰的缓存数据")]),a._v("。")]),a._v(" "),t("p",[a._v("缺点：无法进行缓存淘汰，内存会无限制的增长。")]),a._v(" "),t("h2",{attrs:{id:"二、lruhashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、lruhashmap"}},[a._v("#")]),a._v(" 二、LRUHashMap")]),a._v(" "),t("p",[a._v("可以通过"),t("strong",[a._v("继承 "),t("code",[a._v("LinkedHashMap")]),a._v(" 来实现一个简单的 "),t("code",[a._v("LRUHashMap")])]),a._v("，即可完成一个简单的 **LRU （最近最少使用）**算法。")]),a._v(" "),t("p",[a._v("缺点：")]),a._v(" "),t("ul",[t("li",[a._v("锁竞争严重，性能比较低。")]),a._v(" "),t("li",[a._v("不支持过期时间")]),a._v(" "),t("li",[a._v("不支持自动刷新")])]),a._v(" "),t("p",[a._v("【示例】LRUHashMap 的简单实现")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LRUCache")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LinkedHashMap")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LRUCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//无需扩容")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("max "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.4f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.75f")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("max "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lock "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * 重写LinkedHashMap的removeEldestEntry方法即可 在Put的时候判断，如果为true，就会删除最老的\n     *\n     * @param eldest\n     * @return\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeEldestEntry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Entry")]),a._v(" eldest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" max"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("putValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("clear")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"三、guava-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、guava-cache"}},[a._v("#")]),a._v(" 三、Guava Cache")]),a._v(" "),t("p",[a._v("Guava Cache 解决了 "),t("code",[a._v("LRUHashMap")]),a._v(" 中的几个缺点。")]),a._v(" "),t("p",[a._v("Guava Cache 提供了"),t("strong",[a._v("基于容量，时间和引用的缓存回收方式")]),a._v("。基于容量的方式内部实现采用 LRU 算法，基于引用回收很好的利用了 Java 虚拟机的垃圾回收机制。")]),a._v(" "),t("p",[a._v("其中的缓存构造器 CacheBuilder 采用构建者模式提供了设置好各种参数的缓存对象。缓存核心类 LocalCache 里面的内部类 Segment 与 jdk1.7 及以前的 "),t("code",[a._v("ConcurrentHashMap")]),a._v(" 非常相似，分段加锁，减少锁竞争，并且都继承于 "),t("code",[a._v("ReetrantLock")]),a._v("，还有六个队列，以实现丰富的本地缓存方案。Guava Cache 对于过期的 Entry 并没有马上过期(也就是并没有后台线程一直在扫)，而是通过进行读写操作的时候进行过期处理，这样做的好处是避免后台线程扫描的时候进行全局加锁。")]),a._v(" "),t("p",[a._v("直接通过查询，判断其是否满足刷新条件，进行刷新。")]),a._v(" "),t("h3",{attrs:{id:"guava-cache-缓存回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guava-cache-缓存回收"}},[a._v("#")]),a._v(" Guava Cache 缓存回收")]),a._v(" "),t("p",[a._v("Guava Cache 提供了三种基本的缓存回收方式。")]),a._v(" "),t("h3",{attrs:{id:"基于容量回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于容量回收"}},[a._v("#")]),a._v(" 基于容量回收")]),a._v(" "),t("p",[t("code",[a._v("maximumSize(long)")]),a._v("：当缓存中的元素数量超过指定值时触发回收。")]),a._v(" "),t("h3",{attrs:{id:"基于定时回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于定时回收"}},[a._v("#")]),a._v(" 基于定时回收")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("expireAfterAccess(long, TimeUnit)")]),a._v("：缓存项在给定时间内没有被读/写访问，则回收。请注意这种缓存的回收顺序和基于大小回收一样。")]),a._v(" "),t("li",[t("code",[a._v("expireAfterWrite(long, TimeUnit)")]),a._v("：缓存项在给定时间内没有被写访问（创建或覆盖），则回收。如果认为缓存数据总是在固定时候后变得陈旧不可用，这种回收方式是可取的。")])]),a._v(" "),t("p",[a._v("如下文所讨论，定时回收周期性地在写操作中执行，偶尔在读操作中执行。")]),a._v(" "),t("h3",{attrs:{id:"基于引用回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于引用回收"}},[a._v("#")]),a._v(" 基于引用回收")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("CacheBuilder.weakKeys()")]),a._v("：使用弱引用存储键。当键没有其它（强或软）引用时，缓存项可以被垃圾回收。")]),a._v(" "),t("li",[t("code",[a._v("CacheBuilder.weakValues()")]),a._v("：使用弱引用存储值。当值没有其它（强或软）引用时，缓存项可以被垃圾回收。")]),a._v(" "),t("li",[t("code",[a._v("CacheBuilder.softValues()")]),a._v("：使用软引用存储值。软引用只有在响应内存需要时，才按照全局最近最少使用的顺序回收。")])]),a._v(" "),t("h3",{attrs:{id:"guava-cache-核心-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guava-cache-核心-api"}},[a._v("#")]),a._v(" Guava Cache 核心 API")]),a._v(" "),t("h4",{attrs:{id:"cachebuilder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cachebuilder"}},[a._v("#")]),a._v(" CacheBuilder")]),a._v(" "),t("p",[a._v("缓存构建器。构建缓存的入口，指定缓存配置参数并初始化本地缓存。\n主要采用 builder 的模式，CacheBuilder 的每一个方法都返回这个 CacheBuilder 知道 build 方法的调用。\n注意 build 方法有重载，带有参数的为构建一个具有数据加载功能的缓存，不带参数的构建一个没有数据加载功能的缓存。")]),a._v(" "),t("h4",{attrs:{id:"localmanualcache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localmanualcache"}},[a._v("#")]),a._v(" LocalManualCache")]),a._v(" "),t("p",[a._v("作为 LocalCache 的一个内部类，在构造方法里面会把 LocalCache 类型的变量传入，并且调用方法时都直接或者间接调用 LocalCache 里面的方法。")]),a._v(" "),t("h4",{attrs:{id:"localloadingcache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localloadingcache"}},[a._v("#")]),a._v(" LocalLoadingCache")]),a._v(" "),t("p",[a._v("可以看到该类继承了 LocalManualCache 并实现接口 LoadingCache。\n覆盖了 get，getUnchecked 等方法。")]),a._v(" "),t("h4",{attrs:{id:"localcache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localcache"}},[a._v("#")]),a._v(" LocalCache")]),a._v(" "),t("p",[a._v("Guava Cache 中的核心类，重点了解。")]),a._v(" "),t("p",[a._v("LocalCache 的数据结构与 ConcurrentHashMap 很相似，都由多个 segment 组成，且各 segment 相对独立，互不影响，所以能支持并行操作。每个 segment 由一个 table 和若干队列组成。缓存数据存储在 table 中，其类型为 AtomicReferenceArray。")]),a._v(" "),t("h2",{attrs:{id:"四、caffeine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、caffeine"}},[a._v("#")]),a._v(" 四、Caffeine")]),a._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/ben-manes/caffeine",target:"_blank",rel:"noopener noreferrer"}},[a._v("caffeine"),t("OutboundLink")],1),a._v(" 是一个使用 JDK8 改进 Guava 缓存的高性能缓存库。")])]),a._v(" "),t("p",[a._v("Caffeine 实现了 W-TinyLFU("),t("strong",[a._v("LFU")]),a._v(" + "),t("strong",[a._v("LRU")]),a._v(" 算法的变种)，其"),t("strong",[a._v("命中率和读写吞吐量大大优于 Guava Cache")]),a._v("。")]),a._v(" "),t("p",[a._v("其实现原理较复杂，可以参考"),t("a",{attrs:{href:"https://juejin.im/post/5b7593496fb9a009b62904fa#comment",target:"_blank",rel:"noopener noreferrer"}},[a._v("你应该知道的缓存进化史"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"五、ehcache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、ehcache"}},[a._v("#")]),a._v(" 五、Ehcache")]),a._v(" "),t("blockquote",[t("p",[a._v("参考："),t("RouterLink",{attrs:{to:"/14.中间件/02.缓存/docs/04.中间件/02.缓存/ehcache.html"}},[a._v("Ehcache")])],1)]),a._v(" "),t("h2",{attrs:{id:"六、进程内缓存对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、进程内缓存对比"}},[a._v("#")]),a._v(" 六、进程内缓存对比")]),a._v(" "),t("p",[a._v("常用进程内缓存技术对比：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("比较项")]),a._v(" "),t("th",[a._v("ConcurrentHashMap")]),a._v(" "),t("th",[a._v("LRUMap")]),a._v(" "),t("th",[a._v("Ehcache")]),a._v(" "),t("th",[a._v("Guava Cache")]),a._v(" "),t("th",[a._v("Caffeine")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("读写性能")]),a._v(" "),t("td",[a._v("很好，分段锁")]),a._v(" "),t("td",[a._v("一般，全局加锁")]),a._v(" "),t("td",[a._v("好")]),a._v(" "),t("td",[a._v("好，需要做淘汰操作")]),a._v(" "),t("td",[a._v("很好")])]),a._v(" "),t("tr",[t("td",[a._v("淘汰算法")]),a._v(" "),t("td",[a._v("无")]),a._v(" "),t("td",[a._v("LRU，一般")]),a._v(" "),t("td",[a._v("支持多种淘汰算法,LRU,LFU,FIFO")]),a._v(" "),t("td",[a._v("LRU，一般")]),a._v(" "),t("td",[a._v("W-TinyLFU, 很好")])]),a._v(" "),t("tr",[t("td",[a._v("功能丰富程度")]),a._v(" "),t("td",[a._v("功能比较简单")]),a._v(" "),t("td",[a._v("功能比较单一")]),a._v(" "),t("td",[a._v("功能很丰富")]),a._v(" "),t("td",[a._v("功能很丰富，支持刷新和虚引用等")]),a._v(" "),t("td",[a._v("功能和 Guava Cache 类似")])]),a._v(" "),t("tr",[t("td",[a._v("工具大小")]),a._v(" "),t("td",[a._v("jdk 自带类，很小")]),a._v(" "),t("td",[a._v("基于 LinkedHashMap，较小")]),a._v(" "),t("td",[a._v("很大，最新版本 1.4MB")]),a._v(" "),t("td",[a._v("是 Guava 工具类中的一个小部分，较小")]),a._v(" "),t("td",[a._v("一般，最新版本 644KB")])]),a._v(" "),t("tr",[t("td",[a._v("是否持久化")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("是")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("否")])]),a._v(" "),t("tr",[t("td",[a._v("是否支持集群")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("是")]),a._v(" "),t("td",[a._v("否")]),a._v(" "),t("td",[a._v("否")])])])]),a._v(" "),t("ul",[t("li",[t("strong",[t("code",[a._v("ConcurrentHashMap")])]),a._v(" - 比较适合缓存比较固定不变的元素，且缓存的数量较小的。虽然从上面表格中比起来有点逊色，但是其由于是 JDK 自带的类，在各种框架中依然有大量的使用，比如我们可以用来缓存我们反射的 Method，Field 等等；也可以缓存一些链接，防止其重复建立。在 Caffeine 中也是使用的 "),t("code",[a._v("ConcurrentHashMap")]),a._v(" 来存储元素。")]),a._v(" "),t("li",[t("strong",[t("code",[a._v("LRUMap")])]),a._v(" - 如果不想引入第三方包，又想使用淘汰算法淘汰数据，可以使用这个。")]),a._v(" "),t("li",[t("strong",[t("code",[a._v("Ehcache")])]),a._v(" - 由于其 jar 包很大，较重量级。对于需要持久化和集群的一些功能的，可以选择 Ehcache。需要注意的是，虽然 Ehcache 也支持分布式缓存，但是由于其节点间通信方式为 rmi，表现不如 Redis，所以一般不建议用它来作为分布式缓存。")]),a._v(" "),t("li",[t("strong",[t("code",[a._v("Guava Cache")])]),a._v(" - Guava 这个 jar 包在很多 Java 应用程序中都有大量的引入，所以很多时候其实是直接用就好了，并且其本身是轻量级的而且功能较为丰富，在不了解 Caffeine 的情况下可以选择 Guava Cache。")]),a._v(" "),t("li",[t("strong",[t("code",[a._v("Caffeine")])]),a._v(" - 其在命中率，读写性能上都比 Guava Cache 好很多，并且其 API 和 Guava cache 基本一致，甚至会多一点。在真实环境中使用 Caffeine，取得过不错的效果。")])]),a._v(" "),t("p",[a._v("总结一下："),t("strong",[a._v("如果不需要淘汰算法则选择 "),t("code",[a._v("ConcurrentHashMap")]),a._v("，如果需要淘汰算法和一些丰富的 API，推荐选择 "),t("code",[a._v("Caffeine")])]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ben-manes/caffeine",target:"_blank",rel:"noopener noreferrer"}},[a._v("caffeine github"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5b8df63c6fb9a019e04ebaf4",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入解密来自未来的缓存-Caffeine"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/9a80c662dac4",target:"_blank",rel:"noopener noreferrer"}},[a._v("Caffeine 缓存"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://wizardforcel.gitbooks.io/guava-tutorial/content/1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Google Guava 官方教程（中文版）"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/38bd5f1cf2f2",target:"_blank",rel:"noopener noreferrer"}},[a._v("Google Guava Cache 全解析"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://developer.ibm.com/zh/articles/os-cn-spring-cache/",target:"_blank",rel:"noopener noreferrer"}},[a._v("注释驱动的 Spring cache 缓存介绍"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);