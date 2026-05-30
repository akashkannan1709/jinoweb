const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#020707] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Privacy Policy</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Welcome to J4 Arena</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We value your privacy and are committed to protecting your personal information.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            <p className="text-slate-300">
              We may collect the following information:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              <li>Name, phone number, and email address</li>
              <li>Booking details such as date, time slot, and turf selection</li>
              <li>Payment-related information processed via ICICI Eazypay or Razorpay</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">How We Use Information</h2>
            <p className="text-slate-300">
              We use the collected data to:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              <li>Confirm and manage turf bookings</li>
              <li>Process payments securely</li>
              <li>Communicate booking updates and support</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Payment Information</h2>
            <p className="text-slate-300">
              All payments are securely processed through ICICI Eazypay or Razorpay. We do not store any debit/credit card details, UPI credentials, or sensitive payment information on our servers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
            <p className="text-slate-300">
              We do not sell or rent your personal data. We may share data only with:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-slate-300">
              <li>Payment gateway providers (ICICI Eazypay or Razorpay)</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Data Security</h2>
            <p className="text-slate-300">
              We take reasonable measures to protect your information from unauthorized access or misuse.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">User Rights</h2>
            <p className="text-slate-300">
              Users can request access, correction, or deletion of their personal data by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            <p className="text-slate-300">
              If you have any questions, contact us at:
            </p>
            <p className="text-slate-300">Email: jinoj4@gmail.com</p>
            <p className="text-slate-300">Phone: 9994960166</p>
          </section>

          <section>
            <p className="text-slate-400">
              By using our service, you agree to this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
