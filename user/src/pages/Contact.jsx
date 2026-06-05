import { useSelector } from "react-redux";

const Contact = () => {
  const isDarkMode = useSelector((state) => state.theme.current) === "dark";
  return (
    <div className={`min-h-screen px-4 py-20 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-[#020707] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="mx-auto max-w-5xl space-y-8">
        <div className={`rounded-[2.5rem] border p-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)] ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-gray-100'}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">Contact</p>
          <h1 className={`mt-4 text-4xl font-black sm:text-5xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let&apos;s get you on the field</h1>
          <p className={`mt-6 max-w-3xl text-lg leading-8 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
            Need help with a booking or want to inquire about stadium availability? Reach out and our team will respond quickly.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-1">
          <div className={`rounded-[2rem] border p-8 ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-300 bg-gray-100'}`}>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Info</h2>
            <p className={`mt-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Email: hello@j4arena.com</p>
            <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Phone: +91 12345 67890</p>
            <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Location: Pamban Turf Arena, Pamban</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
