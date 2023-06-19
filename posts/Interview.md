---
title: "C# ve .Net Mülakat Notları"
subtitle: "Interview"
date: "19-06-2023"
---

# **_Değer ve Referans Tipler_**

- Nesnel programlama büyük ölçüde referans tiplerin üzerine kuruludur. Referans tiplerin asıl amacını anlamak, nesnel programlama sırasındaki işlemlerimizin temelini kavramakta büyük bir katkı sağlayacaktır.

## **_Peki Nedir Bu Referans Tip?_**

- Değer tipler ve referans tipler bellekte iki alanda tutulurlar. Bu alanlardan birisinin ismi `Stack` diğerinin ismi `Heap`'dir.

- Değer tipler; veriyi taşıyan ve taşıdığı veriye göre bellek üzerinde yer dolduran değişken türleridir. Bellekte az yer kaplarlar ve hızlı bir şekilde erişilebilirler. Ayrıca belleğin `Stack` bölgesinde tutulurlar.
- Referans tipler ise, bellek bölgesinde veri yerine adresi tutarlar ve o adresin gösterdiği yerde de veri tutulur. Başka bir deyişle, bir ifade referans türleri içeriyorsa nesnenin adresi üzerinden işlem yapılmaktadır. Veri taşınmasını gerektiren işlemlerde nesnenin bütün verisi kopyalanmaz.
  ![Değer ve Referans Tipler](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/interview-1.png)

- Aşağıda bu hangi değişkenlerin hangi tip olduğunu görebilirsiniz:
  ![Değer ve Referans Tipler](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/interview-2.png)

Örnek:

```csharp
string[] sehirler1 = new string[]{"Ankara", "İstanbul", "İzmir"};
string[] sehirler2 = new string[]{"Adana", "Bursa", "Bolu"};
sehirler2 = sehirler1;
sehirler2[0] = "Eskişehir";
Console.WriteLine(sehirler1[0]);
```

- Burada `string[] sehirler1` ve `string[] sehirler2` bölümleri yani tanım bölümü `stack`'de oluştu. İçindeki değerler de yani `{"Ankara", "İstanbul", "İzmir"}` ve `{"Adana", "Bursa", "Bolu"}` `heap`'de oluştu.
- `sehirler2 = sehirler1;` denildiğinde değer tipli olsaydı `sehirler2'nin değeri = sehirler1'in değeri` diye okurduk. Referans tip olduğunda `sehirler2'nin referansı = sehirler1'in referansı;` olarak okuyacağız. Yani `sehirler2`'nin referansı değişmiş oldu. Yani `sehirler1`'in değerlerini referans etmeye başladı.
- `sehirler2[0] = "Eskişehir";` denildiği zaman `"Ankara"` yerine `"Eskişehir"` yazılmış olur.
- Dolayısıyla konsola `sehirler1[0]` yazıldığı zaman şehir olarak `"Ankara"` yerine `"Eskişehir"`yazılır.

> NOT: `sehirler2`'nin ilk değerleri, yani `{"Adana", "Bursa", "Bolu"}` referansı kalmadığı için `Garbage Collector` tarafından imha edilecektir.

> NOT: `string` referans tiptir ancak çalışma şekli değer tip gibidir.

---

---

# **_`Interface` Nedir? Ne İşe Yarar?_**

- `Interface`'ler yazılımsal olarak `class`'lara arayüz görevi görür ve `class`'ların o operasyonu imzalamasını zorunlu hale getirir.
- `Interface`'ler sürdürülebilir yazılımın en büyük üyelerinden bir tanesidir. Değişim sürecini rahatlıkla yürütmemizi sağlarlar.
- Sonradan eklenecek özelliklere uyum sağlama sürecini hızlandırır ve kolaylaştırır.

  > NOT: `Interface`'ler `new()`'lenemez.

  ![Değer ve Referans Tipler](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/interview-3.png)

