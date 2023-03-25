---
title: "Nesne Tabanlı Programlama #11 - Özel Sınıf Elemanları - Constructor Metot Nedir"
subtitle: "OOP-10"
date: "07-03-2023"
---

## **`Constructor` Nedir?**

- `Constructor` bir nesne üretimi sürecinde ilk tetiklenen metottur.
- Nesne üretilirken `new MyClass()` yapısındaki `()` `constructor`'dur.
- `Constructor`, nesne oluşturma sürecinde tetiklenmek zorundadır.

## **`Constructor` Davranış Modeli**

- Nesnenin içindeki `field`'lara `constructor` ile değer atanırsa, atanan değerler nesne oluşturulduğunda atanmış bir şekilde gelecektir.
- Bu nesne oluşturulurken `constructor` tetikleneceğinden dolayı ilgili nesne içerisindeki `field`'lara ilk değerleri verilmiş olacaktır.
- `Constructor` `new` ile yaratma talebi geldikten ve ilgili nesneye hafızada yer ayrıldıktan sonra tetiklenir.

## **`Constructor` Metot Nasıl Oluşturulur?**

- `Constructor`, özel bir sınıf elemanıdır. Özel olsa da fıtrat olarak bir metottur. Lakin bildiğimiz metot imzalarından farklıdır.
- `Constructor`'ların;
  - Metot adı sınıf adıyla aynı olmalıdır.(özel sınıf elemanları dışında hiçbir member sınıf adıyla aynı olamaz)
  - Geri dönüş değeri olmaz/belirtilmez.
  - Erişim belirleyicisi `public` olmalıdır.(`Private` durumu incelenecektir.)
- Yani bir `constructor` metot tanımlamak için bir sınıf içinde, o sınıfla aynı isme sahip, geri dönüş değeri tanımlanmamış bir metot tanımlamalıyız.

- Örnek:

```csharp
class MyClass
{
    public MyClass()
    {

    }
}
```

- Her sınıfın içerisinde tanımlamasak dahi `default` olarak bir `constructor` mevcuttur. Eğer bir `class`'a `constructor` eklersek `default` `constructor`'u ezmiş oluruz.

> NOT:
> `Constructor`'lar parametre alabilmektedirler ve `overload` yapılabilen fonksiyonlardır.

> NOT:
> Eğer bir `constructor` metodu `private` yapılırsa, o sınıfın `constructor`'ına erişilemeyeceği için nesne üretim esnası baltalanmış olur. Haliyle nesne üretimi engellenmiş olur.(İlgili sınıf dışında nesne oluşumu engellenir.)

## **`this` `Keyword'ü` ile `Constructor`'lar Arası Geçiş Yapabilme**

- Bir sınıfta birden fazla `overloading` yaparak `constructor` tanımladığımızda hehangi bir `constructor` üzerinden, sınıftan nesne inşa ederken farklı `constructor`'ları da tetiklenmesini isteyebiliriz. İşte bunun için `this` `keyword`'ünü kullanabilmekteyiz.
- `this` `keyword`'ü sınıfın o anki nesnesini temsil ederken, aynı şekilde bir sınıfın nesnesinin içerisindeki `constructor`'lar arası geçiş yapabilme sorumluluğunu da üstlenebilmektedir.

- Örnek:

```csharp
public MyClass()
{

}
public MyClass(int a) : this() //bu şekilde kullanılır.
{

}
```

> NOT:
> `Record`'larda `constructor` oluştururken, `class`'larda `constructor` oluşturma kurallarının hepsi geçerlidir.
