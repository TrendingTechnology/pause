---
title: "Netlify 上で使う Hugo のバージョンを指定する"
date: "2017-07-27T12:12:12+09:00"
tags: ["hugo","netlify","blog"]
draft: false
image: "/media/201707/netlify.png"
---

このブログは [Netlify](https://www.netlify.com/) + [Hugo](https://gohugo.io/) で作っております。

で、いま Netlify にデフォルトで入っている Hugo のバージョンは 0.17 なのですが、Hugo の最新バージョンは 0.25.1 でして、けっこうな開きがあるんですね(2017/07時点)。テンプレート選びとかにもバージョンの違いは影響してくるんですが、これはもう Netlify 使っている以上しょうがないのかなあ、と思っていました。

しかししかし。簡単な設定ひとつで、 Netlify でも最新バージョンの Hugo が使えるとは……

> Netlifyで使うHugoのバージョンを設定する - Qiita  
> http://qiita.com/httpd443/items/36291b286c72fccea47c

……なんと……

Netlify の設定画面で、こんな感じで環境変数1つ追加するだけ。これだけでいいんすね。

![](/media/201707/netlify-hugo.png)

実際、吐き出されたコードの meta タグ見てもこんな形で入っています。

    <meta name="generator" content="Hugo 0.25.1" />

ありがたやありがたや。

公式サイトでもしっかり方法が紹介されていました。

> Netlify Plus Hugo 0.20 and Beyond | Netlify  
> https://www.netlify.com/blog/2017/04/11/netlify-plus-hugo-0.20-and-beyond/

すばらしい。