- Sınıf yapılarımız birden fazla `interface` ile `implement` edilebilir.
- `Interface` yapıları rehber, yol göstericiler olarak tanımlandığı için içerisinde metot oluşumları ve `property`'ler dışında kod blokları bulunmaz.
- `Interface` yapılarımızda bulunan tüm özellikler `public` olarak kabul edilir.
- Bir `interface` (arayüz) yapısını başka bir `interface` tarafından türetebiliriz.
- Sınıflar `implement` ettiği interface içerisindeki bulunan tüm özellikleri `implement` etmek zorundadır.
- `Interface` yapılarımızda oluşturduğumuz metotlar gövdesizdir. Bu yapısı ile `abstract` metotlara benzerlik gösterir.
- `Interface` (arayüz) yapılarımızı kullanarak nesneler oluşturamayız.

---

---

# **_`Framework` ve `Library` Kavramları Nedir? Farkları Nelerdir?_**

- `Framework` uygulama çatısıdır. Yani siz uygulamanızı o çatıya göre geliştirirsiniz.
- Örneğin `ASP.NET MVC` bir framework'dür. `jQuery` ise bir kütüphanedir. `MVC` içerisinde `jQuery` kullanılır.
- Kütüphanelerin ortak özelliği işleri kolyalaştırmalarıdır.
- Yani `library` basitleştirilmiş metotlar topluluğudur, `framework` uygulama çatısıdır.

---

---

# **_`SOLID` Prensipleri Nedir? Bize Ne Sağlar?_**

- Yazılımda sürdürülebilirliği desteklemek için kullanılan prensiplerdir.
- **`SOLID`**'in Açılımı:
  - **`S`** ingle Responsibility Principle
  - **`O`** pen Closed Principle
  - **`L`** iskov's Substitution Principle
  - **`I`** nterface Segregation Principle
  - **`D`** ependency Inversion Principle
    ![solid](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/interview-4.png)

## **`Single Responsibility Principle`**

- Kelime anlamı olarak **Tek Sorumluluk Prensibi** demektir.
- Bütün yapılar sadece birer iş yapmak zorundadır.

## **`Open Closed Principle`**

- Uygulamalar geliştirmeye açık ancak değişime kapalı olmalıdır.
- Uygulamalar yeni özellikler eklemeye açık olmalıdır ancak bu değişiklikleri mevcut kodaları değiştirerek yapmamalıyız.

## **`Liskov's Substitution Principle`**

- Türeyen sınıf yani alt sınıflar ana(üst) sınıfın tüm özelliklerini ve metotlarını aynı işlevi gösterecek şekilde kullanabilme ve kendine ait yeni özellikler barındırabilmelidir.
- Kodlarımızda herhangi bir değişiklik yapmaya gerek duymadan alt sınıfları, türedikleri(üst) sınıfların yerine kullanabilmeliyiz.

## **`Interface Segregation Principle`**

- Sorumlulukların hepsini tek bir arayüze toplamak yerine daha özelleştirilmiş birden fazla arayüz oluşturmayı tercih etmemizi söyleyen prensiptir.
- `Interface`'lerin implementasyonu yapıldığında eğer bir operasyon o implementasyon içerisinde yoksa onu ayrıştırmalıyız.

## **`Dependency Inversion Principle`**

- Yüksek seviyeli sınıfların düşük seviyeli sınıfları somut halleriyle değil de soyut halleriyle kullanmasıdır. Böylece bağımlılık düşmüş oluyor.
- Bu prensipte temel olarak `Dependency Injection` tasarım deseni kullanılır. Bu desende `construcor`'dan bağımlılık sınıfının implementasyonu olan interface kullanılır.
- Katmanlı mimarideki katmanların geçişini sağlamak için yaygın olarak kullanılır.

---

---

# **_`IoC Container` Nedir?_**

- `Inversion of Control`'ün kısaltmasıdır.
- Bizim için üst seviyeli sınıflarımızın ihtiyaç duyduğu nesnenin arka planda örneğini tutuyor. Ayrıca `instence`'nin yaşam döngüsünü tutuyor.

---

---

# **_Katmanlı Mimari Nedir?_**

