let mesaj = `
migrosa hoşgeldiniz.
money kartınız var mı
1-evet
2-hayır

`;
const urunler = [
  {
    urunIsmi: "süt",
    fiyat: 15,
  },
  {
    urunIsmi: "bebek bezi",
    fiyat: 100,
  },
  {
    urunIsmi: "kusbasi",
    fiyat: 220,
  },
];

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
  let isim = prompt("isminizi giriniz");
  let soyisim = prompt("soyad giriniz");
  const musteri = new Musteri(isim, soyisim, sonuc, urunler);

  let odenecekTutar = musteri.hesapla();
  alert(`
müsteri bilgileri:${musteri.isim} ${musteri.soyisim}
ödenecek tutar:${odenecekTutar}

    `);
} else {
  const musteri = new Musteri(null, null, sonuc, urunler);
  odenecekTutar = musteri.hesapla();
  alert(`ödenecek tutar:${odenecekTutar}`);
}
