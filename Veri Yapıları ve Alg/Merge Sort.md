# Veri Yapıları ve Algoritmalar Ödev 2

## Merge Sort - [16,21,11,8,12,22]

1. Dizi ikiye bölünür. [16,21,11] [8,12,22]
2. Bu gruplar yeniden bölünür. [16,21] [11] [8,12] [22]
3. İki tane elemanı olan gruplar yeniden bölünür. [16] [21] [11] [8] [12] [22]
4. 6 tane alt küme aynı sırayla birleşir. Küçük olanlar yeni dizilerde sola yazılır. [16,21] [11] [8,12] [22]
5. Tek elemanlı kümeler iki elemanlı kümelerle birleştirilir. [11,16,21] [8,12,22]
6. İki alt küme de birleşir. [8,11,12,16,21,22]

Big-O Notation: nlogn şeklinde olur