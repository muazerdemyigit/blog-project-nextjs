---
title: "Nesne Tabanlı Programlama #18 - Inheritance(Kalıtım) Nedir - 3. Bölüm"
subtitle: "OOP-15"
date: "09-03-2023"
---

## **Nesnelerin Atası `Object` Türü**

- C# programlama dilinde tüm sınıflar `Object` sınıfından türetilir.
- Eğer ki tanımlanan sınıf herhangi bir kalıtım almıyorsa `default` olarak `Object` sınıfından türetilecektir.
- Eğer herhangi bir sınıftan kalıtım almıyorsa, bir sınıfın aynı anda birden fazla sınıftan kalıtım alamama prensibinden yola çıkarak bir yandan da `Object` sınıfından türemeyecek, sadece kalıtım aldığı sınıftan türeyecektir.
- Tabi burada kalıtım veren sınıf herhangi bir sınıftan türemiyorsa, en nihayetinden `Object`'ten türeyeceği için dolaylı yoldan `Object`'ten kalıtım alır.

## **İsim Saklama(`Name Hiding`)**

- Kalıtım durumunda atalardaki herhangi bir `member` ile aynı isimde `member`'a sahip olan nesneler olabilmektedir. Hem `base class`'ta hem `derived class`'ta aynı isimde `member` mevcutsa bu `member`'in nereden geldiğini bilemeyiz.
- Bu duruma `Name Hiding` denir.

## **`Name Hiding` Denmesinin Nedeni**

- Çünkü `base class`'taki `member`'a `derived class` üzerinden erişmek mümkün değildir. Yani `base`'deki member gizlenmiştir, `hide` edilmiştir.
- Bu durumda derleyici bir hata vermeyecektir fakat bir uyarı vercektir.
- `new` keyword'ünün kullanılması gerektiğini söyleyecektir. Eskiden böyle bir gereklilik vardı ancak günümüzde böyle bir şeye gerek yok.