- Yazılımda belirli katmanların oluşturulması ve bu katmanlara göre kodların yazılmasıdır.
- Temeli 3 Katmanlı Mimari'dir.

1.  `Data Access Layer`: Veritabanı ile etkileşim kurulan katmandır. Burada yapılan operasyonlar çok nettir. `Select`, `Insert`, `Update`, `Delete` komutları bu katmanda yazılır.
2.  `Business Layer`: Burada iş kuralları yazılır. Kontrollerin yapıldığı yer burasıdır. `Data Access Layer` ile iletişim halindedir. `Data Access`'den veriye göre yapılacak işleme karar verir.
3.  `User Interface Layer(UI)`: Arayüz katmanıdır. Bu katmanda sadece arayüz ile alakalı kod yazılmalıdır. `UI`, `Business` ile iletişim halindedir.

---

---

# **_`Abstract Class` Nedir?_**

- `Abstract Class`'lar class yapısına sahiptir.
- Hem tamamlanmış hem tamamlanmamış operasyon içerebilir. `Interfaceler` tamamlanmamış operasyon içerebiliyordu.
- Ortak opersayonlar ve ortak olmayan opersayonları kullanmak için kullanılır.
- `Abstract Class` ile normal `Class` arasındaki fark, `Abstract Class`'lar `new()`'lenemez.
- Bir sınıf sadece bir tane `Abstract Class` `inherit` edebilir.

> NOT: `Abstract Class`'lar `constructor` içerebilir. `Constructor`'u protected olmalıdır.

---

---

# **_`Virtual Metodlar` Nedir?_**

- `Virtual`, metodlara uygulanan anahtar bir sözcüktür. Ve `Virtual` olarak tanımladığımız metodlarımızı, diğer `class`'larda `override` edebiliriz.

---

---

# **_`Access Modifiers - Private, Protected, Internal, Public`_**

- `Internal`: `Internal` ile tanımladığımız bir sınıf ya da değişkene aynı `Public`’de olduğu gibi proje içerisinde ya da `Namespace` (isim alanı) içerisinde erişebiliyoruz. `Internal`’ın `Public`’ten farkı ise tanımladığı yapıya diğer projelerden ulaşım iznini vermemesidir.

- `Public`: `Public` ile tanımladığımız alanlara farklı projeler de dâhil olmak üzere `Solution` içerisinde her yerden erişilebilmektedir.

- `Private`: `Private` ile tanımlanmış olan bir alana sadece tanımlandığı sınıf içerisinden ulaşılabilmektedir. Erişim belirleyiciler içerisinde erişim alanını en çok sınırlandıran ve de bir değişkenin varsayılan erişim belirleyicisi olan belirleyici `Private`’dır.

- `Protected:` `Protected` ile tanımlanan alanlara sadece tanımlandığı sınıf içerisinde ya da o sınıfı miras alan (`inheritance`) sınıf içerisinde ulaşılabilmektedir.

- Erişim miktarı az->çok olarak : `Private->Protected->Internal->Public`

---

---

# **_`MVC` Nedir?_**

- `MVC` bir tasarım desenidir. Katmanlı mimari değildir, arayüz için tasarım desenidir.
  ![mvc-nedir](https://raw.githubusercontent.com/muazerdemyigit/blog-project-nextjs/main/public/images/interview-5.jpg)
- Üç bileşenden oluşur.
  1. `Model`
  2. `View`
  3. `Controller`
- `Controller` isteği alan yer, `View` görüntü yani `HTML CSS JS`, `Model` ise `View`'da gösterilecek data veya `View`'dan kullanıcı tarafından doldurulup `Controller`'a gönderilen data.

---

---

# **_`Polimorphism` Nedir?_**

- `Polimorphism` soyutlamanın en temel olayıdır.
- Çok biçimlilik demektir.
- `Inherit` veya `implement` edilen nesne üzerinden farklı biçimdeki `implementasyon`'ları veya `inheritence`'leri kullanma yöntemidir.
- Programımızda oluşan bir nesne yapısının birbirinden farklı nesneler şeklinde davranmasını sağlayan yapıdır.
