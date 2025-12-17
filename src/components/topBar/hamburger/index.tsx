
const BurgerIcon = () => {
  return (
    <div className="md:hidden">
      {/* <Image src={burgerIcon} alt="burgericon" width={25} height={18}/> */}
      <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" width="20" height="2" fill="white" />
        <rect y="8" width="25" height="2" fill="white" />
        <rect x="5" y="16" width="20" height="2" fill="white" />
      </svg>
    </div>
  )
}

export default BurgerIcon