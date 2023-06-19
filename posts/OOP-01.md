---
title: "Nesne Tabanlı Programlama #1 - Nesne Anatomisi - Referans Türlü Değişkenler"
subtitle: "OOP-1"
date: "27-02-2023"
---

- Nesne Tabanlı Programlama(OOP/NTP) bir yaklaşımdır, bir dil değildir. Sistematik ve inşası kısa süren kod yazmamızı sağlar.

- Gerçek hayatı simüle eden, nesneleri baz alan bir programlama tekniğidir. **_Her şey nesnedir._**

## **Nesnenin Anatomisi**

- OOP'de en küçük/esas parça nesne/obje/object'dir.

- Nesneler içerisinde veri tutabilecekleri alanlar barındırır. Bu alanlara `field` diyeceğiz.

- Nesneler içerisinde bir de tutulan verileri işlemesine yarayan fonksiyonlar bulunur. Bu fonksiyonlar sayesinde nesnenin içindeki veri işlebilir. Biz bu fonksiyonlara ileride `metot/property/indexer` diyeceğiz.

![OOP-1](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/oop-1.png)

- Tüm nesneler aslında bir `class` modellemesidir. **_Eğer nesne oluşturmak istiyorsak kesinlikle `class` ile çalışmalıyız_**

> Yani nesne=class gibi düşün. Class'ı da bir ana model gibi düşün. Yani oluşturulacak nesnelerin kalıbı gibi, üretilen objeler de o class şeklinde üretiliyor.

## **Nesne Modellemesi**

- Nesnelerin olşuturulabilmesi için öncelikle modellenmesi gerekir.

- Nesne modeli `class` ile gerçekleşir.

![OOP-2](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/oop-2.png)

- Nesneler referans türlü değerlerdir. Nesneleri tutan değişkenler de referans türlüdür.

- Normal şartlarda bizim Stack'e erişim hakkımız vardır lakin Heap'e yoktur. Heap'deki nesnelere biz direkt erişemesek de Stack'teki referanslar erişebilmektedir. Biz de Stack'de Heap'deki nesneleri işaret eden referanslar tanımlarız. Haliye Stack'deki referanslara erişebilir ve dolaylı olarak o referans aracılığıyla Heap'deki nesneye erişmiş oluruz.

- Kod yazarken biz `a` diyince direkt onun değeri olan 5'e erişebiliyoruz. Heap'te tutulan nesnelere erişmek için Stack'e `Nesne 1--r1` `Nesne 2--r2` gibi referanslar tanımlarız. r1 ile Nesne 1'e erişiriz.
  > İşte nesnelere/class'lara referans türlü denilmesinin sebebi de bu.
