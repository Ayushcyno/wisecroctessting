const StatCard = ({ gifSrc, value, label, color }) => (
    <div className={`${color} w-full sm:w-[186px] h-[86px] bg-white rounded-2xl shadow flex items-center gap-2 justify-around`}>
      <img src={gifSrc} alt={label} className="w-[55px] h-[55px] bg-[#D6CAFA] inset-0 rounded-xl p-[5px]" />
      <div>
        <p className="text-[#303030] text-xl font-semibold font-Switzer">{value}</p>
        <p className="text-[#8997a3] text-base font-normal font-Switzer">{label}</p>
      </div>
    </div>
  );
  
  const BookStatusBar = () => {
    return (
      <div className="bg-gray-100 mt-4 rounded-2xl py-4">
        <div className="flex flex-wrap gap-4  sm:justify-start    1024p:justify-between">
          <StatCard gifSrc="../Images/student/dashboard/star.gif" value="2000" label="Total Coins" color="" />
          <StatCard gifSrc="../Images/student/dashboard/book.gif" value="20" label="Total Books" color="" />
          <StatCard gifSrc="../Images/student/dashboard/learning.gif" value="20" label="Read Books" color="" />
          <StatCard gifSrc="../Images/student/dashboard/book2.gif" value="03" label="Unread Books" color="" />
        </div>
      </div>
    );
  }
  
  export default BookStatusBar;
  