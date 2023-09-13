export const sidebarLinks = [
	{
		label: 'Home',
		route: '/',
		imgUrl: '/assets/icons/home.svg',
	},
	{
		label: 'Search',
		route: '/search',
		imgUrl: '/assets/icons/search.svg',
	},
	{
		label: 'Activity',
		route: '/activity',
		imgUrl: '/assets/icons/heart.svg',
	},
	{
		label: 'Create Thread',
		route: '/create-thread',
		imgUrl: '/assets/icons/create.svg',
	},
	{
		label: 'Communities',
		route: '/communities',
		imgUrl: '/assets/icons/community.svg',
	},
	{
		label: 'Profile',
		route: '/profile',
		imgUrl: '/assets/icons/user.svg',
	},
] as const;

export const profileTabs = [
	{ label: 'Threads', value: 'threads', icon: '/assets/icon/reply.svg' },
	{ label: 'Replies', value: 'replies', icon: '/assets/icon/members.svg' },
	{ label: 'Tagged', value: 'tagged', icon: '/assets/icon/tag.svg' },
] as const;

export const communityTabs = [
	{ label: 'Threads', value: 'threads', icon: '/assets/icon/reply.svg' },
	{ label: 'Members', value: 'members', icon: '/assets/icon/members.svg' },
	{ label: 'Requests', value: 'requests', icon: '/assets/icon/request.svg' },
] as const;
