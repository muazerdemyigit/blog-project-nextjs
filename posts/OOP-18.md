---
title: "Nesne Tabanlı Programlama #21 - Polimorfizm Türleri ve Tür Dönüşüm Operatörleri - 2. Bölüm"
subtitle: "OOP-18"
date: "14-03-2023"
---

## **Poliorfizm Durumlarında Tür Dönüşümleri**

```csharp
A a = new C();
```

- Bu nesne `A` referansıyla işaretlenen `C` türünden bir nesnedir. Haliyle ihtiyaç doğrultusunda `A` referansı üzerinden diğer kalıtımsal ilişkide olduğu referanslara ya da kendi referansına dönüştürülebilmelidir.

```csharp
C c = (C)a;
```

- `A` türünden olan `a` referansındaki, özünde `C`türünden nesne, kendi türünden bir referansla işaretlenmiştir.
- Bu durumun tersi de geçerlidir. Yani ilgili nesne kendi türünden, kalıtımsal olarak ataları olan diğer türlere `Cast` edilebilir.
- `Cast` operatörü, üst türden alt türe kalıtımsal ilişkide dönüşüm sağlar, tersine alt türden üste de dönüşüm yapabilir.

## **`as` Operatörü**

- `Cast` gibi kalıtımsal ilişki olan türler arasında referans dönüşümü yapabilmemizi sağlayan operatördür.
- Fiziksel nesnenin kalıtım hiyerarşisine uygun olan türlere `true`, olmayan türlere `false`sonucunu dönmektedir.

> NOT:
> Polimorfizm uygulanmış bir nesnenin ihtiyacı doğrultusunda(uygun olan) farklı bir türe dönüştürülebilmesi için işi garantiye alabilmek adına önce `is` kontrolü ardından `cast`ya da `as` operasyonu sağlanır.
