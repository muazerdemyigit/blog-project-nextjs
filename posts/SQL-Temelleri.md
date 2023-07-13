---
title: "SQL Temelleri"
subtitle: "SQL-Temelleri"
date: "13-07-2023"
---

# **_`SQL` Temelleri_**

## **_`Select`_**

- `Select` yani datayı seç, `*` tüm kolonlardan, from hangi tablodan, `Customers` tablosundan.

```sql
Select * from Customers
```

- `Select` yani bana seç `Select`'den sonraki 3 kolonu, `from` hangi tablodan, `Customers` tablosundan.

```sql
  Select ContactName, CompanyName, City from Customers
```

- `Select yani` bana seç `Select`'den sonraki 3 kolonu getir ama `ContactName`-`Adi` olarak , `CompanyName`-`SirketAdi` olarak, `City`-`Sehir` olarak, `from` hangi tablodan, `Customers` tablosundan.

> `SQL` takma adları bir tabloya veya sütuna geçici bir ad vermek için kullanılır. `ALIAS`

```sql
Select ContactName Adi, CompanyName SirketAdi, City Sehir from Customers
```

---

## **_`Where`_**

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Customers` tablosundan `City = London` olanları.

```sql
Select * from Customers where City = 'London'
```

- `CategoryID = 1` olan ya da 3 olan tüm ürünler gelsin

```sql
Select * from Products where CategoryID=1 or CategoryID=3
```

- `CategoryID = 1` olan ve `UnitPrice>=10` olan tüm ürünler gelsin

```sql
Select * from Products where CategoryID=1 and UnitPrice>=10
```

---

## **_`Order by`_**

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `order by` sırala, `ProductName`'e göre sırala.

```sql
Select * from Products order by ProductName
```

- `Select` yani `data`yı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `order by` sırala, `CategoryID`'ye göre sırala.

```sql
Select * from Products order by CategoryID
```

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `order by` sırala, `CategoryID`'ye göre sırala daha sorasında her kategoriyi de `ProductName`'e göre sırala.

```sql
Select * from Products order by CategoryID,ProductName
```

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `order by` sırala, `UnitPrice`'ye göre sırala.

```sql
Select * from Products order by UnitPrice
```

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `order by` sırala, `UnitPrice`'ye göre sırala. `asc`(`ascending`) yani artan şekilde.

```sql
Select * from Products order by UnitPrice asc
```

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `order by` sırala, `UnitPrice`'ye göre sırala. `desc`(`descending`) yani azalan şekilde.

```sql
Select * from Products order by UnitPrice desc
```

- `Select` yani datayı seç, `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `CategoryID = 1` olanları filtrele, `order by` sırala, `UnitPrice`'ye göre sırala. `desc`(`descending`) yani azalan şekilde.

```sql
Select * from Products where CategoryID=1 order by UnitPrice desc
```

---

- `Select` yani datayı seç, `count` say `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, yani `product` tablosunda kaç `product` var?

```sql
Select count(*) from Products
```

- `Select` yani datayı seç, `count` say `*` tüm kolonlardan, `from` hangi tablodan, `Product` tablosundan, `CategoryID=2` olanları yani `product` tablosunda kaç tane `CategoryID=2` olan `product` var?

```sql
Select count(*) from Products where CategoryID=2
```

---

## **_`Group by`_**

- `Group by` kullanırken `Select *` kullanılamaz

- Datalarımın içine bak bütün kategorileri tekrar etmeyecek biçimde bana listele

```sql
Select CategoryID from Products group by CategoryID
```

- Datalarımın içine bak bütün kategorileri tekrar etmeyecek biçimde bana listele, hangi kategoride kaç adet ürün olduğunu söyle.

```sql
Select CategoryID,count(*) from Products group by CategoryID
```

---

## **_`Having`_**

- Ürün sayısı 10'dan az olan kategoriler

```sql
Select CategoryID,count(*) from Products group by CategoryID having count(*)<10
```

- Birim fiyatı 20'den fazla olan ürünleri `CategoryID`'ye göre grupla, her grupta sayısı 10'dan az olanları getir.

```sql
Select CategoryID,count(*) from Products where UnitPrice>20 group by CategoryID having count(*)<10
```

---

## **_`Inner Join/on`_**

- `Inner join` sadece iki tabloda da eşleşenleri bir araya getirir. Eşleşmeyen data varsa onu getirmez.

- Ürünler ve kategorilerin birleşiminden (`inner join`) istenilen bilgileri şu kosula göre(`on`) `Products.CategoryID= Categories.CategoryID` getir.

```sql
Select Products.ProductID, Products.ProductName, Products.UnitPrice, Categories.CategoryName from Products inner join Categories on Products.CategoryID= Categories.CategoryID
```

- Ürünlerden fiyatı 10'dan büyük olanlar için onu kategorilerle `join` et ve bana getir.

```sql
Select Products.ProductID, Products.ProductName, Products.UnitPrice, Categories.CategoryName from Products inner join Categories on Products.CategoryID= Categories.CategoryID where Products.UnitPrice>10
```

---

## **_`Left Join`_**

- `Left join` solda olup sağda olmayanları da getir demek.

- Ürünlerde olup(kısaca `p` dedik) sipariş detayında(kısaca `od` dedik) olmayan ürünleri de getir.

```sql
Select * from Products p left join [Order Details] od on p.ProductID = od.ProductID
```

- Müşterilerde olup siparişte olmayanları da getir.

```sql
Select * from Customers c left join Orders o on c.CustomerID = o.CustomerID
```

- Sistemde olup ürün almamış kişileri getir.

```sql
Select * from Customers c left join Orders o on c.CustomerID = o.CustomerID where o.CustomerID is null
```

---

## **_`Right Join`_**

- `Right join` sağda olup solda olmayanları da getir demek. Yani `left join`'in tersi.

- Sistemde olup ürün almamış kişileri getir.

```sql
Select * from Orders o right join  Customers c on c.CustomerID = o.CustomerID where o.CustomerID is null
```

---

> İkiden fazla tabloyu `join` etmek için bir `inner join` daha eklenir.

```sql
Select * from Products p inner join [Order Details] od on p.ProductID = od.ProductID inner join Orders o on o.OrderID= od.OrderID
```
