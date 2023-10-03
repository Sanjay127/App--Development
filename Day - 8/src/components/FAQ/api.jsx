// App.js
import React from 'react';
import Faq from './Faq';

const faqData = [
  {
    question: 'How do I request a local service?',
    answer: 'To request a local service, you can either call our hotline or visit our website and fill out the online request form.',
  },
  {
    question: 'What are your service hours?',
    answer: 'We provide services from 8:00 AM to 6:00 PM, Monday through Friday.',
  },
  {
    question: 'How much does your service cost?',
    answer: 'The cost of our services varies depending on the type and scope of the work. Please contact us for a personalized quote.',
  },
 
];

function Api() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <Faq faqs={faqData} />
    </div>
  );
}

export default Api;
