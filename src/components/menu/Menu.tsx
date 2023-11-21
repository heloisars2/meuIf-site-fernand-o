// Menu.tsx
import React from 'react';

interface MenuProps {
  onMenuItemClick: (section: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuItemClick }) => {
  return (
    <div>
      <ul>
        <li onClick={() => onMenuItemClick('introducao')}>Introdução</li>
        <li onClick={() => onMenuItemClick('desenvolvimento')}>Desenvolvimento</li>
        <li onClick={() => onMenuItemClick('funcionalidades')}>Funcionalidades</li>
        <li onClick={() => onMenuItemClick('conclusao')}>Considerações Finais</li>
        <li onClick={() => onMenuItemClick('conclusaoAvaliacoes')}>Conclusão Avaliações</li>
      </ul>
    </div>
  );
};

export default Menu;
