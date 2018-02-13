---
title: "ASUS E203NA を買って、Lubuntu 17.10 をインストールした"
date: "2018-02-11T12:00:00+09:00"
tags: ["pc","linux","lubuntu"]
draft: false
image: https://farm5.staticflickr.com/4745/39505680354_6ec635371e_b.jpg
---

持ち運び用に軽いサブノートが欲しいな〜と思い、ASUS のノートPC [VivoBook E203NA](https://www.asus.com/jp/Laptops/VivoBook-E203NA/) を買いました。11インチ、900グラム、3万円前後のお手頃価格。必要十分、という感じでなかなかよいです。

<div class="embed">
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/matsuoshi/39505680354/" title="ViboBook E203NA + Lubuntu"><img src="https://farm5.staticflickr.com/4745/39505680354_6ec635371e_b.jpg" width="649" height="650" alt="ViboBook E203NA + Lubuntu"></a>
</div>

OS は Windows 10 がプリインストールされてたんですが、めっちゃ久々に Win 触ると使い方が全然思い出せず…… 設定画面とかって、こんなに複雑だったっけ…? ということで、Linux を入れて使うことにしました。(最初は [Ubuntu for Windows](https://www.microsoft.com/ja-jp/store/p/ubuntu/9nblggh4msv6) を使ってみたいな〜とか思ってはいたのですが)

## Ubuntu 16 と 17 を入れてみた

Linux のインストール自体はかんたん。iso ファイルをダウンロードして、USBメモリに [rufus](http://rufus.akeo.ie/) を使って書き込んで、そのUSBメモリからブートすればOK。ブート方法は E203NAの場合、 `F2` で BIOS に入って `F8`、もしく `ESC + F12` でもいけるっぽい。

ただ、手始めに [Ubuntu](https://www.ubuntu.com/) 16 (LTS) を入れてみたところ、以下の不具合が……

- 描画がかなり遅い
- 内蔵 Wi-Fi が有効にならない
- キーボードのマッピングが一部おかしい

うーん、ということで Ubuntu 17 を入れてみると、上記の不具合はしっかり解消。でもやはり全体的にちょっと重いので、軽量なものを再インストールすることにしました。

## 軽さを求めて Lubuntu 17.10 に落ち着いた

軽量 Linux にも色々種類があるそうで [Ubuntu Mate](https://ubuntu-mate.org), [Xubuntu](https://xubuntu.org) も試してみたけど、Ubuntu系ではいちばん軽そうな [Lubuntu](https://lubuntu.me) に落ち着きました。見た目は味気ない感じですが、まあそんなリッチな画面は求めてないし。重さはだいぶマシになってます。前述の Wi-Fi ほかのトラブルもなし。

や、自分の使い方だと、Linux でもあんまり困らないな〜。最初は Chromebook系でもいいかとか思ってたくらいで(ローカル開発環境にちょっと不安があったので、やめましたが)

- ブラウザとターミナルとエディタがあれば、基本的なところはだいたい十分
- Webアプリがいまどき充実している (Office系も Googleスプレッドシートとか使ってたし)
- Mac で使っていたアプリの Linux 版も、けっこう提供されてる、Dropbox, Slack, VSCode, Spotify, Audacity...

という感じなので、ほぼ問題ないです。

## つづく

Lubuntu カスタマイズ編に続きます。めんどくさがりなので、大した設定入れてませんが。

- [Lubuntu 17 をインストールして行った最低限の設定](/post/201802/setup-lubuntu17)
