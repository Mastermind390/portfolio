const TechCard = ({logo, name, color, amount}) => {
  return (
    <div>
      <div className={`flex flex-row items-center bg-${color}-${amount} px-6 py-2 rounded-2xl`}>
            <img src={logo} alt="css-logo" />
            <span className="text-xl ml-2 font-semibold">{name}</span>
        </div>
    </div>
  )
}

export default TechCard
