var Sinifogrencileri = [];

class Kisiler{
    constructor(isim, not){
        this.isim = isim;
        this.not = not;
    }
      get kisilernote(){
        return this.kisilernot();
    }
      // Method
      kisilernot(kisi,not){
        kisi.not = not;
        }        
    }
const kisiler = new Kisiler();

class Sinif {
    constructor(ogrisim, not){
        this.ogrisim = ogrisim;
        this.not = not;
    }

      // Getter    
    get entry() {
        return this.kayit();
      }
    get notes(){
        return this.notver();
    }
    get average(){
        return this.ortalama();
    }
    get mevcut(){
        return this.getMevcut();
    }

    // Method
    kayit(ad) {
        let temp = false;
        for (let index = 0; index < Sinifogrencileri.length; index++) {
            if (Sinifogrencileri[index].isim == ad) {
                console.log('Aynı isimden olduğu için kayıt açılamadı');
                temp = true;
            }         
        }
        if (temp == false) {         
            Sinifogrencileri.push(new Kisiler(ad, null));
            }
    }
    notver(notisim, not){
        try {
            if (not >= 0 && not <= 100) {
                let sinifogrencilerifilter = Sinifogrencileri.filter(ogrenci =>
                    ogrenci.isim == notisim
                );
                if (sinifogrencilerifilter === undefined) {
                    console.log('böyle bir öğrenci bulunmuyor');
                    
                }
                else{
                    kisiler.kisilernot(...sinifogrencilerifilter,not);
                }
            }
            else{
                throw Error; 
            }
            }
        catch (Error) {  
            throw 'Sadece 0-100 arası girebilirsiniz.';
        }
    }
    ortalama(){
        let toplam = 0;
        for (let index = 0; index < Sinifogrencileri.length; index++) {
            toplam += Sinifogrencileri[index].not
        }
        let ortalamahesabı = toplam / Sinifogrencileri.length
        console.log(`Sınıf ortalaması ${ortalamahesabı}`);
        return ortalamahesabı
    }
    enbasarili(){

        var enbuyuk = 0;
        for (let index = 0; index < Sinifogrencileri.length; index++) {
           if (Sinifogrencileri[index].not > enbuyuk) {
            enbuyuk = Sinifogrencileri[index].not;
           }
        }
        const max = enbuyuk;
        for (let k = 0; k < Sinifogrencileri.length; k++) {
            if (max == Sinifogrencileri[k].not) {
                console.log(`En basarili ogrenci = ${Sinifogrencileri[k].isim}`);
                return Sinifogrencileri[k].isim;
            }      
        }
        }
    getMevcut(){
        console.log(Sinifogrencileri.length);
        return Sinifogrencileri.length;
    }
    } 

  const sinif = new Sinif();
  sinif.kayit('Cagdas');
  sinif.kayit('Cagil');
  sinif.notver('Cagil',20)
  sinif.kayit('alp');
  sinif.notver('alp',30)
  sinif.notver('Cagdas',40)
  sinif.kayit('Cagil');
  sinif.kayit('test');
  sinif.notver('test',100)
  sinif.kayit('Cagil');
  //sinif.notver('Cagil',120)
  console.log(Sinifogrencileri);
  sinif.ortalama();
  sinif.enbasarili();
  sinif.getMevcut();
  
module.exports = Sinif;

