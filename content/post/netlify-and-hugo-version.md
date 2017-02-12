+++
title = "Netlify と Hugo の組合せでハマったところ"
date = "2017-02-09T23:48:21+09:00"
tags = ["netlify","hugo"]
draft = false
+++

どうも Netlify の Hugo は、バージョンが現在最新の v0.18 ではないっぽい(2017年2月時点)。
こんな感じで Netlify の設定のビルドコマンド指定部分に `hugo version` を足しておけば、

{{< figure src="/media/hugo-netlify-001.png" >}}

デプロイ時のログで確認できる。

{{< figure src="/media/hugo-netlify-002.png" >}}

v0.17 のようです。

hugo のサイトにあるテンプレートには v0.18 以降でないと動かないものもあるので、それを使っていると「ローカルでは見えるのに！ デプロイすると表示されない！」となってハマるというわけです。

> Hugo Themes Site  
> http://themes.gohugo.io/

ということで、いらんトラブルを避けるため、いったんローカルの hugo も v0.17 にしておきました。

---

~~(あとで qiita に書く)~~  
qiita にも同じことを書きました  
http://qiita.com/matsuoshi/items/32f6c07bcb3716628df0
