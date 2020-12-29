import React from 'react';
import Mentions from 'rc-mentions';
import './styles.css';

type props = {
  onFocus?: (state: boolean) => void;
  isTitle?: boolean;
  placeholder?: string;
};

export function TextArea({ onFocus, isTitle, placeholder = '' }: props) {
  const { Option } = Mentions;

  const handleFocus = (state: boolean) => {
    if (onFocus) {
      onFocus(state);
    }
  };

  const styles = {
    fontSize: '16px',
  };

  const titleStyles = {
    fontWeight: 500,
    fontSize: '18px',
    color: '#1F2937',
  };

  return (
    <Mentions
      prefix="#"
      autoSize={{ minRows: 1 }}
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
