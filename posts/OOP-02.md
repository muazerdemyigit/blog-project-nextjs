---
title: "Nesne Tabanlı Programlama #2 - Class Kavramı"
subtitle: "OOP-2"
date: "27-02-2023"
---

## Sınıf Nedir? Neden Sınıf Yapısı Kullanılır?

- OOP'de bir `object` oluşturabilmek için o objenin modellenmesi/tanımlanması gerekmektedir.
- Bir objenin modelini/tanımını oluşturabilmek için `class` yapısı kullanılır.

## Sınıf İle Nesne Arasındaki İlişki Nedir?

- Sınıf bir nesne modelidir. bu sınıf modelinden üretilen nesnelerede operasyonlar gerçekleştirebiliriz.
- Sınıftan birden fazla nesne oluşturulabilir. Class'larda nesnelerdeki ortak alan tanımları yapılır.

## Sınıf Nasıl Ve Nerede Oluşturulur?

```csharp
class isim
{

}
```

Şeklinde oluşturulur.

- Class'lar bir referans türüdür.
- Class'lar 3 farklı yerde oluşturulur;
  1. Namespace İçerisinde Class Oluşturma
  2. Namespace Dışında Class Oluşturma
  3. Class içerisinde(Nested Type) Class Oluşturma

> Aynı namespace altındaki class'lar birbirlerine direkt isim üzerinden erişebilirken, farklı namespace altındaki class'lar namespace ismi üzerinden birbirlerine erişebilir.

> Bir class tanımlanmasında tanımlanan yerde (namespace içi/dışı, class içi) aynı isimde birden fazla class tanımlanamaz.

## Sınıf İle Nesne Modeli Tasarlama

- Class'ın içinde oluşturulan değişkenlere `field` diyoruz.

## Sınıf Modelinden Referans Noktası Oluşturma

- Referans Stack'te tutulan ve Heap'teki bir nesneyi işaretleyebilen değişken türüdür. Biz buna değişken türü değil referans noktası diyeceğiz.
- Bir class tanımlandığında o class adı bir türdür. O türü kullanmak için class adını kullanmak yeterlidir. Eğer ki referans noktasında herhangi bir nesne referans edilmiyorsa, referans `null` değere sahiptir.
