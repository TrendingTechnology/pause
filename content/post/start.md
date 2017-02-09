+++
title = "hugo + netlify + GitHub でブログを作った"
date = "2017-02-08T21:38:21+09:00"
tags = ["hugo","netlify","github"]
draft = false
+++

タイトルそのまんまですが、[hugo](https://gohugo.io/) + [netlify](https://www.netlify.com/) + [GitHub](https://github.com/matsuoshi/sound.ml) でブログを作りました。

静的サイトジェネレータでブログを作るにあたって、サーバ関係のことはあまり考えたくない、楽したい、でも GitHub Pages だと選択肢は [Jekyll](http://jekyllrb-ja.github.io/) 一択かなあ、そこで netlify を使うと色んな種類のジェネレータが使えそう、ということで今回この組合せを選んでみました。

hugo で構築して、markdown で記事を書いて、GitHub に push して、netlify でビルド & 公開。ブログ書くと GitHub に緑の草が生えていくのはモチベーション的にもよいかも。

ドメインは [freenom](http://www.freenom.com/) で無料の名前をゲットしました。無料ってことで安心して使えるかどうかはアレですが、途中で使えなくなっても泣かない。覚悟のうえです。(記事データは GitHub 上にも残るし)
