"use client";

import { useState } from "react";
import styles from "./PackageBuilder.module.css";
import { getWhatsAppUrl, buildWhatsAppMessage } from "@/lib/whatsapp";
import { pricing } from "@/data/packages"; // Assuming pricing is zeroed out as requested

export default function PackageBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    people: "1",
    eventType: "bridal",
  });

  const [selectedServices, setSelectedServices] = useState({
    makeup: true,
    hairstyle: false,
    draping: false,
    lashes: false,
    trial: false,
    touchup: false,
    extensions: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setSelectedServices(prev => ({ ...prev, [service]: !prev[service] }));
  };

  const calculateTotal = () => {
    let total = 0;
    let allPricesUnknown = true;
    
    Object.keys(selectedServices).forEach(key => {
      if (selectedServices[key]) {
        const price = pricing[key] || 0;
        total += price;
        if (price > 0) allPricesUnknown = false;
      }
    });

    if (allPricesUnknown || total === 0) return "Price on enquiry";
    return `₹${total.toLocaleString('en-IN')} (Estimated)`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const activeServices = Object.keys(selectedServices)
      .filter(key => selectedServices[key])
      .map(key => key.charAt(0).toUpperCase() + key.slice(1));

    const message = buildWhatsAppMessage({
      intent: "I would like to request a quote based on my custom package.",
      name: formData.name,
      phone: formData.phone,
      eventType: formData.eventType,
      date: formData.date,
      location: formData.location,
      people: formData.people,
      services: activeServices
    });

    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <div className={styles.builderContainer} id="builder">
      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>01. Event Details</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" name="name" className={styles.input} value={formData.name} onChange={handleInputChange} placeholder="Your name" required />
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number</label>
              <input type="tel" name="phone" className={styles.input} value={formData.phone} onChange={handleInputChange} placeholder="+91" required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Event Date</label>
              <input type="date" name="date" className={styles.input} value={formData.date} onChange={handleInputChange} required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Event Type</label>
              <select name="eventType" className={styles.select} value={formData.eventType} onChange={handleInputChange}>
                <option value="bridal">Bridal Wedding</option>
                <option value="engagement">Engagement</option>
                <option value="reception">Reception</option>
                <option value="party">Party / Event</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Number of People</label>
              <input type="number" name="people" min="1" className={styles.input} value={formData.people} onChange={handleInputChange} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Venue Location / City</label>
            <input type="text" name="location" className={styles.input} value={formData.location} onChange={handleInputChange} placeholder="E.g., Mumbai, Taj Colaba" required />
          </div>
        </form>

        <h2 className={styles.sectionTitle} style={{ marginTop: '64px' }}>02. Build Your Look</h2>
        <div className={styles.servicesGrid}>
          <button 
            type="button"
            className={`${styles.serviceToggle} ${selectedServices.makeup ? styles.active : ''}`}
            onClick={() => toggleService('makeup')}
          >
            HD / Airbrush Makeup
          </button>
          <button 
            type="button"
            className={`${styles.serviceToggle} ${selectedServices.hairstyle ? styles.active : ''}`}
            onClick={() => toggleService('hairstyle')}
          >
            Hairstyling
          </button>
          <button 
            type="button"
            className={`${styles.serviceToggle} ${selectedServices.draping ? styles.active : ''}`}
            onClick={() => toggleService('draping')}
          >
            Outfit Draping
          </button>
          <button 
            type="button"
            className={`${styles.serviceToggle} ${selectedServices.lashes ? styles.active : ''}`}
            onClick={() => toggleService('lashes')}
          >
            Premium Lashes
          </button>
          <button 
            type="button"
            className={`${styles.serviceToggle} ${selectedServices.trial ? styles.active : ''}`}
            onClick={() => toggleService('trial')}
          >
            Pre-wedding Trial
          </button>
          <button 
            type="button"
            className={`${styles.serviceToggle} ${selectedServices.touchup ? styles.active : ''}`}
            onClick={() => toggleService('touchup')}
          >
            Touch-up Kit
          </button>
        </div>
      </div>

      <div className={styles.summarySection}>
        <div className={styles.summaryCard}>
          <h3 className={styles.summaryTitle}>Your Look</h3>
          
          <ul className={styles.summaryList}>
            {Object.keys(selectedServices).map(key => {
              if (selectedServices[key]) {
                return (
                  <li key={key} className={styles.summaryItem}>
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className={styles.itemCheck}>✓</span>
                  </li>
                );
              }
              return null;
            })}
          </ul>

          <div className="gold-line" style={{ margin: '24px 0' }}></div>

          <div className={styles.totalRow}>
            <span>Estimated Total</span>
            <span className={styles.totalPrice}>{calculateTotal()}</span>
          </div>
          
          <p className={styles.disclaimer}>
            * Final pricing will be confirmed after enquiry, based on location and specific requirements.
          </p>

          <button onClick={handleSubmit} className="button-primary" style={{ width: '100%', marginTop: '32px' }}>
            ENQUIRE ON WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
}
