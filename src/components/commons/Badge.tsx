import { FC } from 'react';

interface BadgeProps {
  text: string;
  color: string;
  bg?: string;
  rounded?: boolean;
}

const Badge: FC<BadgeProps> = ({ text, color, bg, rounded = false }) => {
  const badgeStyle: React.CSSProperties = {
    color: color,
    backgroundColor: bg || color, // Use background color provided or default to text color
    padding: '3px 6px',
    borderRadius: rounded ? '9999px' : '4px',
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '0.6rem',
  };

  return <div style={badgeStyle}>{text}</div>;
};

export default Badge;
