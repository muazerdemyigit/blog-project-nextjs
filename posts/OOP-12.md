---
title: "Nesne Tabanlı Programlama #14 - Özel Sınıf Elemanları - Static Constructor Metot Nedir"
subtitle: "OOP-12"
date: "07-03-2023"
---

## **Static Constructor Metot**

- Bir sınıftan nesne üretirken ilk tetiklenen fonksiyon Static Constructor'dur.
- Constructor, ilgili sınıftan **_HER_** nesne üretiminde tetiklenen fonksiyondur.
- Static Constructor, ilgili sınıftan **_İLK_** nesne üretiminde tetiklenen fonksiyondur.

```csharp
class A
{
    ctor()
    {
        //Her nesnede tetiklenir.
    }
    static ctor()
    {
        //İlk nesnede tetiklenir.
    }
}
```

> NOT:
> Yani ilk nesne üretiminde ilk önce Static Constructor, ardından Constructor tetiklenir.

- Static Constructor'da geri dönüş değeri ve erişim belirleyicisi yoktur. İsmi class ismiyle aynıdır.

- İmza:

```csharp
class MyClass
{
    static MyClass()
    {

    }
}
```

- Overloading yapılmaz. Bir sınıf içerisinde sadece 1 tane tanımlanabilir, parametre almaz.
- Static Constructor tetiklenebilmesini, ilgili sınıfın içerisinde herhangi bir static yapılanmanın da tetiklenmesi de sağlayacaktır.
- Bu davranışların herhangi birisiyle tetiklenirse bir daha tetiklenmez, yalnızca bir defa tetiklenir.
