import { useDrag } from 'react-dnd';

const DraggableComponent = ({ type, children }) => {
  const [, dragRef] = useDrag({
    type,
    item: { type }
  });

  return (
    <div
      ref={dragRef}
      style={{ border: '1px dashed gray', padding: '8px', margin: '8px', cursor: 'move' }}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;
