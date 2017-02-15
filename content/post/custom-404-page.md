+++
title = "GitHub Pages や Netlify で、404 ページを自分で用意する"
date = "2017-02-15T14:15:21+09:00"
tags = ["hugo","netlify","github"]
draft = false
+++

このブログは Hugo + Netlify を使った静的サイトなわけですが、404 Not Found ページを自作したい場合はどうする？ というのを調べました。

### 答え: ルートフォルダに 404.html を設置する

それだけで OK でした。
Netlify だけでなく、GitHub Pages も同じ方法のようです。なんだそれだけか。

というわけで [404.html](/404.html) を用意しました。

#### 参考

[Creating a custom 404 page for your GitHub Pages site - User Documentation](https://help.github.com/articles/creating-a-custom-404-page-for-your-github-pages-site/)
