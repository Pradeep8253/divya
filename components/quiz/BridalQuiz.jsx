"use client";

import { useState } from "react";
import styles from "./BridalQuiz.module.css";
import { getWhatsAppUrl, buildWhatsAppMessage } from "@/lib/whatsapp";

const questions = [
  {
    id: "vibe",
    question: "How would you describe your overall wedding vibe?",
    options: [
      { label: "Traditional & Royal", value: "traditional" },
      { label: "Modern & Minimalist", value: "modern" },
      { label: "Glamorous & Extravagant", value: "glamorous" },
      { label: "Boho & Intimate", value: "boho" }
    ]
  },
  {
    id: "skin",
    question: "What is your skin type?",
    options: [
      { label: "Oily / Combination", value: "oily" },
      { label: "Dry / Dehydrated", value: "dry" },
      { label: "Normal", value: "normal" },
      { label: "Sensitive / Acne-prone", value: "sensitive" }
    ]
  },
  {
    id: "finish",
    question: "What kind of makeup finish do you prefer?",
    options: [
      { label: "Matte (Shine-free, Long-lasting)", value: "matte" },
      { label: "Dewy (Glowing, Hydrated)", value: "dewy" },
      { label: "Soft Glam (Balanced, Flawless)", value: "soft-glam" },
      { label: "Natural (Skin-like, Barely-there)", value: "natural" }
    ]
  },
  {
    id: "hair",
    question: "How are you planning to wear your hair?",
    options: [
      { label: "Classic Updo / Traditional Bun", value: "bun" },
      { label: "Hollywood Waves / Open Curls", value: "open" },
      { label: "Messy Texturized Braid", value: "braid" },
      { label: "I haven't decided yet", value: "undecided" }
    ]
  }
];

export default function BridalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [name, setName] = useState("");

  const handleOptionSelect = (questionId, optionValue, optionLabel) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { value: optionValue, label: optionLabel }
    }));

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, 400); // Small delay for visual feedback
  };

  const getRecommendation = () => {
    const finish = answers.finish?.value;
    const vibe = answers.vibe?.value;

    if (vibe === 'traditional' || finish === 'matte') {
      return {
        title: "The Classic Royal",
        description: "Your answers suggest you lean towards a timeless, enduring look. We recommend our Signature HD Matte finish paired with a traditional updo to complement heavy jewelry.",
        image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=600"
      };
    } else if (vibe === 'modern' || finish === 'natural') {
      return {
        title: "The Modern Minimalist",
        description: "You appreciate understated elegance. We recommend an airbrushed, skin-like finish focusing on glowing skin and soft, textured hair.",
        image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600"
      };
    } else {
      return {
        title: "The Contemporary Glam",
        description: "You want a flawless, balanced look. We recommend our Soft Glam package featuring a dewy base, striking eyes, and Hollywood waves.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
      };
    }
  };

  const handleSubmit = () => {
    const recommendation = getRecommendation();
    const message = buildWhatsAppMessage({
      intent: "I just completed the Bridal Style Quiz!",
      name: name || "Bride-to-be",
      notes: `My Result: ${recommendation.title}\n\nVibe: ${answers.vibe?.label}\nSkin: ${answers.skin?.label}\nFinish: ${answers.finish?.label}\nHair: ${answers.hair?.label}\n\nI would love to discuss this look further.`
    });
    window.open(getWhatsAppUrl(message), "_blank");
  };

  if (isComplete) {
    const result = getRecommendation();
    return (
      <div className={styles.quizContainer}>
        <div className={styles.resultCard}>
          <span className={styles.eyebrow}>YOUR BRIDAL STYLE</span>
          <h2 className={styles.resultTitle}>{result.title}</h2>
          
          <div className={styles.resultImageWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={result.image} alt={result.title} className={styles.resultImage} />
          </div>
          
          <p className={styles.resultDesc}>{result.description}</p>
          
          <div className={styles.nameInputContainer}>
            <input 
              type="text" 
              placeholder="Your Name (Optional)" 
              className={styles.nameInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className={styles.actions}>
            <button onClick={handleSubmit} className="button-primary">
              DISCUSS THIS LOOK
            </button>
            <button onClick={() => { setCurrentQuestion(0); setAnswers({}); setIsComplete(false); }} className="button-secondary">
              RETAKE QUIZ
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className={styles.quizContainer}>
      <div className={styles.progressHeader}>
        <span className={styles.progressText}>Question {currentQuestion + 1} of {questions.length}</span>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className={styles.questionCard}>
        <h3 className={styles.question}>{question.question}</h3>
        
        <div className={styles.options}>
          {question.options.map((option) => (
            <button
              key={option.value}
              className={`${styles.optionBtn} ${answers[question.id]?.value === option.value ? styles.selected : ''}`}
              onClick={() => handleOptionSelect(question.id, option.value, option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
