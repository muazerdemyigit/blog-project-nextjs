---
title: "Nesne Tabanlı Programlama #16 - Inheritance(Kalıtım) Nedir - 1. Bölüm"
subtitle: "OOP-13"
date: "08-03-2023"
---

## **Bir Programcı Açısından Kalıtım(`Inheritance`) Nedir?**

- Kalıtım, `OOP`'nin en önmli özelliğidir.
- Üretilen nesneler farkl nesnelere özelliklerini aktarabilmekte ve böylece hiyerarşik bir düzenleme yapılabilmektedir.
- Bir programcı açısından bu özellik;

  - Aynı aile grubundan gelen nesnelerin ya da eşit seviyede olan tüm olguların benzer özelliklerini tekrar tekrar her birinde tanımlamaktansa bir üst sınıfta tanımlanmasını ve her bir sınıfın özellikleri üst sınıftan kalıtımsal olarak almasını sağlamaktadır.
  - Böylece hem kod maliyeti düşmekte, hem de mimarisel tasarım açısından avantaj sağlanmaktadır.

- Yani amaç; Aynı olguda olan sınıfların tekrar eden `member`'ları başka sınıfta toplansın ve oradan ilgili sınıflara kalıtımsal olarak aktarılsın.
- Erkek ve kadın sınıfları insan sınıfından kalıtım alırsa/türetilirse/miras alırsa insan sınıfındaki tüm `member`'lar (erişimine/miras olarak aktarılmasına izin verilen `member`'lar) miras olarak aktarılacaktır.
- Genellenemeyen, diğerlerinde olmayan ve sadece o sınıfa ait olan özellikler direkt olarak ilgili sınıfta tanımlanmalıdır.
- `OOP`'de kalıtım özünde nesnelerin birbirinden türemesini saplayan bir özelliktir.

## **C# Programlama Dilinde Hangi Yapılar Kalıtım Alabilirler?**

- C# programlama dilinde kalıtım sınıflara özel bir niteliktir.
- Yani bir sınıf sadece bir sınıftan kalıtım alabilir.
- `Record`'lar kalıtım alabilmektedir ancak sadece kendi aralarında. Aklıtım alabildikleri tek istisnai sınıf `object` sınıfıdır.
- Ayrtıca `abstract class`, `interface` ve `struct` gibi yapıların da kendilerine göre kalıtımsal operasyonları mevcuttur.

## **C#'ta Kalıtım Nasıl Alınır?**

### `:` Operatörü

- C#'ta iki sınıf arasında kalıtımsal ilişki kurabilmek için `:` operatörü kullanılmaktadır. Kalıtımsal tüm ilişkiler `:` öperatörü ile yapılmaktadır.

- Örneğin:

```csharp
class Araba
{
    public string Marka{get; set;}
    public string Model{get; set;}
    public int KM{get; set;}
}
class Opel : Araba //Soldaki, sağdakinden kalıtım alsın. Yani Opel sınıfı Araba sınıfından kalıtım alsın.
{

}
```

![oop-5](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/oop-5.png)
