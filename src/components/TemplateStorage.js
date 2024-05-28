export const saveTemplate = (template) => {
  localStorage.setItem('savedTemplate', JSON.stringify(template));
};

export const loadTemplate = () => {
  const savedTemplate = localStorage.getItem('savedTemplate');
  return savedTemplate ? JSON.parse(savedTemplate) : [];
};
