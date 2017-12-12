---
title: "freenom の無料 .cf ドメインが止まってしまいました"
date: "2017-12-08T08:08:08+09:00"
tags: ["domain","blog","freenom"]
draft: false
image: /media/201712/freenom-02.png
---

タイトルのとおりですが。[pause.cf](https://pause.cf/) ドメインが止まったので [monaural.net](https://monaural.net/) にブログを引越した話です。

[freenom](http://www.freenom.com/ja/index.html?lang=ja) で .cf ドメインを無料で取得してたんですが、2017/12/04 に突然繋がらなくなってしまいました。freenom の管理画面を見るとこんな感じで

{{<figure src="/media/201712/freenom-01.png">}}

"suspended" と……

サポートページ探して確認したんですが

> [Why is my domain status set to 'Suspended'? - Knowledgebase - Freenom](https://my.freenom.com/knowledgebase.php?action=displayarticle&id=11)
> [よくある質問](http://www.freenom.com/ja/support.html#u)

スパムとか著作権違反とか不正なドメインがとか、心当たりはなく。うーん、もう仕方ないか。やっぱりこの手の無料サービスって、テスト的に試しに使うものですね。実運用したらアカン。まあ、このブログの場合は、とりあえず最初テストで立ち上げてみたのがそのまま今まで続いてた、ってかんじではあるのですが…

そんなわけで、ちゃんとお金払ったドメイン使ったやつに引越ししました。昔使っていた [monaural.net](https://monaural.net/) ドメインです。しかし freenom 上で旧ドメインを全く操作できないので、リダイレクト処理すらかけられない。そこはちょっと困るな。

静的サイトジェネレータ(Hugo) + Netlify 使ってるので、引越し自体はちょちょっとドメイン設定してファイルを git push するだけで完了。このへんはスタティック系の強みだなー。WordPress とか使ってたらこうは単純にはいかない。

---

ともあれ、新URL <https://monaural.net/> にて、どうぞよろしくお願いいたします。
