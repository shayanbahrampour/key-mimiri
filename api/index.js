export const news = (lang = '', query = '') => `/shared/${lang}/news/${query}`;
export const news_list = (lang = '', query = '') => `/shared/${lang}/news`;
export const news_featured = (lang = '', query = '') => `/shared/${lang}/news/featured`;
export const news_categories = (query = '') => `/shared/news-categories/${query}`;

export const impact_story_categories = (query = '') => `/shared/impact-story-categories/${query}`;
export const impact_featured = (lang = '', query = '') => `/shared/${lang}/impact-stories/featured`;
export const impact_story = (lang = '', query = '') => `/shared/${lang}/impact-stories/${query}`;

export const contact = () => '/shared/contact-us';

export const job_applicants = () => '/shared/job-applicants';
export const job_positions = (lang = '') => `/shared/${lang}/job-positions`;

export const education_list = (lang = '') => `/shared/${lang}/education`;
export const education_categories = (query = '') => `/shared/education-categories/${query}`;
export const education_detail = (lang = '', query = '') => `/shared/${lang}/education/${query}`;

export const storyteller_list = (lang = '') => `/shared/${lang}/storytellers`;
export const storyteller_categories = (query = '') => `/shared/storyteller-categories/${query}`;
export const storyteller_detail = (lang = '', query = '') => `/shared/${lang}/storytellers/${query}`;
export const storyteller_featured = (lang = '', query = '') => `/shared/${lang}/storytellers/featured/${query}`;

export const call_to_actions_story = (lang = '') => `/shared/${lang}/storytellers/call-to-actions`;
export const call_to_actions_impact = (lang = '') => `/shared/${lang}/impact-stories/call-to-actions`;
