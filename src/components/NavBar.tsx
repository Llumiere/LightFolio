import { useState, ReactNode } from 'react';
import { items } from './NavBarItem';


interface Props {
  themeColor?: string;
  textColor: string;
  heading: string;
  onSelect: (item: string) => void;
  children?: ReactNode;
}

const Navbar = ({ themeColor = 'primary', children, onSelect, heading, textColor }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
                    className={`bg-${themeColor} text-${textColor} ${selectedIndex === index ? 'list-group-item active ' : 'list-group-item'}`}
                    key={item.id}
                    onClick={() => {
                      onSelect(item.title), setSelectedIndex(index);
                    }}
                  >
                    {item.title}
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
