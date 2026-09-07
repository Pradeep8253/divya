import { siteConfig } from "@/config/site";

export function getWhatsAppUrl(message = "") {
  // Remove all non-numeric characters from the phone number
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function buildWhatsAppMessage(data = {}) {
  const lines = [
    "Hello Divya,",
    data.intent ? data.intent : "I would like to enquire about a makeup booking.",
    "",
    data.name ? `Name: ${data.name}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.eventType ? `Event: ${data.eventType}` : null,
    data.date ? `Date: ${data.date}` : null,
    data.location ? `Location: ${data.location}` : null,
    data.people ? `People: ${data.people}` : null,
    data.services?.length ? `Services: ${data.services.join(", ")}` : null,
    data.look ? `Look: ${data.look}` : null
  ].filter(line => line !== null);

  return lines.join("\n");
}
