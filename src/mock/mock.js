const registrants = [
	{
		FirstName: "Johnny",
		LastName: "Walker",
		Company: "Disney Worldwide",
		Attended: false,
		FirstCheckInDateTime: null
	},
	{
		FirstName: "Mike",
		LastName: "Salmanders",
		Company: "Google, Inc.",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "James",
		LastName: "Klein",
		Company: "Alphabet Corp",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "Tyler",
		LastName: "Stalbrook",
		Company: "Apple",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "Joanna",
		LastName: "Johnson",
		Company: "ESPN Networks",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T11:36:22"
	},
	{
		FirstName: "Erin",
		LastName: "Sampson",
		Company: "Comcast Sucks",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T12:17:22"
	},
	{
		FirstName: "Kimmy",
		LastName: "Braves",
		Company: "Real Networks",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "Mellissa",
		LastName: "Mackeloor",
		Company: "Convoy Solutions",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "Helen",
		LastName: "Minkelly",
		Company: "Treehouse Networks",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "David",
		LastName: "Mason",
		Company: "Adobe",
		Attended: true,
		FirstCheckInDateTime: "2017-08-03T07:56:22"
	},
	{
		FirstName: "Ashley",
		LastName: "Waters",
		Company: "Facebook",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T17:56:22"
	},
	{
		FirstName: "Thomas",
		LastName: "Wilson-Watkins",
		Company: "Microsoft",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "Brian",
		LastName: "Talmadge",
		Company: "Nordstrom",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22"
	},
	{
		FirstName: "Billy-Joe",
		LastName: "Williams",
		Company: "National Basketball Association",
		Attended: true,
		FirstCheckInDateTime: "2017-08-03T10:59:22"
	}
];

export const getRegistrants = () => {
	return registrants;
};

export const loadRegistrant = () => {
	return registrants[Math.floor(Math.random() * registrants.length)];
};
