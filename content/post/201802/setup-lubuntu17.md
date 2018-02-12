---
title: "Lubuntu 17 をインストールして行った最低限の設定"
date: "2018-02-12T12:00:00+09:00"
tags: ["pc","linux","lubuntu"]
draft: false
image: https://farm5.staticflickr.com/4700/39319658065_81b3fcf644_b.jpg
---

ASUS [VivoBook E203NA](https://www.asus.com/jp/Laptops/VivoBook-E203NA/) に [Lubuntu](https://lubuntu.me) 17.10 を入れて、行った設定のメモ。細かいカスタマイズとか超めんどくさいと思ってしまうタイプなので、最低限のセットアップのみです。

<div class="embed"><img src="https://farm5.staticflickr.com/4700/39319658065_81b3fcf644_b.jpg" width="1019" height="490" alt="lubuntu17"></div>

### キーバインド

定番、CapsLock を Ctrl に変更。`~/.config/lxsession/Lubuntu/autostart` に以下を設定します。

```
setxkbmap -option ctrl:nocaps
```

あとググってたら「左Altを Ctrlに、右WINを Altに、左Menu を WINに」という俺好みの設定があったので、それも入れました。以下2ファイルを作成。

~/.xkb/keymap/mykdb

```
xkb_keymap {
	xkb_keycodes  { include "evdev+aliases(qwerty)"	};
	xkb_types     { include "complete"	};
	xkb_compat    { include "complete+japan"	};
	xkb_symbols   { include "pc+jp+inet(evdev)+ctrl(nocaps)+myswap(metakeys)"	};
	xkb_geometry  { include "pc(pc105)"	};
};
```

~/.xkb/symbols/myswap

```
partial modifier_keys
xkb_symbols "metakeys" {
    key <LCTL> { [ Control_L ] };
    key <RCTL> { [ Control_R ] };
    key <LALT> { [ Control_L, Control_L ] };
    key <RALT> { type[Group1] = "TWO_LEVEL",
                 symbols[Group1] = [ Alt_R, Meta_R ] };
    key <LWIN> { [ Alt_L, Meta_L ] };
    key <MENU> { [ Super_L ] };

    modifier_map Control { <LCTL>, <RCTL>, <LALT> };
    modifier_map Mod1 { <LWIN>, <RALT> };
    modifier_map Mod4 { <MENU> };
};
```

からの、`/.config/lxsession/Lubuntu/autostart` に以下を設定

```
xkbcomp -w0 -I/home/ユーザ名/.xkb /home/ユーザ名/.xkb/keymap/mykbd :0
```

参考: <https://unix.stackexchange.com/questions/65507/use-setxkbmap-to-swap-the-left-shift-and-left-control/65600>

### タッチパッド

- キータイプ中のタッチを無効に
- ナチュラルスクロールを有効に
- 2本指での水平スクロールは操作感がいまひとつだったので、水平方向のみエッジスクロールするように

`/.config/lxsession/Lubuntu/autostart` に以下を設定

```
syndaemon -i 0.5 -K -d
xinput set-prop 11 283 -50 -50
xinput set-prop 11 284 0 1 0
```

コマンド内の 11 や 283 といった ID は環境によって異なるようで、`xinput` で調べました。以下参考。

- Synaptics タッチパッド - ArchWiki  
<https://wiki.archlinux.jp/index.php/Synaptics_%E3%82%BF%E3%83%83%E3%83%81%E3%83%91%E3%83%83%E3%83%89>

### ホームフォルダを日本語に

ホームフォルダの "Documents" "Downloads" とかが、インストール直後は "書類" "ダウンロード" とか日本語になってるので、英語に戻す設定。

```
LANG=C xdg-user-dirs-gtk-update
```

### 音量調整

Ubuntu だと大丈夫だったけど、Lubuntu にすると fn + ファンクションキー での音量調節の挙動が変な感じだったので、ホットキー設定を調整。

lxhotkey で以下の設定を変更

```
amixer -D pulse set Master toggle      # XF86AudioMute
amixer -D pulse set Master 3%+ unmute  # XF86AudioRaiseVolume
amixer -D pulse set Master 3%- unmute  # XF86AudioLowerVolume
```

### Synapse インストール

とりあえずこれ入れといたらデスクトップ環境なんでもいいや。Mac の Spotlight みたいな、いろいろ検索〜実行ツール。

<https://launchpad.net/synapse-project>

### Dropbox の調整

動作は問題なかったんだけど、タスクバーにアイコンが表示されていないので、出るように。

`~/.config/autostart/dropbox.desktop` と `/usr/share/applications/dropbox.desktop` の以下を修正

```
Exec=dropbox start -i  
↓
Exec=dbus-launch dropbox start -i  
```

参考: <https://sites.google.com/site/tetsuroweb/home/software/applications/internet/dropbox/tips/dropbox-icon-missing>

### Chrome での絵文字表示

Chrome で絵文字 🍣 が表示されないので、使えるようにします。

参考: <http://www.omgubuntu.co.uk/2016/08/enable-color-emoji-linux-google-chrome-noto>

---

ひとまずこんな感じです。
