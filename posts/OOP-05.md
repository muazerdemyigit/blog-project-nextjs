---
title: "Nesne Tabanlı Programlama #6 - Nesne Kavramı Nedir Nesne Nasıl Oluşturulur - new Operatörü"
subtitle: "OOP-6"
date: "04-03-2023"
---

## **Nesne Nedir?**

- İçerisinde birden fazla anlamlı, birbiriyle ilişkisel veri tutan ve bu veriler üzerinde işlemler yapıp sonuçlar üretebilen bir yapılanmadır.
- Nesneler complex veri olarak geçer. Nesneleri modellememizi sağlayan class'lar complex type'lardır.
- Nesne anlamlı verilerin bir araya gelerek bir bütün oluşturduğu complex bir değerdir.

## **Nesne Neden Kullanılır?**

- Kodu daha ızlı geliştirebilmek, daha sistematik ve yönetilebilir hale getirebilmek için nesneler kullanılır.

## **Bir Sınıftan Nesne Oluşturmak**

- Nesne oluşturmak için `new` operatörü kullanılmaktadır.
- İmzası:

```csharp
new Type() // Type => nesnesini talep ettiğimiz class, () => Constructor metot
```

## **TARGET TYPE NEW EXPRESSIONS(C# 9.0)**

- Nesne oluşum sürecinde, oluşturulacak olan nesne eğer direkt bir referansa atılıyorsa burada hangi nesnenin oluşturuluduğu referans sayesind bilinmektedir.
- Yani:

```csharp
//Bu imza yerine
Type x = new Type();

//Bu kullanılabilir.
Type x = new();
```
