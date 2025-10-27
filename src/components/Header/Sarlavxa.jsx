import "./Sarlavxa.css"
import img from "../../assets/pictures/image2.png"

const Sarlavxa = () => {
    return (
        <div className="Sarlavxa" id="Sarlavxa">
            <div className="sarlavha-container">
                <div className="about-sarlavxa">
                    <img src={img} alt="" />
                </div>

                <div className="sarlavxa-proces">
                    <h1>
                        Ganch O'ymakorligi
                    </h1> <br />
                    <p>
                        Biz sizning uyingizga o‘ziga xoslik bag‘ishlaydigan dekor va suvenirlarni gipsdan qo‘lda yasaymiz. Har bir buyum — bu san’at, mehr va mahorat natijasi.
                    </p>
                    <br />
                    <p>
                        Gips — bu oddiy material emas, u tasavvur va mahorat bilan uyg‘unlashganda san’at asariga aylanadi. Biz har bir buyumni qo‘lda tayyorlab, unga ruh va jon baxsh etamiz.
                    </p>
                    <br />
                    <p>
                        Har bir buyum o‘ziga xos: shakl, faktura va bezaklari bilan. Ish jarayoni — sinchkovlik, sabr va ijodiy yondashuvni talab qiladi. Shu bois, har bir mahsulot o‘z hikoyasiga ega.
                    </p>
                    <br />
                    <p className="pp">
                        Bizning gips buyumlarimiz ichki makonga nafislik, iliqlik va o‘ziga xos ruh bag‘ishlaydi. Klasik yoki zamonaviy uslubda — har qanday interyerni to‘ldiradi.
                    </p>
                    <br />
                    <p className="pp">
                        Har bir suvenir — bu qo‘lda ishlangan, sevgi bilan tayyorlangan buyum. U nafaqat bezak, balki esdalik, qadriyat va his-tuyg‘ular ramzidir.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sarlavxa