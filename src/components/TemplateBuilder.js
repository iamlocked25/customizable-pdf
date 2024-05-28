import React, { useState, useRef } from 'react';
import DraggableComponent from './DraggableComponent';
import DroppableArea from './DroppableArea';
import generatePDF from './generatePDF';
import { saveTemplate, loadTemplate } from './TemplateStorage';
import EditableComponent from './EditableComponent';

const TemplateBuilder = () => {
  const [components, setComponents] = useState(loadTemplate());
  const contentRef = useRef();

  const handleDrop = (item) => {
    const newComponents = [...components, { type: item.type, id: Date.now(), content: '' }];
    setComponents(newComponents);
    saveTemplate(newComponents);
  };

  const updateComponent = (id, newContent) => {
    const updatedComponents = components.map((component) =>
      component.id === id ? { ...component, ...newContent } : component
    );
    setComponents(updatedComponents);
    saveTemplate(updatedComponents);
  };

  const handleGeneratePDF = () => {
    generatePDF(contentRef);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <DraggableComponent type="TEXT">Text Component</DraggableComponent>
        <DraggableComponent type="IMAGE">Image Component</DraggableComponent>
        <DraggableComponent type="TABLE">Table Component</DraggableComponent>
      </div>
      <DroppableArea onDrop={handleDrop}>
        <div ref={contentRef}>
          {components.map((component) => (
            <div
              key={component.id}
              style={{ margin: '8px', padding: '8px', border: '1px solid gray' }}
            >
              <EditableComponent component={component} updateComponent={updateComponent} />
            </div>
          ))}
        </div>
      </DroppableArea>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default TemplateBuilder;
