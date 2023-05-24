export const impact_story_categories = (query = '') => `/shared/impact-story-categories/${query}`;
export const impact_story = ({ lang, query = '' } = {}) => `/shared/${lang}/impact-stories/${query}`;
