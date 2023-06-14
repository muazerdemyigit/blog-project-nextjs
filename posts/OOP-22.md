---
title: "Nesne Tabanlı Programlama #25 - Interface İle Çalışmak"
subtitle: "OOP-22"
date: "14-06-2023"
---

# **`Interface` İle Çalışmak**

- `Interface`'lerin kullanım amacı bir temel nesne oluşturup bütün nesneleri ondan implemente etmektir.

- Interface'ler soyut nesnelerdir. Soyut nesneler kendi başlarına hiçbir anlam ifade etmezler. Bu nedenle hiçbir zaman `instance`'leri oluşturulamaz..

- `Interfaceler` yazılırken metodun sadece imzası yazılır.

- Bir `class` birden fazla `interface` implemente edebilir.

```csharp
interface IPerson
{
    int Id {get; set;}
    string FirstName {get; set;}
    string LastName {get; set;}
}

class Customer : IPerson
{
    public int Id {get; set;}
    public string FirstName {get; set;}
    public string LastName {get; set;}

    public string Adress { get; set;}//Interface haricinde özellik eklenebilir.
}

class Student : IPerson
{
    public int Id {get; set;}
    public string FirstName {get; set;}
    public string LastName {get; set;}

    public string Departmant { get; set;}
}

```
