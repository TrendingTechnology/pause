+++
title = "Netlify と Hugo の組合せでハマったところ"
date = "2017-02-11T23:48:21+09:00"
tags = ["netlify","hugo"]
draft = false
image = "/media/201702/hugo-netlify-001.png"
+++

### 【追記】

Netlify の設定画面から環境変数を足すだけで、Hugo のバージョンを変更できるとのこと。詳細はこちら

- [Netlifyで使うHugoのバージョンを設定する - Qiita](http://qiita.com/httpd443/items/36291b286c72fccea47c)
- [Netlify 上で使う Hugo のバージョンを指定する | pause](/post/201707/set-hugo-version-on-netlify/)
- [Netlify Plus Hugo 0.20 and Beyond | Netlify](https://www.netlify.com/blog/2017/04/11/netlify-plus-hugo-0.20-and-beyond/)

_(追記ここまで)_

---

どうも Netlify の Hugo は、バージョンが現在最新の v0.18 ではないっぽい(2017年2月時点)。
こんな感じで Netlify の設定のビルドコマンド指定部分に `hugo version` を足しておけば、

{{< figure src="/media/201702/hugo-netlify-001.png" >}}

デプロイ時のログで確認できる。

{{< figure src="/media/201702/hugo-netlify-002.png" >}}

v0.17 のようです。

hugo のサイトにあるテンプレートには v0.18 以降でないと動かないものもあるので、それを使っていると「ローカルでは見えるのに！ デプロイすると表示されない！」となってハマるというわけです。

> Hugo Themes Site  
> http://themes.gohugo.io/

ということで、いらんトラブルを避けるため、いったんローカルの hugo も v0.17 にしておきました。

---

~~(あとで qiita に書く)~~  
qiita にも同じことを書きました  
http://qiita.com/matsuoshi/items/32f6c07bcb3716628df0
