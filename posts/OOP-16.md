---
title: "Nesne Tabanlı Programlama #19 - Sanal Yapılar - virtual - override"
subtitle: "OOP-16"
date: "10-03-2023"
---

- Bir nesne üzerinde var olan tüm `memberlar`'ın tamamı derleme zamanında belirgindir.
- Yani, derleme aşamasında hangi nesne üzerinden hangi metotların çağırılabileceği bilinmektedir.
- Sanal yapılar ile derleme zamanında kesin bilinen bu bilgiler `runtime`'da belirlenebilmektedir. Yani ilgili nesnenin hangi metodu kullanacağı bilgisi runtime'da kararlaştırılır.

# **Sanal Yapı Nedir?**

- Sanal yapılar, bir sınıf içerisinde bildirilmiş olan ve o sınıftan türeyen alt sınıflarda da tekrar bildirilebilen yapılardır.
- Bu yapılar `metot` ya da `property` olabilir.
- `Name Hiding` ile bir sınıftaki herhangi bir `member`'i ondan türeyen torunlarda olşturabiliyoruz ve buradaki yaşanan çakışmaya da `Name Hiding` diyoruz.
- Sanal yapılarda olay bu şekilde değildir. Bir sınıfta bildirilen sanal yapı bu sınıftan türeyen torunlarında ezilebilmekte yani devre dışı bırakılıp yeniden oluşturulabilmektedir.
- Atalardaki herhangi bir `member`'in içeriğinin bilinçli bir şekilde torunlarda değiştirilmesi operasyonunu sanal yapılanmalar ile sağlıyoruz.
- Bu şu demektir, atalardaki o özellik devre dışı bırakılıyor yani bir isim çakışmasından ziyade atadaki herhangi bir özelliği bilinçli bir şekilde herhangi bir torunda değiştirilmesi ve ondan sonra o değişiklikle devam etmesidir.
- Yani sanal yapılanmalarda `Name Hiding`'de olduğu gibi bir isimsel çakışmadan ziyade üstten gelen bir yapının işlevini iptal edip yeniden yapılandırma vardır.
- Sanal yapılarda çağırılan `member`'in hangi türe ait olduğu `Run Time`'da belirlenir.
- Bir sanal `member`'in hangi türe ait olduğunun bu şekilde `run time`'da belirlenmesine `Geç Bağlama`(`Late Binding`) denir.

# **Bir Sınıfta Sanal Yapı Nasl Oluşturulur? | `Virtual` Keyword'ü**

- Bir sınıfta sanal yapı oluşturabilmek için ilgili member'in imzasını `virtual` keyword'ü ile işartelemek yeterlidir.

# Sanal Yapılar Nasıl Ezilir? | `Override` Keyword'ü

- Bir `class`'ta `virtual` ile işaretlenerek sanal hale getirilmiş bir `member` bu `class`'an miras alan torunlarında ezilmek/yeniden yazılmak isteniyorsa eğer bu `class`'tan imzası `override` keyword'ü işaretlenmiş vaziyette tekrardan aynı `member` oluşturulur.
- `Base Class`'ta ya da atalarda `virtual` ile işaretlenerek sanallaştırılımış herhangi bir `member` torunlarda illa ki `override` ile ezilmek zorunda değildir.
- Ama bir torun `Base Class`'taki herhangi bir `member`'i `override` edecekse eğer o `member`'in kesinlikle `virtual` ile işaretlenmiş olması gerekmektedir.
- `Virtual` ile işaretlenmemiş bir `member` kesinlikle `override` edilemez.

> NOT: `Override` yazıp boşluk bırakırsak o sınıftın miras aldığı tüm `virtual metot`'lar görünür.

> İleride Göreceğimiz Konular Hakkında Notlar:
>
> - Sanal yapılar, `OOP`'de `Polimorifzm`(Çok Biçimlilik)'i uygulayan yapılardır.
> - `Static` yapılanmalar sanal olarak bildirilmezler.
