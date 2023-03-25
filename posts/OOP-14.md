---
title: "Nesne Tabanlı Programlama #17 - Inheritance(Kalıtım) Nedir - 2. Bölüm"
subtitle: "OOP-14"
date: "08-03-2023"
---

## **`Base Class` Ve `Derived Class` Nedir?**

- Kalıtım veren sınıfa `Base/Parent Class` denir.
- Kalıtım alan sınıfa `Derived/Child Class` denir.
- Bir sınıfın sadece tek bir tane `base class`'ı olabilir. Yani bir sınıfın `base class`'ı direkt türediği sınıftır. Atalarındaki tüm sınıflar `base class` değildir.
- Bir sınıfın birden fazla `derived class`'ı olabilir. Yani `base class` baba, `derived class` çocuklar gibi, bir baba vardır ama birden çok çocuk olabilir.
- Örnek:

```csharp
class A
{

}
class B : A // A base, B derived
{

}

class C : A // A base, C derived
{

}
class D : C // C base, D derived
{

}

```

## **Kalıtımın Altın Kuralı**

- Bir class'ın sadece bir `base class`'ı olur. Bunun nedeni, C# programlamlama dilinde bir class'ın sadece tek bir class'dan türetilmesine izin verilmesidir. Aynı anda birden fazla class'tan türeme işlemi gerçekleştirilemez.

## **Kalıtımda Nesne Üretim Sırası**

- Bir sınıftan nesne üretimi yapılırken kalıtım aldığı üst sınıflar varsa eğer önce o sınıflardan sırayla(yukarıdan aşağıya) nesne üretilir.

## **Bir Sınıftan `Base Class Constructor`'ına Ulaşım**

- Her hangi bir sınıftan nesne üretimi gerçekleştirilirken öncelikle `base class`'ından nesne üretiliyor, bu demektir ki önce `base class`'ın `costructor`'u tetikleniyor.
- Haliyle bizler nesne üretimi esnasında `base class`'ta üretilecek olan nesnenin `construcor`'larını tetikleyebilmeli yahut varsa parametre değerleri verebilmeliyiz.
- İşte bunun için `base` keyword'ünü kullanmaktayız.

- Örnek:

```csharp
class MyClass
{
    pulic MyClass(int a) // base class'ın ctor'u parametre alıyor.
    {

    }
}
class MyClass2 : MyClass
{
    puvlic MyClass2(): base(5) // O yüzden burada derived class'ta parametreyi base ile gönderdik.
    {

    }
}
```

> NOT:
> Eğer ki `base class`'ın `constructor`'u sadece parametre alan `ctor` ise `derived class`'larda `ctor`'a bir değer göndermek zorundayız. Bunu da `base` ile sağlayabiliriz. Eğer `base class`'ta boş parametreli bir `ctor` varsa `derived class`'ta `base` kullanmak zorunda değiliz, çünkü varsayılan olarak kalıtımda `base class`'daki boş parametreli `ctor` tetiklenir.

- Bir class'ın `constructor`'unun yanında "`: base(...)`" keyword'ünü kullanırsak o class'ın `base class`'ının tüm `constructor`'larını bize getirecektir. Haliyle ilgili sınıftan bir nesne üretilirken `base class`'tan nesne üretimi esnasında hangi `constructor`'un tetikleneceğini bu şekilde bildirebiliriz.

## **`base` Keyword VS `this` Keyword**

- `this`, bir sınıftaki `constuctor`'lar arasında geçiş yapmamızı sağlar.
- `base`, bşr sınıfın base class'ının `constructor`'larından hangisinin tetikleneceğini belirlememizi ve varsa parametrelerinin değerlerinin `delived class`'tan verilmesini sağlar.
- Ayrıca nasıl ki `this`, ilgili sınıfta o anki nesnenin `member`'larına erişebilmemizi sağlıyor, aynı şekilde `base` de `base class`'daki `member`'lara erişebilmemizi sağlar.

> NOT:
> `Base Class`'da erişilebilir olmayan `member`'lar `base` keyword'ü ile erişilemez.
