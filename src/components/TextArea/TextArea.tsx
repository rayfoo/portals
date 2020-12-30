import React from 'react';
import Mentions from 'rc-mentions';
import './styles.css';

type props = {
  onFocus?: (state: boolean) => void;
  isTitle?: boolean;
  placeholder?: string;
  minRows?: number;
};

export function TextArea({
  onFocus,
  isTitle,
  placeholder = '',
  minRows = 1,
}: props) {
  const { Option } = Mentions;

  const handleFocus = (state: boolean) => {
    if (onFocus) {
      onFocus(state);
    }
  };

  const styles = {
    fontSize: '18px',
    lineHeight: 1.2,
  };

  const titleStyles = {
    fontWeight: 500,
    fontSize: '22px',
    color: '#1F2937',
  };

  return (
    <Mentions
      prefix="#"
      autoSize={{ minRows }}
      placeholder={placeholder}
      onFocus={() => handleFocus(true)}
      style={isTitle ? { ...styles, ...titleStyles } : styles}
    >
      <Option value="light">light</Option>
      <Option value="bamboo">bamboo</Option>
      <Option value="cat">cat</Option>
    </Mentions>
  );
}
