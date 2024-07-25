import { useState, ReactNode } from 'react';
import { items } from './NavBarItem';
import './HoverEffect.css'


interface Props {
  themeColor?: string;
  textColor: string;
  heading: string;
  onSelect: (item: string) => void;
  children?: ReactNode;
}

const Navbar = ({ themeColor = 'primary', children, onSelect, heading, textColor }: Props) => {
  const [isHover, setIsHovered] = useState<number | false>(false);  
  const handleMouseEnter = (index: number) => {setIsHovered(index);};
  const handleMouseLeave = () => {setIsHovered(false);};
  return (
    <>


      <nav className={'navbar navbar-expand-lg navbar bg-' + themeColor + ' fixed-top bg-body-tertiary'} >
  <div className="container-fluid">
    <a className={"navbar-brand text-"+textColor} href="#">
        {heading}
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      {items.map((item, index) => (
                  <li
                    className={`nav-item bg-${themeColor} text-${textColor} se_hover ${isHover === index ? 'hovered' : ''}`}
                    key={item.id}
                    onClick={() => {
                      null
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a className="nav-link" aria-current="page" href="#">
                    {item.title}
                    </a>
                  </li>
                ))}
                <li>
                    {children}
                </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
