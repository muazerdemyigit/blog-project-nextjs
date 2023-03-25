---
title: "Nesne Tabanlı Programlama #23 - Sınıf Modeline Özel Keyword'ler - this - base - readonly"
subtitle: "OOP-20"
date: "20-03-2023"
---

## `this` Keyword'ü

- Bir sınıfın, uygulamanın herhangi bir noktasında üretilmiş olan `instence`'larını/`object`'lerini sınıf içerisinde temsil etmemizi sağlayan bir keyword'dür.
- Bir sınıf içerisinde bulunan birden fazla `constructor` `overload`'ı arasında atlamamızı sağlayan bir keyword'dür.

## `base` Keyword'ü

- `base` keyword'ü, bir `instance`'ın `base class`'ını sınıf modeli içerisinde temsil eden bir keyword'dür.
- `Base Class`'daki `constructor`'lardan seçim yapmamızı sağlar.

## `readonly` Keyword'ü

- Bir class içerisinde tanımlanmış olan değişkenlerin yahut referansın sadece okunabilir olmasını sağlayan bir keyword'dür.
- `readonly` keyword'ü ile işaretlenmiş olan referansların değerleri ya tanımlanma noktasında ya da `constructor`'da verilebilir.

> NOT:
> `const` yapılanmalar, `readonly` ile karıştırılabilir. Aralarındaki fark şöyledir; `const` tanımlandığı yerde değeri verilmelidir ve `constructor` içerisinde bile değer ataması gerçekleştiriklemez. Lakin `readonly`'de ister tanımlama noktasında, isterseniz de `constructor` içerisinde değer ataması gerçekleştirilebilir.
