import { config } from "@/lib/config";

export default function ContactPage() {
  const wa = `https://wa.me/${config.whatsappNumber}`;
  return (
    <div className="prose">
      <div className="eyebrow">Contact</div>
      <h1>Let us make something for you</h1>
      <p>The fastest way to reach us is on WhatsApp. Send your order, ask about a colour or size, or arrange delivery, and we will reply personally.</p>
      <div className="clist">
        <div className="crow">
          <span className="ci">
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 17, height: 17 }}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.4A8.5 8.5 0 1 1 21 11.5z" /></svg>
          </span>
          <div><div className="clab">WhatsApp / Phone</div><div className="cval">{config.contact.phone}</div></div>
        </div>
        <div className="crow">
          <span className="ci">
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 17, height: 17 }}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
          </span>
          <div><div className="clab">Email</div><div className="cval">{config.contact.email}</div></div>
        </div>
        <div className="crow">
          <span className="ci">
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 17, height: 17 }}><path d="M14 9h3l.5-3H14V4.2c0-.8.3-1.2 1.3-1.2H17V.2C16.6.1 15.6 0 14.7 0 12.6 0 11 1.3 11 3.7V6H8v3h3v9h3z" /></svg>
          </span>
          <div><div className="clab">Facebook</div><div className="cval">{config.contact.facebook}</div></div>
        </div>
        <div className="crow">
          <span className="ci">
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 17, height: 17 }}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
          </span>
          <div><div className="clab">Hours</div><div className="cval">{config.contact.hours}</div></div>
        </div>
      </div>
      <a href={wa} target="_blank" rel="noreferrer" className="btn btn-primary">
        <svg className="ic" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.4A8.5 8.5 0 1 1 21 11.5z" /></svg>
        Chat with us
      </a>
    </div>
  );
}
