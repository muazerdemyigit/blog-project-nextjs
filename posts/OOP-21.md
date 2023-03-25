---
title: "Nesne Tabanlı Programlama #24 - sealed Keyword'ü Nedir - Ne Amaca Hizmet Etmektedir"
subtitle: "OOP-21"
date: "19-03-2023"
---

## `sealed` Keyword'ü Nedir?

- Bir sınıfın miras verilmesini yahut bir başka deyişle başka bir sınıf tarafından alınmasını engelleyen bir keyword'dür.
- Sadece sınıflarda ve sadece `override` edilmiş metotlarda kullanılabilir.

## Metot Üzerinde `sealed` Keyword'ünün İşlevi

- Kalıtımsal durumlarda, atalardan gelen ve birinci dereceden alt sınıf tarafından `override` edilmiş `virtual` member'ların hiyerarşideki sonraki sınıflar tarafından `override` edilmesini ilgili `member`'ı `sealed` ile işaretleyerek engelleyebiliriz.
- Pratikte bu yöntem sayesinde üst sınıfın davranışını güvenli bir şekilde korumuş ve ilgili metodun değiştirilmesini önlemiş oluyoruz.

## `sealed` Keyword'ü Hangi Durumlarda Kullanılmalıdır?

- Sınfın Davranışını Korumak İstediğimizde
  - Kalıtımsal hiyerarşide üst sınıfların özel metotları/davranışları varsa ve bu metotlardaki davranışların alt sınıflar tarafından değiştirilebilir olmasını istemediğimiz durumlarda, o metodu `sealed` olarak işaretleyebiliriz.
- Performans İyileştirmesi İstendiğinde
  - Mikro seviyede yapılan bir optimizasyon neticesinde C#'ta bir sınıf `sealed` ile işaretlendiğinde `sealed` olmayan bir sınıfa göre ufak çapta bir performans artışı gösterdiği anlaşılmıştır. Bunun nedeni, derleyicinin `sealed` ile işaretlenmiş sınıfın miras alamayacağını bilerek daha hızlı derleme yapmasıdır.
- `Singelton Design Pattern`
  - `Singelton Desig Pattern`'da bir sınıfın uygulama çapında tekil bir `instance`'ının olması amaçlanmaktadır. Haliyle ilgili sınıf `sealed` ile işaretlenerek, bu sınıftan herhangi bir kalıtımsal ilişkinin yaratılmasını engelleyebilir ve tek `instence` üretimini daha da garanti hale getirmiş oluruz.
