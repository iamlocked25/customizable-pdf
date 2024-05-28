import React, { useState } from 'react';

const EditableComponent = ({ component, updateComponent }) => {
  const [content, setContent] = useState(component.content || '');
  const [style, setStyle] = useState(component.style || {});

  const handleChange = (e) => {
    setContent(e.target.value);
    updateComponent(component.id, { content: e.target.value, style });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setContent(reader.result);
      updateComponent(component.id, { content: reader.result, style });
    };
    reader.readAsDataURL(file);
  };

  const handleStyleChange = (e) => {
    const newStyle = { ...style, [e.target.name]: e.target.value };
    setStyle(newStyle);
    updateComponent(component.id, { content, style: newStyle });
  };

  return (
    <div>
      {component.type === 'TEXT' && (
        <input type="text" value={content} onChange={handleChange} placeholder="Enter text" />
      )}
      {component.type === 'IMAGE' && (
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      )}
      {/* Add UI for table editing */}

      <div>
        <label>Font Size:</label>
        <input
          type="number"
          name="fontSize"
          value={style.fontSize || ''}
          onChange={handleStyleChange}
        />
        <label>Color:</label>
        <input type="color" name="color" value={style.color || ''} onChange={handleStyleChange} />
        {/* Add more style options as needed */}
      </div>
    </div>
  );
};

export default EditableComponent;
