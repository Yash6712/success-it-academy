import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919922563253"; // Replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hi Success IT Academy, I am interested in your training programs."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}