---
title: "Nesne Tabanlı Programlama #27 - Generic Sınıflar Ve Metotlar"
subtitle: "OOP-24"
date: "15-06-2023"
---

# **`Generic` Sınıflar Ve Metotlar**

- `Generic`'ler ile sıklıkla yaptığımız operasyonları nesne bazlı olarak değiştirebileceğimiz bir yapı oluşturabiliriz.

- `Generic` bir yapıyı oluşturabilmek için örneğin `interface`'ye veya `class`'a `<>` işareti içine bir şey yazmalıyız. Örneğin: `<T>`

```csharp
    interface IRepository<T>
    {
        List<T> GetAll();
        T Get(int id);
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
    }

    class Product
    {

    }

    interface IProductDal:IRepository<Product>
    {

    }

    class Customer
    {

    }

      interface ICustomerDal:IRepository<Customer>
    {

    }


    class CustomerDal : ICustomerDal
    {

    }
```

---

## `Generic` Metotlar

- `Generic`'ler metotlar için de kullanılabilir.

Örneğin

```csharp
class Program
{
    static void Main(string[] args)
    {
        Utilities utilities = new Utilities();
        List<string> result = utilities.BuildList<string>("Ankara","İzmir","Adana");//Burada ben sana böyle bir üçlü liste verdiğim zaman sen bana BuildList sonrasındaki <> içine yazdığım tipte bir liste oluştur dedik.
        foreach ( var item in result)
        {
            Console.WriteLine(item);
        }
        Console.ReadLine();
    }

    class Utilities
    {
        public List<T> BuildList<T>(params T[] items)//generic metotlar da aynı interfaceler gibi metodun isminin hemen sonrasına çalışılacak tipi vererek olur.
        {
            return new List<T>(items);
        }
    }
}
```

---

## `Generic` Kısıtları

- <T> ile `generic` yapı oluştururken `T`'nin olabileceği yapıları kısıtlayabiliriz.

```csharp
 interface IRepository<T> where T:class,IEntity,new()// Burada T referans tip olmalı, T IEntity'den implement etmeli ve T new'lenebilir olmalı dedik.
    {

    }
```

> NOT: Sadece değer tipleri koymak istersek `where T:struct` demeliyiz.
