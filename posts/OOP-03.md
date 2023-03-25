---
title: "Nesne Tabanlı Programlama #3 - Class Members"
subtitle: "OOP-3"
date: "04-03-2023"
---

## **Field Nedir?**

- Nesne içerisinde veri depolayabildiğimiz alanlardır.
- Class içindeki değişkenlerdir. Herhangi bir türden olabilir.
- Türüne özgü varsayılan değer alır.

## **Property Nedir?**

- Nesne içerisinde özellik/property sağlar.
- Property aslında bir metottur. Ancak fiziksel olarak metottan farkı parametre almamakta ve içerisinde `get` ve `set` olmak üzere iki adet blok almaktadır.
- Metotta `()` vardır, property'de parantez`()` yoktur.
- Property'e değer atandığında `set` bloğunda bu değeri yakalarız.
- Property'nin değeri okunmak istendiğinde `get` bloğu tetiklenir ve değeri return eder.
- Property'nin işlevsel açıdan metottan farkı yoktur. Ancak davranışsal olarak nesne üzerinde değer okuma ve değer atama işlemlerinde kullanılır.
- `get` ve `set` aslında metottur.
- Yazılımcılar nesnelerin içindeki `field`'lara direkt erişilmesini istemezler. Dolayısıyla `field`'lardaki verileri kontrollü bir şekilde dışarıya açmak isterler. Böyle bir durumda property kulanılır.
- Yani property yapıları özünde nesne içerisindeki bir field'in dışarıya kontrollü açılmasını ve kontrollü bir şekilde dışarıdan değer almasını sağlar.
- İşte propertylerin bu işlemine `ENCAPSULATION(Kapsülleme)` denir.

## **Encapsulation**

- Encapsulation bir nesne içerisindeki dataların(field'lardaki verilerin) dışarıya kontrollü bir şekilde açılması ve kontrollü bir şekilde veri alınamasıdır.

- İşte bu şekıilde field'lardaki verilerin erişim kontrolünün yapılması için geliştirilmiş yapılara property denir.

## **FULL PROPERTY(Property İmzaları)**

- En sade property yapılanmasıdır.
- İçerisinde `get` ve `set` blokları tanımlanmalıdır.
- İmzası:

```csharp
[erişim belirleyicisi][geri dönüş değeri][property adı]
{
    get
    {

    }//Property'den veri istendiğinde tetiklenir.
    set
    {

    }//Property'e veri gönderildiğinde tetiklenir.
}
```

- Full Property'lerde get bloğu tanımlanmazsa sadece okunabilir(`read only`), set bloğu tanımlanmazsa sadece yazılabilir(`write only`) olacaktır.
- Property hangi türden `field`'ı temsil ediyorsa geri dönüş değeri o tipten olmalıdır.
- Property'ler temsil ettikleri `field`'ın isimlerinin baş harfi büyük olacak şekilde isimlendirilir.
- `get` içerisinde return ile `field` geri döndürülebilir. Property üzerinden değer talep edildiğinde bu blok tetiklenir. Burada istenilen algoritmik operasyon sonucunda return edilebilir.
- `set` içerisinde değer gönderilir ve bu gönderilen değer `value` keywordu ile yakalanır.
- `value` keywordu property'nin türü neyse o türe bürünecektir. `field=value` şeklinde kullanılabilir.
- Örneğin:

```csharp
MyClass myClass = new MyClass();
Console.WriteLine(myClass.Field);//get tetiklenir.
myClass.Field = 65; //set tetiklenir.
```

## **PROP PROPERTY(Property İmzaları)**

- Bir property her ne kadar encapsulation yapsa da temsil ettiği field'daki dataya müdahale etmeden erişilmesini ve veri atanmasını sağlıyorsa bu durumda kullanılan property imzasıdır.
- İmzası:

```csharp
[erişim belirleyicisi][geri dönüş değeri][property adı]{get; set;}
```

- Prop property'ler compile edildiklerinde arka planda kendi field'larını oluştururlar. Dolayısıyla bir field tanımlamaya gerek yoktur.
- Prop imzalarda ilgili property read only olabilir ancak write only olamaz.

## **AUTO PROPERTY INITIALIZERS(Property İmzaları)**

- Bir property'nin ilk değerini nesne ayağa kaldırılır kaldırılırmaz verebiliriz.
- Bu özellik sayesinde read only proplara hızlıca değer atanabilmektedir.

## **REF READONLY RETURNS(Property İmzaları)**

- Bir class içerisindeki referansıyla döndürmemizi sağlayan ve bir yandan da bu değişkenin değerini read only yapan özelliktir.

## **Metot Nedir?**

- Nesne üzerinde, field'lardaki veya dışarıdan parametreler eşiliğinde gelen değerler üzerinde işlem yapmamızı sağlayan yapılardır.

## **Indexer Nedir?**

- Nesneye indexer özelliği kazandıran, fıtrat olarak property ile birebir olan elemandır.
- İmzası:

```csharp
|erişim belirleyicisi| |geri dönüş değeri| this[parametreler]// parametreer köşeli parantezle yazılmalı
{
    get // Indexer'dan veri istendiğinde tetiklenir.
    {

    }
    set // Indexer'a veri gönderildiğinde tetiklenir. Gönderilen veriyi value keywordu ile yakalar.
    {

    }
}
```

- Örnek:

```csharp
MyClass myClass = new MyClass();
myClass[5] = 10;

//--------------
//Tanımlama
public int this [int a]
{
    get
    {
        return a;
    }
    set
    {

    }
}
```
