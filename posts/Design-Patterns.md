---
title: "Design Patterns"
subtitle: "Design-Patterns"
date: "20-06-2023"
---

# **_Design Patterns (Tasarım Kalıpları) Nedir?_**

- Design patterns yani tasarım kalıpları, yazılım geliştirmede yaygın olarak karşılaşılan zorluklar için yeniden kullanılabilir nesne yönelimli yazılımlardır. Yinelenen tasarım sorunlarına zaman içinde test edilmiş yanıtlardır. Hem bir çözümün açıklamasını hem de belirli bir sorunu ele alırken kullanımını açıklar.

- Bir tasarım kalıbı, bırakıp hemen kullanmaya başlayabileceğiniz bir kütüphane veya çerçeve değildir. Birçok geliştiricinin daha önce üstesinden geldiği bir sorunla karşılaştığında kullanılması önerilen, yerleşik bir düşünme tekniğidir. Özetle tasarım kalıpları, halihazırda yapılmış olanı yapmaktan kaçınmanıza yardımcı olur.
  ![Creational Design Patterns](creational-design-patterns.png)
  ![Structural Design Patterns](structural-design-patterns.png)
  ![Behavioral Design Patterns](behavioral-design-patterns.png)

---

---

# **_`Singleton Design Pattern`_**

![Singleton Design Pattern](singleton-design-pattern.png)

- `Singleton design pattern`, `creational design pattern` kategorisindedir.

- Bu tasarım örüntüsündeki amaç, bir `class`’tan sadece bir `instance` yaratılmasını sağlar. Yani herhangi bir `class`’tan bir `instance` yaratılmak istendiğinde, eğer daha önce yaratılmış bir `instance` yoksa yeni yaratılır. Daha önce yaratılmış ise var olan `instance` kullanılır.

- Bir `class`’ın `singleton` tasarım örüntüsüne uygun olması için temelde üç adım vardır;

  - `Constructor private` olmalı. Bu yapılan işlem `new` ile nesne oluşturulmasını engeller.
  - `Class` ile aynı türde `static` bir member oluşturulur.
  - Örneğin;

  ```csharp
       class SingletonExample
      {
       private static SingletonExample instance;
      }
  ```

  - `Static member`’a ulaşmak için `static` bir metot oluşturulmalıdır.
  - Örneğin;

  ```csharp
  public static Singleton getInstance() { … return instance; }
  ```

---

---

# **_`Factory Method Design Pattern`_**

![Factory Method Design Pattern](factory-method-design-pattern.png)

- `Factory Method Design Pattern`, `creational design pattern` kategorisindedir.

- Günümüzde en çok kullanlan `Design Pattern`'lerden birisidir.

- Amaç yazılımda değişimi kontrol altında tutmaktır.

- `Factory Method`, bir üst sınıfta nesneler oluşturmak için bir `interface` sağlayan, ancak alt sınıfların oluşturulacak nesnelerin türünü değiştirmesine izin veren yaratıcı bir tasarım desenidir.

## **_Ne zaman kullanabiliriz?_**

- Kodunuzun birlikte çalışması gereken nesnelerin tam türlerini ve bağımlılıklarını önceden bilmiyorsanız `Factory Methodu`u kullanın.
- `Library` veya `framework`’ünüzün kullanıcılarına dahili bileşenlerini `extend` etmenin bir yolunu sağlamak istediğinizde `Factory Method` kullanın.
- Var olan nesneleri her seferinde yeniden oluşturmak yerine yeniden kullanarak sistem kaynaklarından tasarruf etmek istediğinizde `Factory Method` kullanın.

## **_`Factory Method` Avantajları ve Dezavantajları_**

