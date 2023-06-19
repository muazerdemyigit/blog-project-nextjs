---
title: "Nesne Tabanlı Programlama #8 - Nesne Kopyalama Davranışları - Shallow Copy - Deep Copy"
subtitle: "OOP-8"
date: "04-03-2023"
---

## **Shallow Copy**

- Var olan bir nesnenin referansının kopyalanmasıdır. Shallow copy neticesinde eldeki değer çoğaltılmaz. Sadece birdem fazla referansla işaretlenmiş olur.
- Bir nesne birden fazla referanla işaretleniyorsa burada Shallow Copy vardır.
  ![oop-3](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/oop-3.png)

## **Deep Copy**

- Var olan bir nesne, deep copy ile kopyalanıyorsa ilgili nesne miktarı çoğaltılır. Aynı özelliklere ve değerlere sahip olan bellekte farklı bir nesne daha oluşur.
  ![oop-4](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/oop-4.png)

> Önemli Not: Referans türlü değişkenlerin/değerlerin deafult davranışı shallow copy'dir.
> Değer türlü değişkenlerin default davranışı deep copy'dir. Default davranışlarından farklı bir şey yapmak için özel çaba göstermeliyiz.
