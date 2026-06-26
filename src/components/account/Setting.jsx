import { useState, useRef } from "react";

const Input = ({ label, optional, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-gray-600">
      {label}{" "}
      {optional && <span className="text-gray-400 text-xs">(optional)</span>}
    </label>
    <input
      {...props}
      className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition bg-white"
    />
  </div>
);

const Select = ({ label, options, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-gray-600">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition bg-white pr-8"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const PasswordInput = ({ label, value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder || "Password"}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition bg-white pr-10"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
        >
          {show ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const SaveButton = ({ label = "Save Changes", onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
  >
    {label}
  </button>
);

const SectionCard = ({ title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-6 pt-5 pb-3">
      <h2 className="text-base font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="w-full h-px bg-gray-100" />
    <div className="px-6 py-5">{children}</div>
  </div>
);

export default function Setting() {
  const fileRef = useRef(null);
  const [avatar, setAvatar] = useState(null);

  // Account fields
  const [account, setAccount] = useState({
    firstName: "Dennis",
    lastName: "Nzioki",
    email: "dennisnzioki@gmail.com",
    phone: "254 555-0123",
  });

  // Billing fields
  const [billing, setBilling] = useState({
    firstName: "Dennis",
    lastName: "Nzioki",
    company: "dnx",
    street: "4140 Par|",
    country: "Kenya",
    state: "Nairobi DC",
    zip: "20033",
    email: "dennisnzioki@gmail.com",
    phone: "254 555-0123",
  });

  // Password fields
  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [saved, setSaved] = useState({});

  const handleSave = (section) => {
    setSaved((s) => ({ ...s, [section]: true }));
    setTimeout(() => setSaved((s) => ({ ...s, [section]: false })), 2000);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  return (
    <div className=" bg-gray-50 py-8 px-4">
      <div className=" flex flex-col gap-6">

        {/* Account Settings */}
        <SectionCard title="Account Settings">
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Form fields */}
            <div className="flex-1 flex flex-col gap-4">
              <Input
                label="First name"
                value={account.firstName}
                placeholder="First name"
                onChange={(e) => setAccount({ ...account, firstName: e.target.value })}
              />
              <Input
                label="Last Name"
                value={account.lastName}
                placeholder="Last name"
                onChange={(e) => setAccount({ ...account, lastName: e.target.value })}
              />
              <Input
                label="Email"
                type="email"
                value={account.email}
                placeholder="Email"
                onChange={(e) => setAccount({ ...account, email: e.target.value })}
              />
              <Input
                label="Phone Number"
                type="tel"
                value={account.phone}
                placeholder="Phone number"
                onChange={(e) => setAccount({ ...account, phone: e.target.value })}
              />
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center gap-3 sm:pt-2">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-green-100 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center shrink-0">
                {avatar ? (
                  <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white text-2xl font-bold select-none">DN</span>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              <button
                type="button"
                onClick={() => fileRef.current.click()}
                className="border border-green-500 text-green-600 text-sm font-medium px-4 py-1.5 rounded-full hover:bg-green-50 transition"
              >
                Choose Image
              </button>
            </div>
          </div>

          <div className="mt-5">
            {saved.account ? (
              <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Saved!
              </span>
            ) : (
              <SaveButton onClick={() => handleSave("account")} />
            )}
          </div>
        </SectionCard>

        {/* Billing Address */}
        <SectionCard title="Billing Address">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="First name"
                value={billing.firstName}
                placeholder="First name"
                onChange={(e) => setBilling({ ...billing, firstName: e.target.value })}
              />
              <Input
                label="Last name"
                value={billing.lastName}
                placeholder="Last name"
                onChange={(e) => setBilling({ ...billing, lastName: e.target.value })}
              />
              <Input
                label="Company Name"
                optional
                value={billing.company}
                placeholder="Company"
                onChange={(e) => setBilling({ ...billing, company: e.target.value })}
              />
            </div>

            <Input
              label="Street Address"
              value={billing.street}
              placeholder="Street address"
              onChange={(e) => setBilling({ ...billing, street: e.target.value })}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Select
                label="Country / Region"
                value={billing.country}
                onChange={(e) => setBilling({ ...billing, country: e.target.value })}
                options={["Kenya", "Uganda", "Tanzania", "Nigeria", "Ghana", "United States"]}
              />
              <Select
                label="States"
                value={billing.state}
                onChange={(e) => setBilling({ ...billing, state: e.target.value })}
                options={["Nairobi DC", "Mombasa", "Kisumu", "Nakuru", "Eldoret"]}
              />
              <Input
                label="Zip Code"
                value={billing.zip}
                placeholder="Zip code"
                onChange={(e) => setBilling({ ...billing, zip: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Email"
                type="email"
                value={billing.email}
                placeholder="Email"
                onChange={(e) => setBilling({ ...billing, email: e.target.value })}
              />
              <Input
                label="Phone"
                type="tel"
                value={billing.phone}
                placeholder="Phone"
                onChange={(e) => setBilling({ ...billing, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="mt-5">
            {saved.billing ? (
              <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Saved!
              </span>
            ) : (
              <SaveButton onClick={() => handleSave("billing")} />
            )}
          </div>
        </SectionCard>

        {/* Change Password */}
        <SectionCard title="Change Password">
          <div className="flex flex-col gap-4">
            <PasswordInput
              label="Current Password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PasswordInput
                label="New Password"
                value={passwords.newPass}
                onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
              />
              <PasswordInput
                label="Confirm Password"
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              />
            </div>
            {passwords.newPass && passwords.confirm && passwords.newPass !== passwords.confirm && (
              <p className="text-red-500 text-xs">Passwords do not match.</p>
            )}
          </div>

          <div className="mt-5">
            {saved.password ? (
              <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Password changed!
              </span>
            ) : (
              <SaveButton label="Change Password" onClick={() => handleSave("password")} />
            )}
          </div>
        </SectionCard>

      </div>
    </div>
  );
}