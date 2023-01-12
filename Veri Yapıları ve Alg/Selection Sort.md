# Veri Yapıları ve Algoritmalar Ödev 1

## Insertion Sort - [22,27,16,2,18,6]

1. İlk olarak dizinin en küçük elemanı bulunur. Bu dizi için en küçük eleman [2] dir.
2. [2] en baştaki sayı ile yer değiştirir. Yeni dizi [2,27,16,22,18,6] olur.
3. İlk baştaki sayı ([2]) hariç geri kalan sayılardan en küçük sayı [6] alınır.
4. [6] sayısı dizinin ikinci elemanıyla yer değiştirir. Yeni dizi [2,6,16,22,18,27] olur.
5. İlk baştaki iki sayı ([2,6]) hariç, geriye kalan elemanlardan en küçüğü [16] alınır.
6. [16] dizinin üçüncü elemanı olduğu için yerinde kalır. Dizi değişmez.
7. İlk baştaki üç sayı ([2,6,16]) hariç, geriye kalan elemanlardan en küçüğü [18] alınır.
8. [18] dizinin dürdüncü elemanıyla yer değiştirir. Yeni dizi [2,6,16,18,22,27] olur.
9. Yeni dizi küçükten büyüğe sıralandığı için algoritma durur.

Big-O Notation: İşlem sayısı n, n-1, n-2...1 şeklinde olacağından, işlem sayısı toplamı n.(n+1)/2; dominant faktörü n²'dir. O(n²)

18 Sayısı düzenlenen dizinin ortalarında yer aldığı için average case sayılır.
