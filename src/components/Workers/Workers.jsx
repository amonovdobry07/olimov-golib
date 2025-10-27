import "./Workers.css";
const ContactForm = () => {
  return (
    <>
      <section className="ContactForm" id="Contact">
        <div className="containerr">
          {/* === CONTACT BOX === */}
          <div className="contact_box">
            <div className="contact_info">
              <h2>Biz bilan bog‘laning</h2>
              <p className="contact_desc">
                Savollaringiz bo‘lsa yoki hamkorlikka taklif bermoqchi bo‘lsangiz, biz bilan quyidagi
                kanallar orqali bog‘laning.
              </p>

              <div className="social_links">
                <a
                  href="https://t.me/+998997076324"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <i className="fa-brands fa-telegram"></i> Telegram
                </a>
                <a
                  href="https://instagram.com/golimov848gmail.com_
"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
                <a href="tel:+998934748880" aria-label="Telefon">
                  <i className="fa-solid fa-phone"></i> +998 (99) 707‒63‒24
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ogabekomonov79@gamil.com" target="_blank"
                  rel="noopener noreferrer" aria-label="Telefon">
                  <i class="fa-solid fa-envelope"></i> Email
                </a>
              </div>
            </div>

            <div className="map_box">
              <iframe
                className="contact-iframe"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5139.344746072585!2d64.58509657958398!3d40.011291679185334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDAwJzQxLjUiTiA2NMKwMzUnMTQuNCJF!5e0!3m2!1sru!2s!4v1761237637218!5m2!1sru!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe></div>
          </div>
        </div>
      </section>

      <div className="coright">
        <p>@Copyright  By  Amonoff    Web  {new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default ContactForm;