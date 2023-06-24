export const news = (lang = '', query = '') => `/shared/${lang}/news/${query}`;
export const news_list = (lang = '', query = '') => `/shared/${lang}/news`;
export const news_categories = (query = '') => `/shared/news-categories/${query}`;

export const impact_story_categories = (query = '') => `/shared/impact-story-categories/${query}`;
export const impact_story = (lang = '', query = '') => `/shared/${lang}/impact-stories/${query}`;

export const contact = () => '/shared/contact-us';

export const job_applications = () => '/shared/job-applications';
export const job_positions = (lang = '') => `/shared/${lang}/job-positions`;
