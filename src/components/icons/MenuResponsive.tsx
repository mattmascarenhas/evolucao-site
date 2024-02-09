function MenuIcon(props: any) {
  return (
    <svg width="50" viewBox="0 0 23 19">
      <path
        fill="transparent"
        stroke={props.fill}
        strokeLinecap="round"
        strokeWidth="3"
        d="M2 2.5h18M2 9.423h18M2 16.346h18"
        className="lg:hidden"
      ></path>
    </svg>
  );
}

export default MenuIcon;
