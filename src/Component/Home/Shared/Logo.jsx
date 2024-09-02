 
const Logo = () => {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/1000/svg"
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="95" fill="#1E90FF" stroke="#000" strokeWidth="2" />
      
      {/* Decorative Elements */}
      <circle cx="100" cy="50" r="5" fill="#FFF" />
      <circle cx="50" cy="150" r="3" fill="#FFF" />
      <circle cx="150" cy="150" r="3" fill="#FFF" />
      
      {/* Enhanced Nest Icon */}
      <path
        d="M50 140 C 80 100, 120 100, 150 140"
        stroke="#FFF"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 135 C 85 110, 115 110, 140 135"
        stroke="#FFF"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 130 C 90 115, 110 115, 130 130"
        stroke="#FFF"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Heritage Text */}
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontFamily="Georgia"
        fontSize="24"
        fill="#FFF"
      >
        Heritage
      </text>

      {/* Nest Text */}
      <text
        x="50%"
        y="75%"
        textAnchor="middle"
        fontFamily="Georgia"
        fontSize="20"
        fill="#FFF"
      >
        Nest
      </text>
    </svg>
  );
};

export default Logo;
