---
title: "Nesne Tabanlı Programlama #12 - Özel Sınıf Elemanları - Destructor Metot Nedir"
subtitle: "OOP-11"
date: "07-03-2023"
---

## **Destructor/Finalizer Metot Nedir?**

- Bir class'tan üretilmiş olan nesne imha edilirken otomatik olarak çağırılan metottur.
- C# programlama dilinde Destructor sadece class yapılanmasında kullanılabilir ce bir class sadce bir tane Destructor fonksiyonu içermelidir.
- Destructor'da overloading işlemi yapılamaz ve parametre alamaz.
- Destructor yıkıcı metot diye geçer. Nesne imha edilirken devreye girer.

> NOT:
> Bir nesnenin imha edilmesi için bir daha erişilemez hale gelmesi gerekir. İmha işlemi Garbage Collector tarafından gerçekleştirilir.

## **Destructor Tanımlama Kuralları**

- Bir sınıf içerisinde sadece bir adet Destructor tanımlanabilir.
- Bir Destructor tanımlayabilmek için `~` işareti kullanılır.
- Destructor sınıf ismiyle aynı isimde olmalıdır.
- İmzası:

```csharp
class MyClass
{
    ~MyClass()
    {

    }
}
```
