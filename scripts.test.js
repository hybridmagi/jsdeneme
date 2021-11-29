const Sinif = require('./scripts.js')

describe("kayit" ,()=> {
it(" kayıt yapabilmeli", ()=>{
    const sinif = new Sinif()
    sinif.kayit("Ahmet")
    expect(sinif.getMevcut()).toBe(5)
})
})

describe('basarılı', () => {
    it('en basarılı öğrenci', () => {
        const sinif = new Sinif()
        sinif.enbasarili()
        expect(sinif.enbasarili()).toBe('test')
    })
})


describe('ortalama', () => { //burası calısmıyor
    it('Sınıf ortalaması', () => {
        const sinif = new Sinif()
        sinif.ortalama()
        expect(sinif.ortalama()).toBe(62.5)
    })
})
