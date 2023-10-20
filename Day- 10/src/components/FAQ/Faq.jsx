import React, { useState } from "react";
import "./Faq.css";

const FAQ = () => {
  const [faqs] = useState([
    {
      question: ' What services are offered on our marketplace?',
      answer: "We offer a wide range of local services, including plumbing, electrical work, cleaning, gardening, and more.",
    },
    {
      question: ' How do I book a service provider?',
      answer: "To book a service provider, simply browse our listings, select a service provider, and follow the booking instructions provided on their profile.",
    },
    {
      question: ' What payment methods are accepted?',
      answer: "We accept various payment methods, including credit/debit cards and digital wallets, depending on the service provider's preference",
    },
    {
      question: "What if I'm not satisfied with the service I receive?",
      answer: "If you're not satisfied with a service, we encourage you to contact the service provider directly to discuss any issues or concerns. Many issues can be resolved through communication. If you're unable to reach a resolution, please reach out to our customer support team for assistance.",
    },
    {
      question: "Is my personal information safe on your platform?",
      answer: "Yes, we prioritize the security and privacy of your information. We use industry-standard security measures to protect your data. You can review our privacy policy for more details on how we handle and safeguard your information.",
    },
  ]);

  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (index) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="faqbk">
      <div>
        <br></br>
        <br></br>
        <div className="privacy-text1">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <br />
        {faqs.map((faq, index) => (
          <div key={index} className="faq-ques">
            <div className={`faq-question ${expanded === index ? 'faq-question2' : 'faq-question1'}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {expanded === index && (
                <div className="faq-answer">
                  <div className="ans-text">{faq.answer}</div>
                </div>
              )}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default FAQ;