✔️ `Creator` ile `concrete` ürünler arasındaki sıkı bağlantıdan kaçınırsınız.
✔️ `Single Responsibility Principle`. Ürün oluşturma kodunu programda tek bir yere taşıyarak kodun desteklenmesini kolaylaştırabilirsiniz.
✔️ `Open/Closed Principle`. Mevcut müşteri kodunu bozmadan programa yeni ürün türlerini tanıtabilirsiniz.
❌ Modeli uygulamak için birçok yeni alt sınıf tanıtmanız gerektiğinden kod daha karmaşık hale gelir. En iyi durum senaryosu, kalıbı mevcut bir içerik oluşturucu sınıfları hiyerarşisine dahil ettiğiniz zamandır.

> [Kaynak](https://kerteriz.net/factory-method-fabrika-tasarim-deseni/#:~:text=Factory%20Method%2C%20bir%20%C3%BCst%20s%C4%B1n%C4%B1fta,veren%20yarat%C4%B1c%C4%B1%20bir%20tasar%C4%B1m%20desenidir.)

---

---

# **_`Abstract Factory Method Design Pattern`_**

![Abstract Factory Method Design Pattern](abstract-factory-design-pattern.png)

- `Abstract Factory Method Design Pattern`, `creational design pattern` kategorisindedir.
- Factory Design Pattern’de tek bir ürün ailesine ait tek bir arayüz mevcutken, Abstract Design Pattern’de farklı ürün aileleri için farklı arayüzler mevcuttur.

- Fabrika olarak düşünürsek, Factory Design Pattern sadece tek bir ürünün üretildiği fabrika, Abstract Factory Design Pattern ise farklı farklı ürünlerin üretildiği fabrika olarak düşünebiliriz.

## **_Abstract Factory Ne Zaman Kullanılır?_**

- Birden fazla ürün ailesi ile çalışmak durumunda kaldığımızda , ürün ailesi ile istemci tarafını soyutlamak için kullanılır.

- Ürün ailelerinin oluşumunu istemci tarafından ayırarak, karar verme koşulu olmadan, esnek ve geliştirilebilir bir yapı kurmamızı sağlar.

- Abstract Factory’ler kodunuzun ilişkili ürünler içeren ürün aileleri ile çalışması gerektiği, fakat bu sınıfların içeriğine bağlı olmak istemediğiniz durumlarda size yardımcı olurlar. Bu sınıfların ne olacağı belirsiz olabilir veya belli olsa bile gelecekte programınızı daha kolay genişletmek isteyebilirsiniz.

---

---

# **_`Prototype Pattern`_**

![Prototype Pattern](prototype-design-pattern.png)

- `Prototype Pattern`, `creational design pattern` kategorisindedir.

- Amacımız nesne üretim maliyetlerini minimize etmektir.

- Sadece ihtiyaçlar dahilinde `Prototype Pattern` kullanabiliriz.

- `Prototype (Clone)` bir objeyi, kodunuz onun sınıflarına bağımlı hale gelmeden kopyalamayı sağlayan bir tasarım desenidir.

- `Prototype` tasarım deseni klonlama sürecini klonlanan nesneye delege eder ve bunu klonlama destekleyen tüm nesneler için ortak bir arayüz belirleyerek yapar. Bu arayüz kodunuzu bu nesnenin sınıfına bağımlı hale getirmeden nesneyi klonlamanızı sağlar. Böyle bir arayüz genellikle sadece bir `clone` metodu içerir.

- `clone` metodunun uygulanması bir çok sınıf için benzerdir. Bu metod mevcut sınıfta bir nesne oluşturur ve tüm alan değerlerini eski objeden yenisine taşır. Bir çok programlama dili aynı sınıftan nesnelerin diğer nesnenin özel (`private`) sınıflarına ulaşmasına izin verdiği için özel (`private`) alanları dahi kopyalayabilirsiniz.

- Klonlamaya izin veren nesnelere `protoype` denir. Nesneleriniz onlarca alan ve yüzlerce farklı yapılandırmaya sahipse klonlama (`cloning`) alt sınıflara (`subclass`) iyi bir alternatiftir.

- Kodunuzun diğer sınıflardan bağımsız olması gereken durumlarda `Prototip Tasarım Deseni`'ni kullanabilirsiniz.

---

---

# **_`Builder Pattern`_**

![Builder Pattern](builder-design-pattern.png)

- `Builder Pattern`, `creational design pattern` kategorisindedir.

- Genellikle ortaya bir nesne örneği çıkarmayı hedefler. Bu nesne örneği birbiri ardına atılacak adımların işlenmesi sonucunda ortaya çıkar.

- `Builder` karmaşık nesnelerin adım adım oluşturulduğu yaratımsal bir tasarım desenidir. Bu desen aynı kurucu kod ile farklı tür ve gösterimdeki nesneleri oluşturmanıza olanak sağlar. Türkçe karşılığı kurucu, inşaatçı vb. tanımlardır.

- `Builder` deseni nesnenin kurucu kodunu kendine has bir sınıfa dönüştürerek, `builder` olarak adlandırılan bağımsız nesneleri taşımanızı önerir.

- `Builder (Oluşturucu)` desen, nesne oluşturma kodunu kendi sınıfından çıkarmanızı ve onu `builder` adı verilen ayrı nesnelere taşımanızı önerir.

- Desen, nesne oluşturmayı bir dizi adım halinde düzenler. Bir nesne oluşturmak için, bir builder nesnesinde bu adımların bir dizisini uygularsınız. Önemli olan kısım, tüm adımları çağırmanıza gerek olmamasıdır. Yalnızca bir nesnenin belirli bir konfigürasyonunu üretmek için gerekli olan adımları çağırabilirsiniz.

- Ürünün çeşitli temsillerini oluşturmanız gerektiğinde, `construction` adımlarından bazıları farklı uygulama gerektirir.

- Bu durumda, aynı oluşturma adımlarını farklı bir şekilde uygulayan birkaç farklı `builder` sınıfı oluşturabilirsiniz. Daha sonra, farklı türde nesneler üretmek için bu `builder`’leri inşaat sürecinde kullanabilirsiniz (yani, `building` adımlarına yönelik sıralı bir çağrı seti).

## Structure

- `Builder interface`’i, her tür `builder` için ortak olan ürün oluşturma adımlarını bildirir.

- `Concrete Builder`‘lar, `building` adımlarının farklı uygulamalarını sağlar. `Concrete` `builder`’lar, ortak `interface`’i takip etmeyen ürünler üretir.

- `Product`‘lar sonuç nesneleridir. Farklı `builder`’lar tarafından oluşturulan `product`’lar, aynı sınıf hiyerarşisine veya `interface`’ine ait olmak zorunda değildir.

- `Director` sınıfı, belirli `product` konfigürasyonlarını oluşturabilmeniz ve yeniden kullanabilmeniz için `construction` adımlarının çağrılacağı sırayı tanımlar.

- `Client`, `builder` nesnelerinden birini `director` ile ilişkilendirmelidir. Genellikle, `director`’un `constructor`’ının parametreleri aracılığıyla yalnızca bir kez yapılır. Daha sonra `director`, diğer tüm `construction`’lar için bu `builder` nesnesini kullanır. Ancak, müşterinin `builder` nesnesini `director`’un `production` yöntemine geçirmesi için alternatif bir yaklaşım vardır. Bu durumda, `director`’le her bir şey ürettiğinizde farklı bir `constructor` kullanabilirsiniz.

## **_`Builder` Avantajları ve Dezavantajları_**

✔️ Nesneleri adım adım oluşturabilir, `construction` adımlarını erteleyebilir veya adımları `recursive` olarak çalıştırabilirsiniz.
✔️ Ürünlerin çeşitli temsillerini oluştururken aynı `construction` kodunu yeniden kullanabilirsiniz.
✔️ `Single Responsibility Principle`. Karmaşık `construction` kodunu ürünün iş mantığından ayırabilirsiniz.
❌ Desen birden fazla yeni sınıf oluşturmayı gerektirdiğinden, kodun genel karmaşıklığı artar.

> [Kaynak](https://kerteriz.net/builder-pattern-olusturucu-tasarim-deseni/)

---

---

# **_`Facade Pattern`_**

![Facade Pattern](facade-design-pattern.png)

- `Facade Pattern`, `Structural Patterns` kategorisindedir.

- `Facade` bir kütüphane, `framework` ya da başka bir kompleks seri için basitleştirilmiş bir arayüz sunan yapısal bir tasarım desenidir.

- `Facade` çok fazla değişken parça içeren kompleks bir sisteme basit bir arayüz sunan bir sınıftır. `Facade` doğrudan ilgili sınıflarla çalışmaya göre daha sınırlı bir fonksiyonellik sağlar, fakat en çok ihtiyaç duyulan özellikleri içinde barındırır.

- `Facade` uygulamanıza karmaşık ama aslında çok az özelliğini kullanacağınız bir kütüphane entegre edeceğiniz durumlarda harika iş görür.

- Kompleks bir sistemin sınırlı bir parçasına basit bir arayüzle ulaşmak istiyorsanız `Facade` desenini kullanın.

- Bir alt sistemi katmanlara ayırmak istediğinzide `Facade` kullanın.

---

---

# **_`Adapter Pattern`_**

![Adapter Pattern](adapter-design-pattern.png)

- `Adapter Pattern`, `Structural Patterns` kategorisindedir.

- Özellikle farklı sistemlerin kendi sistemlerimize entegre edilmesi durumunda, kendi sistmimizin bozulmadan farklı sistemin sanki bizim sistemimizmiş gibi davranmasını sağlamaktır diyebiliriz kısaca.

- `Adapter` birbiriyle uyumlu olmayan arayüzlere (`interface`) sahip nesnelerin birlikte çalışabilmelerini sağlayan yapısal bir tasarım desenidir.

- Adaptör mevcut nesnelerden biriyle uyumlu bir arayüzü (`interface`) alır.
- Mevcut nesne bu arayüzü kullanarak adaptörün metodlarını güvenli bir şekilde çağırabilir.
- Bir istek geldiğinde adaptör isteği ikinci bir nesneye onun beklediği bir formatda aktarır.

- Mevcut bir sınıfı (`class`) kullanmak istediğiniz fakat o sınıfın arayüzünün (`interface`) kodunuzun geri kalanı ile uyumlu olmadığı zamanlarda bir adaptör sınıfı kullanabilirsiniz.

---

---

# **_`Composite Pattern`_**

![Composite Pattern](composite-design-pattern.png)

- `Composite Pattern`, `Structural Patterns` kategorisindedir.

- `Composite Pattern` deyince nesneler arasındaki hiyerarşi ve bu nesnelere istediğimiz zaman ulaşabilmek akla gelmelidir.

- `Composite` (Kompozit) nesneleri ağaç yapıları halinde oluşturmanıza ve bu ağacın dalları ile tek tek nesnelermiş gibi çalışmanıza olanak veren bir bir tasarım desenidir.

- Uygulamanızın ana modeli bir ağaç şeklinde gösterilebiliyorsa `composite` tasarım desenini kullanmanız işe yarayabilir.

- İstemci kodun basit ve kompleks nesneleri aynı şekilde değerlendirmesini istiyorsanız bu tasarım kalbını kullanın. `Composite` tasarım kalıbı ile tanımlanmış tüm elemanlar ortak bir arayüze sahiptir. Bu arayüz sayesinde istemci kod çalıştığı nesnenin asıl sınıfı ile ilgilenmeden işini görebilir.

---

---

# **_`Proxy Pattern`_**

![Proxy Pattern](proxy-design-pattern.png)

- `Proxy Pattern`, `Structural Patterns` kategorisindedir.

- `Proxy` başka bir nesne için bir yedek veya yer tutucu sağlamanıza olanak tanıyan yapısal bir tasarım desenidir. Bir `proxy`, orijinal nesneye erişimi kontrol ederek, istek orijinal nesneye ulaşmadan önce veya sonra bir şeyler gerçekleştirmenize izin verir.

- Bu deseni bir `cache`'leme sistemine benzetebiliriz. Bir sınıf düşünelim, sınıfın çağırdığı bir işlem var. İlk kez çağırdığında mecburen o işlemi yapacak. Fakat ikinci kez çağırıldığında, daha önce çağırılmışsa onu kullanmak üzerine bir yapıdır. Bizim çağırmak istediğimiz operasyon sonucu sabit olan bir hesaplamaysa veya bir kaynaksa, o kaynağı bir daha yeniden çağırmamak adına bir hızlandırma sürecidir.

---

---

# **_`Decorator Pattern`_**

![Decorator Pattern](decorator-design-pattern.png)

- `Decorator Pattern`, `Structural Patterns` kategorisindedir.

- `Decorator` nesneleri özel sarıcı nesneler içerisine yerleştirerek onlara yeni davranışlar kazandırmanızı sağlayan yapısal bir tasarım desenidir.

- Nesnelere istemci kodun çalışmasını bozmadan çalışma anında ekstra özellikler ekleyebilmek istiyorsanız `Decorator` tasarım desenini kullanabilirsiniz.

- Bir nesnenin davranışını `inheritance` ile değiştirmek kullanışsız ve hatta imkansızsa bu tasarım kalıbı size yardımcı olabilir.

---

---

# **_`Bridge Pattern`_**

![Bridge Pattern](bridge-design-pattern.png)

- `Bridge Pattern`, `Structural Patterns` kategorisindedir.

- `Bridge`, Türkçe karşılığı ile köprü büyük sınıfları veya birbiriyle yakın ilişkili sınıfları, birbirinden bağımsız olarak geliştirilebilecek iki ayrı hiyerarşiye bölmenizi sağlayan bir tasarım desenidir.

- Belirli bir işlevin çeşitli varyasyonlarını içeren monoloitik bir sınıfı parçalara bölmek ve yönetmek istediğinizde köprü (`Bridge`) tasarım desenini kulllanın.

- Bir sınıfı bağımsız birden fazla boyuta genişletecekseniz bu sınıfı kullanın.

- Çalışma anında uygulama yöntemlerini değiştirmek için köprü desenini kullanın.

---

---

# **_`Strategy Pattern`_**

![Strategy Pattern](strategy-design-pattern.png)

- `Strategy Pattern`, `Behavioral Patterns` kategorisindedir.

- `Strategy` deseni bir algoritma ailesi oluşturup her birini farklı sınıfa yerleştirerek nesnelerini birbiri arasında değişebilir hale getirmeyi sağlayan bir tasarım desenidir.

- Bir nesne içinde bir algoritmanın farklı türevlerini kullanmak ve çalışma esnasında bir algoritmadan diğerine geçebilmek istediğinizde strateji tasarım kalıbın kullanabilirsiniz.

- Yalnızca bazı davranışları yürütme biçimleri bakımından farklılık gösteren çok sayıda benzer sınıfınız olduğunda `strategy` tasarım kalıbını kullanabilirsiniz.

- Bir sınıfın iş mantığı için çok önemli olmayan algoritma uygulama ayrıntılarını sınıfın kendisinden yalıtmak için strategy tasarım kalıbını kullanabilirsiniz.

- Sınıfınız, aynı algoritmanın farklı türevleri arasında geçiş yapan çok büyük bir koşullu operatöre sahip olduğunda strategy tasarım kalıbını kullanabilirsiniz.

- Bu pattern, adı üstünde bir strateji belirleyip o stratejiye göre metodun çalıştırılması sürecidir.

---

---

# **_`Observer Pattern`_**

![Observer Pattern](observer-design-pattern.png)

- `Observer Pattern`, `Behavioral Patterns` kategorisindedir.

- `Observer` tasarım deseni, birden fazla nesneyi, takip ettikleri başka bir nesnede gerçekleşen olaylarla ilgili bilgilendirmeyi sağlayan bir abonelik mekanizması oluşturmayı amaçlar.

- Bir nesnedeki değişikliğin başka nesneleri de değiştirmesi gereken ve bu nesnelerin önceden bilinmesi mümkün olmayan durumlarda `Observer` desenini kullanabilirsiniz.

- Uygulamanızdaki bazı nesnelerin başka bir nesneyi, belirli kullanımlar veya belirli bir süre için izlemesi gereken durumlarda bu deseni kullanabilirsiniz.

- Kendisine abone olan sistemlerin bir işlem olduğunda devreye girmesini sağlayan tasarım desenidir.

---

---

# **_`Chain of Responsibility Pattern`_**

![Chain of Responsibility Pattern](chain-of-responsibility-design-pattern.png)

- `Chain of Responsibility Pattern`, `Behavioral Patterns` kategorisindedir.

- `Chain of Responsibility`, Türkçe adıyla “Sorumluluk Zinciri” bir isteği bir dizi işleyici (zinciri) boyunca iletmenize izin veren davranışsal bir tasarım desenidir (behavirolar design pattern) ve inceleyeceğimiz davranışsal tasarım desenlerinden de ilkidir. Eğer bir web geliştirici iseniz “`Middleware`” tasarımlarında oldukça işinize yarayacak bir tasarım desenidir.

- Programınızın farklı türdeki istekleri çeşitli şekillerde işlemesi gerekiyor, fakat bu isteklerin türleri ve sıralamalarını önceden bilmiyorsanız `Chain of Responsibility` desenini kullanabilirsiniz.

- Belirli bir sırayla bir kaç işleyiciyi yürütmek gerekli olduğunda `chain of responsibility` desenini kullanabilirsiniz.

- Belirli bir işleyici dizisinin elemanları ve sıralarının çalışma anında değişmesi gerekiyorsa `chain of responsibility` desenini kullanabilirsiniz.

- Bu desen belirli şarta göre bizim devreye hangi nesneyi koyacağımızı gösterir. Bu nesneler arasında bir hiyerarşik yapı olması bu pattern'in en temel özelliğidir.

---

---

# **_`Memento Pattern`_**

![Memento Pattern](memento-design-pattern.png)

- `Memento Pattern`, `Behavioral Patterns` kategorisindedir.

- `Memento`, bir nesnenin önceki durumunu, uygulama detaylarını açığa çıkartmadan kaydetmeniz ve geri getirmenizi sağlayan bir tasarım desenidir.

- Bir nesneyi önceki duruma getirmeniz için anlık görüntüler oluşturmanız gerekiyorsa `Memento` desenini kullanabilirsiniz

- Bir nesnenin alanları, getirici (`getter`) ve ayarlayıcılarına ( `setter` ) ulaşmak nesnenin kapsam sınırlarını ihlal ediyorsa bu deseni kullanabilirsiniz.

- Burada amaç bir nesnenin, değişikliğe uğradıktan sonra arzu edildiğinde değişikliğe uğramadığı haline dönüştürülmesi.

---

---

# **_`Temple Method Pattern`_**

![Temple Method Pattern](template-method-design-pattern.png)

- `Temple Method Pattern`, `Behavioral Patterns` kategorisindedir.

- `Template Method` ( Şablon Yöntemi ), üst sınıfta algoritmanın bir iskeletini oluşturan, alt sınıfların yapıyı değiştirmeden bu algoritmanın belirli adımlarını değiştirmesine izin veren bir tasarım desenidir.

- İstemcilerin tüm algoritmayı veya yapısını değil, yalnızca belirli adımlarını genişletmesine izin vermek istediğinizde `Template Method` tasarım desenini kullanabilirsiniz.

- Bazı küçük farklılıkları olsa bile neredeyse aynı algoritmayı içeren sınıflarınız olduğunda, algortima değiştiğinde sınıfların tümünü değiştirmeniz gerekebilir. Bu durumlarda `Template Method` desenini kullanabilirsiniz.

---

---

# **_`State Pattern`_**

![State Pattern](state-design-pattern.png)

- `State Pattern`, `Behavioral Patterns` kategorisindedir.

- `State` bir nesnenin iç durumu değiştiğinde davranışını da değiştirmesini sağlayan bir tasarım desenidir. Sanki nesne sınıfını (`class`) değiştirmiş gibi görünür.

- Mevcut durumuna bağlı olarak farklı hareket etmesi gereken nesneleriniz varsa, olası durum sayıları çok fazlaysa ve bu durumlara özel kodlar çok sık değişiyorsa `State` desenini kullanabilirsiniz.

- Sınıfın belirli alanlarının değerlerine göre hareketlerini değiştirmek için kullanılan aşırı miktarda koşullu ifadelerle dolu, kirli bir sınıfınız varsa bu deseni kullanabilirsiniz.

- Koşullu ifadeler esaslı bir durum makinesinde, farklı durumlar ve geçişler için tekrarlanarak kullanılan çok fazla kodunuz varsa bu deseni kullanabilirsiniz.

---

---

# **_`Mediator Pattern`_**

![Mediator Pattern](mediator-design-pattern.png)

- `Mediator Pattern`, `Behavioral Patterns` kategorisindedir.

- `Mediator` (Ara bulucu ) nesneler arasındaki kaotik bağımlılıkları azaltmayı sağlayan davranışsal bir tasarım desenidir. Bu desen nesneler arasındaki doğrudan iletişimi sınırlar ve sadece mediator nesnesi üzerinden haberleşmeye zorlar.

- Başka sınıflarla sıkıca bağlı oldukları için değiştirilmesi zor olan sınıflar varsa `Mediator` desenini kullanabilirsiniz.

- Başka bileşenlere çok fazla bağımlı olan bir bileşeni başka bir yerde tekrar kullanamıyorsanız bu deseni kullanabilirsiniz.

- Sadece bazı temel davranışları yeniden kullanabilmek için bir sürü bileşen alt sınıfı oluşturmanız gerekiyorsa `Mediator` desenini kullanabilirsiniz.

- Bu desenin ana görevi farklı sistemleri birbiriyle görüştürmektir.

---

---

# **_`Command Pattern`_**

![Command Pattern](command-design-pattern.png)

- `Command Pattern`, `Behavioral Patterns` kategorisindedir.

- `Command` ( Komut ) tasarım deseni, bir isteği kendisi ile ilgili tüm bilgileri içeren bağımsız bir nesneye dönüştüren davranışsal bir tasarım desenidir. Bu dönüşüm, istekleri metot parametresi olarak göndermenize, işlenmelerini geciktirmenize ya da sıraya sokmanıza ve geri alınamaz işlemleri desteklemenize olanak verir.

- İşlevler içeren nesneleri parametre olarak kullanmak istediğinizde `Command` desenini kullanabilirsiniz.

- İşlemleri sıralaya almak, zamanlamak veya uzaktan çalıştırabilmek için `Command` desenini kullanabilirsiniz.

- Geri döndürülebilir işlemler oluşturmak istediğinizde command desenini kullanabilirsiniz.

---

---

# **_`Visitor Pattern`_**

![Visitor Pattern](visitor-design-pattern.png)

- `Visitor Pattern`, `Behavioral Patterns` kategorisindedir.

- Visitor, algoritmaları üzerinde çalıştıkları nesnelerden ayırmanıza olanak sağlayan davranışsal bir tasarım kalıbıdır.

- Karmaşık bir nesne yapısının (örneğin bir nesne ağacı) tüm öğeleri üzerinde bir işlem gerçekleştirmeniz gerektiğinde Visitor desenini kullanabilirsiniz.

- İkinci/yardımcı davranışların çalışma mantığını ana koddan temizlemek için Visitor desenini kullanabilirsiniz.

- Bir davranış bir hiyerarşideki sadece bazı sınıflar için uygun ama diğerleri için değilse bu deseni kullanabilirsiniz.
