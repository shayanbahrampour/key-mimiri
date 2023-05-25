export const impact_story_categories = (query = '') => `/shared/impact-story-categories/${query}`;
export const impact_story = ({ lang, id = '', query = '' } = {}) => `/shared/${lang}/impact-stories/${id}${query}`;
