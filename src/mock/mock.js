const registrants = [
	{
		FirstName: "Johnny",
		LastName: "Walker",
		Company: "Disney Worldwide",
		Attended: false,
		FirstCheckInDateTime: null,
		WatchList: false,
		AttendeeId: 1000
	},
	{
		FirstName: "Mike",
		LastName: "Salmanders",
		Company: "Google, Inc.",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: false,
		AttendeeId: 1001
	},
	{
		FirstName: "James",
		LastName: "Klein",
		Company: "Alphabet Corp",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: false,
		AttendeeId: 1002
	},
	{
		FirstName: "Tyler",
		LastName: "Stalbrook",
		Company: "Apple",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: false,
		AttendeeId: 1003
	},
	{
		FirstName: "Joanna",
		LastName: "Johnson",
		Company: "ESPN Networks",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T11:36:22",
		WatchList: false,
		AttendeeId: 1004
	},
	{
		FirstName: "Erin",
		LastName: "Sampson",
		Company: "Comcast Sucks",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T12:17:22",
		WatchList: false,
		AttendeeId: 1005
	},
	{
		FirstName: "Kimmy",
		LastName: "Braves",
		Company: "Real Networks",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: true,
		AttendeeId: 1006
	},
	{
		FirstName: "Mellissa",
		LastName: "Mackeloor",
		Company: "Convoy Solutions",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: false,
		AttendeeId: 1007
	},
	{
		FirstName: "Helen",
		LastName: "Minkelly",
		Company: "Treehouse Networks",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: false,
		AttendeeId: 1008
	},
	{
		FirstName: "David",
		LastName: "Mason",
		Company: "Adobe",
		Attended: true,
		FirstCheckInDateTime: "2017-08-03T07:56:22",
		WatchList: false,
		AttendeeId: 1009
	},
	{
		FirstName: "Ashley",
		LastName: "Waters",
		Company: "Facebook",
		Attended: true,
		FirstCheckInDateTime: "2017-08-02T17:56:22",
		WatchList: true,
		AttendeeId: 1010
	},
	{
		FirstName: "Thomas",
		LastName: "Wilson-Watkins",
		Company: "Microsoft",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: false,
		AttendeeId: 1011
	},
	{
		FirstName: "Brian",
		LastName: "Talmadge",
		Company: "Nordstrom",
		Attended: false,
		FirstCheckInDateTime: "2017-08-02T08:30:22",
		WatchList: true,
		AttendeeId: 1012
	},
	{
		FirstName: "Billy-Joe",
		LastName: "Williams",
		Company: "National Basketball Association",
		Attended: true,
		FirstCheckInDateTime: "2017-08-03T10:59:22",
		WatchList: false,
		AttendeeId: 1013
	}
];

export const getRegistrants = () => {
	return registrants;
};

export const loadRegistrant = () => {
	return registrants[Math.floor(Math.random() * registrants.length)];
};
