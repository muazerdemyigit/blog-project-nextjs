---
title: "Nesne Tabanlı Programlama #9 - Derinlemesine Encapsulation Nedir"
subtitle: "OOP-9"
date: "06-03-2023"
---

## ENCAPSULATION Nedir? Bir Veriyi Neden Kapsülleriz?

- Encapsulation, nesnelerimizdeki field'ların kontrollü bir şekilde dışarıya açılmasıdır.
- Başka bir deyişle, nesnelerimizi isteğimiz dışında kullanımlara ve kontrolsüz değişime kapatmaktır.
- Yapılışı:

```csharp
static void Main(string[] args)
{
    MyClass m = new MyClass();
    m.A = 123123;//Set
    Console.WriteLine(m.A);//Get

}



class MyClass
{
    int a;

    public int A
    {
        get
        {
            return a;
        }
        set
        {
            a = value;
        }
    }
}
```
