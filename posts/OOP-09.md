---
title: "Nesne Tabanlı Programlama #10 - Record Nedir - OOP'de ki Yeri Neresidir (C# 9.0)"
subtitle: "OOP-10"
date: "06-03-2023"
---

## **`Record`'u Anlayabilmek İçin Ön Hazırlık | `Init-Only Properties`**

- C# 9.0'da, herhangi bir nesnenin `property`'lerine ilk değerinin verilmesi ve sonraki süreçte bu değerlerin değiştirilmemesini garanti altına almamızı sağlayan `Init-Only Properties` özelliği gelmiştir. Yani elimizdeki nesnenin herhangi bir `property`'sini `read only` hale getiriyor.
- Bu özellik sayesinde nesnenin sadece ilk yaratılş anında `property`'lerine değer atanmakta ve böylece iş kuralları gereği `runtime`'da değeri değişmemesi gerekn nesneler için ideal bir önlem alınmaktadır.
- Oluşturulan nesnenin oluşum sürecinde(`Object Initializer` sürecinde), orada ilk değer atayabiliyorsak `Init-Only Properties`, atayamıyorsak `read only`(`getter only`) `properties`.

## **`Init-Only Properties` Tanımlama**

- `Init-Only Property` oluşturabilmek için "`init`" keyword'ü kullanılmalıdır.

- Örneğin;

```csharp
public string Name{get; init;} = "kutsal isyan";
```

-`init` keyword'ü, `get` olmadan kullanılamaz ayrıca `set` ile de kullanılamaz.

## **`Records` Nedir?**

- Eğer ki tek bir `property`'de `read only`'lik amaç ediniliyorsa `Init-Only Properties` özelliği kullanılır.
- Eğer ki bir objeyi bütünsel olarak değişmez yapmak istiyorsak `Record` türü kullanılır.
- `Record`, bir objenin topyekün olarak sabit/değişmez kalmasını sağlamakta ve bu durumu güvence altına almaktadır.
- Böylece bu obje, artık değeri değişmeyeceğinden dolayı esasında `object`'den ziyade bir değer gözüyle bakılabilir yapıya dönüşmektedir.
- Nesne ön plandaysa bu `class`, nesnenin değerleri ön plandaysa bu `record`'dur.
- `Record`'lar bir `class`'dır. Sadece nesnelerinden ziyade, değerleri ön plana çıkmış bir `class`.
- Yani `class`'larda nesne ön planda olduğu için oluşturulan `instance`'ler `Equals(x, y)` ile `false` sonuç döner. `Record`'larda değerler ön planda olduğu için oluşturulan `instance`'ler `Equals(x, y)` ile `true` sonuç döner.

## **`Record` Tanımlama**

- Prototip:

```csharp
record [name]
{

}
```

- Örnek:

```csharp
public record Book
{
    public string Name{get; init;}
    public string Author{get; init;}
}
```

> NOT:
> `Record` içinde, `class` ile yapılan bütün tanımlamalar yapılabilir. `Record`'un içinde değeri ön planda tutmak için oluşturulan `property`'lerin hepsini `init` yapmalıyız.

## **`With Expressions`**

- `Immutable`(sabit/değişmeyen) türlerde çalışırken nesne üzerinde değişiklik yapabilmek için ilgili nesneyi ya çoğaltmamız(`deep copy`) ve üzerinde değişiklik yapmamız gerekmekte ya da manuel olarak yeni bir nesne üretip mevcut nesnedeki değerleri, değişikliği yansıtacak şekilde aktamamız gerekmektedir.
- `Record` kullanımı ile elimizdeki `record`'u direkt kopyalamayı sağlayan `with` ifadesi vardır.

- Örnek:

```csharp
static void Main(string[] args)
{
    Employee employee1 = new Employee
    {
        Name = "Muaz",
        Surname = "Yiğit",
        Position = 1
    };
    Employee employee2 = employee1 with{Position = 2};
    Employee employee3 = employee1 with{Name = "Ali", Position = 3};
    Employee employee4 = employee2 with{Name = "Veli", Surname = "Yılmaz", Position = 4};
}



public record Employee
{
    public string Name{get; init;}
    public string Surname{get; init;}
    public int Position{get; init;}
}


```
