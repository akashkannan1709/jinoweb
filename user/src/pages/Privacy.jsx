import { useSelector } from "react-redux";

const Privacy = () => {
  const isDarkMode = useSelector((state) => state.theme.current) === "dark";
  return (
    <div className={`min-h-screen px-4 py-20 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-[#020707] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="mx-auto max-w-5xl space-y-8">
        <div className={`rounded-[2.5rem] border p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-gray-100'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Privacy Policy</p>
          <h1 className={`mt-4 text-4xl font-black sm:text-5xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Welcome to J4 Arena</h1>
          <p className={`mt-6 text-lg leading-8 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            We value your privacy and are committed to protecting your personal information.
          </p>
        </div>

        <div className={`rounded-[2rem] border p-10 space-y-8 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-gray-100'}`}>
          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Information We Collect</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              We may collect the following information:
            </p>
            <ul className={`list-disc space-y-2 pl-5 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              <li>Name, phone number, and email address</li>
              <li>Booking details such as date, time slot, and turf selection</li>
              <li>Payment-related information processed via ICICI Eazypay or Razorpay</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>How We Use Information</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              We use the collected data to:
            </p>
            <ul className={`list-disc space-y-2 pl-5 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              <li>Confirm and manage turf bookings</li>
              <li>Process payments securely</li>
              <li>Communicate booking updates and support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Payment Information</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              All payments are securely processed through ICICI Eazypay or Razorpay. We do not store any debit/credit card details, UPI credentials, or sensitive payment information on our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Data Sharing</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              We do not sell or rent your personal data. We may share data only with:
            </p>
            <ul className={`list-disc space-y-2 pl-5 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              <li>Payment gateway providers (ICICI Eazypay or Razorpay)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Data Security</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              We take reasonable measures to protect your information from unauthorized access or misuse.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>User Rights</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              Users can request access, correction, or deletion of their personal data by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Us</h2>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>
              If you have any questions, contact us at:
            </p>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>Email: jinoj4@gmail.com</p>
            <p className={isDarkMode ? 'text-slate-300' : 'text-gray-600'}>Phone: 9994960166</p>
          </section>

          <section>
            <p className={isDarkMode ? 'text-slate-400' : 'text-gray-500'}>
              By using our service, you agree to this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
