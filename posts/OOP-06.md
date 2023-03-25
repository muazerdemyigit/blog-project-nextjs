---
title: "Nesne Tabanlı Programlama #7 - Referans Nesne İlişkisi"
subtitle: "OOP-7"
date: "04-03-2023"
---

## **Referans Nedir?**

- RAM'in Stack bölgesinde tanımllanan ve Heap bölgesindeki nesneleri işaretleyen/referans eden değişkenlerdir/noktalardır.

## **Referanssız Nesneler**

- Bir nesne oluşturulduğu an herhangi bir referans ile işaretlenmez ise Heap'e yerleştirilir. Lakin bu nesneye tarafımızca bir daha erişemeyiz. Haliyle ilgili nesne ile aramızdaki tek diyalog oluşturma anıdır.
- Heap'de referanssız nesneler Garbage Collector ile imha edilmektedir.

## **Object Initializer İle Nesne Oluşturma Esnasında Property'lere İlk Değer Atama**

- Nesneyi oluştururken { } ile ilgili nesne içerisinde public olan tüm property'lere ilk değeri verilebilir. Bu şekilde içindeki property'lerin ilk değeri verildiği için default değil ilk değerle oluşur.
