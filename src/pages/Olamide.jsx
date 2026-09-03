import React, { useEffect } from "react";
// import "./Olamide.css";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { Globe, Mail, MailCheck, Phone } from "lucide-react";

const Olamide = () => {


    useEffect(() => {
        document.title = 'Olamide A. Olaosebikan — BlueVoltMarine';
        window.scrollTo(0, 0);
    }, []);

  const handleSaveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Olamide A. Olaosebikan",
      "N:Olaosebikan;Olamide;A.;;",
      "ORG:BlueVoltMarine",
      "TITLE:Commercial Director",
      "TEL;TYPE=WORK,VOICE:+234 818 132 7447",
      "EMAIL;TYPE=WORK:olamide.ola@bluevoltmarine.com",
      "URL:https://www.bluevoltmarine.com",
      "URL:https://www.linkedin.com/company/bluevoltmarine/",
      "ADR;TYPE=WORK:;;6th Floor, Number One, 1 Akin Adesola Street, Victoria Island;Lagos;;101241;Nigeria",
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Olamide-Olaosebikan-BlueVoltMarine.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full bg-[#080A29] top-0 z-5000 relative">
        <div className="w-full h-full max-w-110 mx-auto bg-[#080A29] flex flex-col py-14 px-5.5 md:px-8 shadow-white relative z-10">

            <Link 
                to="/" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="z-50 text-base md:text-xl tracking-normal font-medium flex items-center justify-start h-fit gap-2"
            >
                <img 
                src={logo} 
                alt='BlueVoltMarine' 
                className='rounded-full h-10 w-10 object-cover object-center'
                />
                <div>
                    <div className="wordmark text-white tracking-wider font-extrabold leading-tight">BLUEVOLTMARINE</div>
                    <div className="lede text-xs text-[#6EC8A1] tracking-wider font-medium">RIGHT VESSEL. TECHNICAL READINESS.</div>
                </div>
            </Link>

            <div className="my-12">
                <h1 className="text-2xl md:text-4xl text-white font-bold tracking-wide"> 
                    Olamide A.
                    <br />
                    Olaosebikan
                </h1>
                <div className="title text-sm text-[#6EC8A1]">Commercial Director</div>
                <div className="org text-xs text-[#7C879F]">BlueVoltMarine</div>
            </div>

            <div className="w-full flex flex-col gap-2.5">
                <button className="bg-[#3FB2B4] rounded-md w-full h-12 px-4 text-center flex items-center justify-center gap-2 text-sm! text-nowrap" onClick={handleSaveContact}>
                    <span className="text-2xl"> + </span>
                    <span className="font-semibold"> Save Contact </span>
                </button>
                <a 
                    className="group bg-transparent text-white rounded-md w-full h-12 px-4 border border-white/30 flex items-center justify-center gap-1.5 text-sm! text-nowrap hover:text-[#6EC8A1] hover:border-[#6EC8A1]"
                    href="https://www.linkedin.com/company/bluevoltmarine/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg className="w-4 h-4 text-white group-hover:text-[#6EC8A1] -mt-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.5 8.5h4.37v1.98h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 7v9.89h-4.56v-8.77c0-2.09-.04-4.78-2.91-4.78-2.92 0-3.37 2.28-3.37 4.63v8.92H8.5V8.5z" />
                    </svg>
                
                    <span className="font-semibold"> View on LinkedIn </span>
                </a>
            </div>


            <hr className="w-full h-px border-0 bg-white/20 mt-8 mb-6 flex" />

            <div className="text-sm text-[#7C879F] leading-normal font-mono space-y-2">
                <a href="tel:2348181327447" target="_blank" className="flex items-center gap-2">
                    <Phone size={14} />
                    +234 818 132 7447
                </a>

                <a href="mailto:olamide.ola@bluevoltmarine.com" target="_blank" className="flex items-center gap-2">
                    <Mail size={14} />
                    olamide.ola@bluevoltmarine.com
                </a>

                <a href="https://www.bluevoltmarine.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe size={14} />
                    bluevoltmarine.com
                </a>


                6th Floor, Number One, 1 Akin Adesola Street

                <br />

                Victoria Island, Lagos, Nigeria
            </div>

            <div className="my-6 flex"></div>

            <footer className="flex flex-col items-center text-center gap-4">
                <span className="text-[#6EC8A1] text-xs font-medium">
                    Vessel brokerage, marine surveys and technical readiness.
                </span>
                <span className="text-[#A6B0C4]">RC 9268505</span>
            </footer>
        </div>

            <svg
                className="waves fixed z-1 bottom-0 left-1/2 -translate-x-1/2"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0 108 Q 50 84 100 108 T 200 108 T 300 108 T 400 108"
                fill="none"
                stroke="#3FB2B4"
                strokeWidth="1"
                opacity="0.5"
                />
                <path
                d="M0 122 Q 50 100 100 122 T 200 122 T 300 122 T 400 122"
                fill="none"
                stroke="#3FB2B4"
                strokeWidth="1"
                opacity="0.35"
                />
                <path
                d="M0 138 Q 50 116 100 138 T 200 138 T 300 138 T 400 138 V162 Q 350 140 300 162 T 200 162 T 100 162 T 0 162 Z"
                fill="#3FB2B4"
                />
                <path
                d="M0 158 Q 50 136 100 158 T 200 158 T 300 158 T 400 158 V200 H0 Z"
                fill="#0D1440"
                />
            </svg>
    </div>
  );
};

export default Olamide;