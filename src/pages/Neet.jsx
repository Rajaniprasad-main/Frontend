import React, { useState } from 'react';



const Neet = () => {
  const [syllabusExpanded, setSyllabusExpanded] = useState(false);
  const [faqsExpanded, setFaqsExpanded] = useState({});

  const syllabusTopics = [
    'Physics: Mechanics, Thermodynamics, Electrodynamics, Optics',
    'Chemistry: Organic, Inorganic, Physical Chemistry',
    'Biology: Botany, Zoology, Human Physiology, Genetics',
  ];

  const faqs = [
    {
      q: "What is the eligibility criteria for NEET?",
      a:
        "Candidates must have passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology and English and meet age limits.",
    },
    {
      q: "How can I apply for NEET?",
      a:
        "Applications are submitted online on the official NTA NEET website during the application window.",
    },
    {
      q: "What is the exam mode?",
      a: "The exam is conducted offline as a pen-and-paper-based test.",
    },
    {
      q: "How do I download the admit card?",
      a:
        "Admit cards are made available online at the official website. Login with credentials and download.",
    },
    {
      q: "What is the marking scheme?",
      a: "4 marks awarded for each correct answer, 1 mark deducted for each incorrect answer.",
    },
    {
      q: "Are there reservation benefits?",
      a:
        "Yes, reservations for SC/ST/OBC and other categories as per government guidelines apply.",
    },
 
  ];

  // To toggle single FAQ item
  const toggleFaq = (index) => {
    setFaqsExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Related exams suggestions (just sample)
  const relatedExams = [
    {
      name: 'AIIMS MBBS',
      body: 'All India Institute of Medical Sciences',
    },
    {
      name: 'JIPMER',
      body: 'Jawaharlal Institute of Postgraduate Medical Education & Research',
    },
    {
      name: 'PGIMER',
      body: 'Post Graduate Institute of Medical Education and Research',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
      {/* Exam Header / Hero Section */}
      <header
        className="relative bg-gray-800 text-white text-center py-20 px-6"
        style={{
        
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">NEET</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8 font-semibold drop-shadow-md">
          National Eligibility cum Entrance Test - Your Gateway to Medical Education
        </p>
        <div className="space-x-6">
          <a
            href="#apply"
            className="inline-block bg-gray-900 text-yellow-500 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition"
          >
            Apply Now
          </a>
          <a
            href="#syllabus"
            className="inline-block border-2 border-yellow-500 text-yellow-500 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition"
          >
            View Syllabus
          </a>
        </div>
      </header>

      {/* Quick Info Snapshot */}
      <section className="max-w-6xl mx-auto mt-12 px-6">
        <div className="bg-gray-800 rounded-lg shadow flex flex-wrap justify-around text-center py-6 px-4">
          {[
            { label: 'Level', value: 'UG (Undergraduate)' },
            { label: 'Conducting Body', value: 'National Testing Agency (NTA)' },
            { label: 'Mode', value: 'Offline Pen-and-Paper' },
            { label: 'Application Dates', value: 'Feb 1 – Feb 15, 2025' },
            { label: 'Exam Date', value: 'May 6, 2025' },
          ].map(({ label, value }) => (
            <div key={label} className="m-4 flex-1 min-w-[150px]">
              <p className="text-yellow-500 font-semibold text-lg">{label}</p>
              <p className="text-white font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Overview */}
      <section className="max-w-5xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Exam Overview</h2>
        <p className="text-gray-700 text-left leading-relaxed">
          The National Eligibility cum Entrance Test (NEET) is the single entrance examination for admission to MBBS, BDS, and other undergraduate medical courses across India. It aims to streamline the admission process and ensure merit-based selection. NEET tests candidates on Physics, Chemistry, and Biology knowledge, preparing them thoroughly for medical studies.
        </p>
      </section>

      {/* Important Dates */}
      <section className="  mt-16 px-6 bg-gray-100 rounded-lg shadow-lg py-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Important Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center text-white font-semibold">
          <div className="border border-yellow-500 rounded-lg py-6 px-4 bg-gray-800">
            <p className="text-yellow-500 text-xl mb-1">Notification Release</p>
            <p>Jan 15, 2025</p>
          </div>
          <div className="border border-yellow-500 rounded-lg py-6 px-4 bg-gray-800">
            <p className="text-yellow-500 text-xl mb-1">Application Deadline</p>
            <p>Feb 15, 2025</p>
          </div>
          <div className="border border-yellow-500 rounded-lg py-6 px-4 bg-gray-800">
            <p className="text-yellow-500 text-xl mb-1">Exam Date</p>
            <p>May 6, 2025</p>
          </div>
          <div className="border border-yellow-500 rounded-lg py-6 px-4 bg-gray-800">
            <p className="text-yellow-500 text-xl mb-1">Result Declaration</p>
            <p>June 5, 2025</p>
          </div>
          <div className="border border-yellow-500 rounded-lg py-6 px-4 bg-gray-800">
            <p className="text-yellow-500 text-xl mb-1">Counseling Start</p>
            <p>July 1, 2025</p>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="max-w-5xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Eligibility Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 font-medium text-lg">
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Nationality</h3>
            <p>Indian Nationals, NRIs, OCIs, PIOs, and Foreign Nationals are eligible to apply.</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Age Limit</h3>
            <p>Minimum 17 years at the time of admission; upper age limit 25 years (relaxation for reserved categories as per regulations).</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Educational Qualification</h3>
            <p>Passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology and English as core subjects.</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Reservation</h3>
            <p>Categories as per Government of India norms including SC/ST/OBC, and others.</p>
          </div>
        </div>
      </section>

      {/* Exam Pattern */}
      <section className="max-w-5xl mx-auto mt-16 px-6 bg-white rounded-lg shadow-lg py-10">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Exam Pattern</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-800 font-medium text-lg">
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Mode</h3>
            <p>Offline (Pen and Paper-based Test)</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Duration</h3>
            <p>3 hours 20 minutes</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Subjects</h3>
            <p>Physics, Chemistry, Biology (Botany & Zoology)</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Total Questions</h3>
            <p>180 questions (45 Physics, 45 Chemistry, 90 Biology)</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500 mb-2">Marking Scheme</h3>
            <p>4 marks for each correct answer, -1 for each incorrect answer</p>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      {/* <section className="max-w-5xl mx-auto mt-16 px-6">
        <h2
          id="syllabus"
          className="text-3xl font-bold mb-6 text-gray-900 cursor-pointer select-none"
          onClick={() => setSyllabusExpanded(!syllabusExpanded)}
          aria-expanded={syllabusExpanded}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setSyllabusExpanded(!syllabusExpanded);
            }
          }}
        >
          Syllabus {syllabusExpanded ? '▲' : '▼'}
        </h2>
        {syllabusExpanded && (
          <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
            {syllabusTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        )}
        <a
          href="/neet-syllabus.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-yellow-500 transition"
          download
        >
          Download Syllabus PDF
        </a>
      </section> */}

      {/* Application Process */}
      <section className="max-w-6xl mx-auto mt-20 px-6 bg-gray-200 rounded-lg shadow-lg py-12">
  <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Application Process</h2>

  {/* Two Column Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
    {/* Step Guide */}
    <div>
      <h3 className="text-xl font-semibold mb-6 text-yellow-500 text-left">Step Guide</h3>
      <ol className="list-decimal list-inside space-y-3 text-gray-800 font-medium text-left">
        <li>Visit the official NEET website.</li>
        <li>Register with a valid email and phone number.</li>
        <li>Fill the application form with personal, academic and contact details.</li>
        <li>Upload scanned documents and photograph as per specifications.</li>
        <li>Pay the application fee online through available modes.</li>
        <li>Submit and print the confirmation page for future reference.</li>
      </ol>
    </div>

    {/* Fee Structure */}
    <div className="overflow-x-auto">
      <h3 className="text-xl font-semibold mb-4 text-yellow-500">Fee Structure</h3>
      <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 border-b border-yellow-500">
          <tr>
            <th className="py-3 px-5 font-semibold text-white">Category</th>
            <th className="py-3 px-5 font-semibold text-white">Application Fee (INR)</th>
          </tr>
        </thead>
        <tbody>
          {[
            { category: 'General/OBC', fee: '1500' },
            { category: 'SC/ST/PwD', fee: '800' },
            { category: 'Others (Foreign Nationals)', fee: '7500' },
          ].map(({ category, fee }, idx) => (
            <tr
              key={idx}
              className={idx % 1 === 0 ? 'bg-gray-400' : ''}
            >
              <td className="py-3 px-5 border-b border-yellow-100">{category}</td>
              <td className="py-3 px-5 border-b border-yellow-100">{fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Payment Methods */}
  {/* Payment Methods */}
 <h3 class="text-xl font-semibold mb-8 text-yellow-500 text-left">
  Payment Methods
</h3>
<div class="flex flex-wrap gap-4">

  <a href="https://www.paypal.com/pay/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/image/paypal.jpg" alt="Apple Pay" class="h-12 w-auto" />
  </a>

  <a href="https://pay.paytm.com/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/image/paytm.jpg" alt="Meta Pay" class="h-12 w-auto" />
  </a>

  <a href="https://pay.google.com/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/image/gpay.jpg" alt="Google Pay" class="h-12 w-auto" />
  </a>

  <a href="https://www.mastercard.com/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/image/mastercard.jpg" alt="Mastercard" class="h-12 w-auto" />
  </a>

  <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/image/visa.jpg" alt="Visa" class="h-12 w-auto" />
  </a>

  {/* <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/images/paypal.png" alt="PayPal" class="h-12 w-auto" />
  </a>

  <a href="https://www.affirm.com/" target="_blank" rel="noopener noreferrer"
     class="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
    <img src="/images/affirm.png" alt="Affirm" class="h-12 w-auto" />
  </a> */}

</div>

</section>


      {/* Preparation Resources */}
      <section className="max-w-5xl mx-auto mt-20 px-6 bg-gray-200 rounded-lg shadow-lg py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Preparation Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-800 font-medium text-lg">
          {[
            { title: 'Books', desc: 'Comprehensive textbooks and guides from reputed authors.' },
            { title: 'Study Guides', desc: 'Structured notes and quick revision materials.' },
            { title: 'Mock Tests', desc: 'Simulated exams for practice and confidence building.' },
            { title: 'Lectures', desc: 'Video lessons by expert faculties available online.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-6 border border-gray-800 rounded-lg hover:shadow-lg transition-shadow cursor-default">
              <h3 className="font-semibold text-yellow-500 mb-3">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career / Scope After Exam */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Career &amp; Scope After NEET</h2>
        <div className="text-left max-w-4xl mx-auto text-gray-800 font-medium space-y-6 text-lg">
          <p><strong>Admissions:</strong> Admission to MBBS, BDS, AYUSH and other health science courses in top medical institutions across India.</p>
          <p><strong>Jobs:</strong> Opportunities in hospitals, research institutions, healthcare management, and public health sectors.</p>
          <p><strong>Scholarships:</strong> Numerous state and central government scholarships and financial aid programs for meritorious students.</p>
        </div>
      </section>

{/* FAQs Section */}
<section className="mt-20 px-6 bg-gray-200 rounded-lg shadow-lg py-12">
  <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
    Frequently Asked Questions
  </h2>
  <div className="max-w-5xl mx-auto grid grid-cols-2 gap-x-8 text-gray-800 font-medium">
    {/* Left column FAQs (even indexes) */}
    <div className="space-y-12">
      {faqs
        .map((faq, idx) => ({ faq, idx }))
        .filter(({ idx }) => idx % 2 === 0)
        .map(({ faq, idx }) => (
          <div
            key={idx}
            className="border border-yellow-300 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              className="w-full text-left p-4 bg-yellow-400 bg-opacity-40 font-semibold text-yellow-900 hover:bg-yellow-500 hover:text-yellow-50 transition flex justify-between items-center"
              onClick={() => toggleFaq(idx)}
              aria-expanded={!!faqsExpanded[idx]}
            >
              {faq.q}
              <span>{faqsExpanded[idx] ? "−" : "+"}</span>
            </button>
            {faqsExpanded[idx] && (
              <div className="p-4 bg-yellow-100 text-gray-900 text-left max-w-full">
                {faq.a}
              </div>
            )}
          </div>
      ))}
    </div>

    {/* Right column FAQs (odd indexes) */}
    <div className="space-y-12">
      {faqs
        .map((faq, idx) => ({ faq, idx }))
        .filter(({ idx }) => idx % 2 !== 0)
        .map(({ faq, idx }) => (
          <div
            key={idx}
            className="border border-yellow-300 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              className="w-full text-left p-4 bg-yellow-400 bg-opacity-40 font-semibold text-yellow-900 hover:bg-yellow-500 hover:text-yellow-50 transition flex justify-between items-center"
              onClick={() => toggleFaq(idx)}
              aria-expanded={!!faqsExpanded[idx]}
            >
              {faq.q}
              <span>{faqsExpanded[idx] ? "−" : "+"}</span>
            </button>
            {faqsExpanded[idx] && (
              <div className="p-4 bg-yellow-100 text-gray-900 text-right max-w-full">
                {faq.a}
              </div>
            )}
          </div>
      ))}
    </div>
  </div>
</section>



      {/* Related Exams Section */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
  <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Related Exams</h2>
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
    {relatedExams.map(({ name, body }) => (
      <div
        key={name}
        className="border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer bg-white max-w-xs w-full"
        title={`${name} by ${body}`}
      >
        <h3 className="text-xl font-semibold text-yellow-500 mb-2">{name}</h3>
        <p className="text-gray-800 font-medium">{body}</p>
      </div>
    ))}
  </div>
</section>


      {/* Call-to-Action Bottom Banner */}
      <section className="bg-gray-900 text-yellow-500 py-16 px-6 flex flex-col items-center text-center space-y-6 mt-20">
        <h2 className="text-4xl font-extrabold max-w-3xl leading-tight">
          Need Counseling Support? Ready to Apply?
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="#counseling"
            className="px-10 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Counseling Support
          </a>
          <a
            href="#apply"
            className="px-10 py-4 border-2 border-yellow-500 rounded-lg font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Neet;
