import SectionHeading from "@/components/ui/SectionHeading";
import BridalPreparation from "@/components/sections/BridalPreparation";
import BridalQuiz from "@/components/quiz/BridalQuiz";

export const metadata = {
  title: "Bridal Preparation & Style Quiz | Divya Makeup Artist",
  description: "Prepare for your wedding day with our comprehensive beauty checklist and discover your signature bridal style with our interactive quiz.",
};

export default function BridalPage() {
  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '120px' }}>
      
      {/* Preparation Guide Section */}
      <div style={{ marginBottom: '120px' }}>
        <BridalPreparation />
      </div>

      {/* Quiz Section */}
      <section className="container" id="quiz">
        <SectionHeading number="02" title="FIND YOUR STYLE" align="center" />
        
        <div style={{ maxWidth: '800px', margin: '0 auto 64px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--ivory)', marginBottom: '24px', lineHeight: 1.1 }}>
            The Bridal Style Quiz
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'var(--ivory-soft)', lineHeight: '1.6' }}>
            Not sure what look suits you best? Take our 4-step interactive quiz to discover your signature bridal aesthetic.
          </p>
        </div>

        <BridalQuiz />
      </section>

    </main>
  );
}
