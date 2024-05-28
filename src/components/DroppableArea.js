import { useDrop } from 'react-dnd';

const DroppableArea = ({ onDrop, children }) => {
  const [, dropRef] = useDrop({
    accept: ['TEXT', 'IMAGE', 'TABLE'],
    drop: (item) => onDrop(item)
  });

  return (
    <div ref={dropRef} style={{ border: '1px solid black', minHeight: '400px', padding: '16px' }}>
      {children}
    </div>
  );
};

export default DroppableArea;
