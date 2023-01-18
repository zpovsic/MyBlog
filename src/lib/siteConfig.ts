export const SITE_URL = 'https://vercel.zpovsic.MyBlog.app';
export const APPROVED_POSTERS_GH_USERNAME = ['zpovsic'];
export const GH_USER_REPO = 'zpovsic/MyBlog'; // used for pulling github issues and offering comments
export const SITE_TITLE = ' PZ Blog';
export const SITE_DESCRIPTION = "PZ Blog SvelteKit + Tailwind starter";
export const DEFAULT_OG_IMAGE =
	'https://avatars.githubusercontent.com/u/1773876?s=40&v=4';
export const MY_TWITTER_HANDLE = 'zpovsic';
export const MY_YOUTUBE = 'https://youtube.com/PZ-TV';
export const POST_CATEGORIES = ['Essay', 'Note']; // Other categories you can consider adding: Talks, Tutorials, Snippets, Podcasts, Notes...
export const GH_PUBLISHED_TAGS = ['Documentation'];

// auto generated variables
export const REPO_URL = 'https://github.com/' + GH_USER_REPO;
export const REPO_OWNER = GH_USER_REPO.split('/')[0];

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting

//export const GH_TOKEN = process.env.GH_TOKEN;	// !important