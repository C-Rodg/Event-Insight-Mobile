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
		FirstCheckInDateTime: "AUG 02, 8:30 AM",
		WatchList: false,
		AttendeeId: 1001
	},
	{
		FirstName: "James",
		LastName: "Klein",
		Company: "Alphabet Corp",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 8:38 AM",
		WatchList: false,
		AttendeeId: 1002
	},
	{
		FirstName: "Tyler",
		LastName: "Stalbrook",
		Company: "Apple",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 7:33 AM",
		WatchList: false,
		AttendeeId: 1003
	},
	{
		FirstName: "Joanna",
		LastName: "Johnson",
		Company: "ESPN Networks",
		Attended: true,
		FirstCheckInDateTime: "AUG 02, 11:55 AM",
		WatchList: false,
		AttendeeId: 1004
	},
	{
		FirstName: "Erin",
		LastName: "Sampson",
		Company: "Comcast Sucks",
		Attended: true,
		FirstCheckInDateTime: "AUG 23, 12:45 PM",
		WatchList: false,
		AttendeeId: 1005
	},
	{
		FirstName: "Kimmy",
		LastName: "Braves",
		Company: "Real Networks",
		Attended: false,
		FirstCheckInDateTime: "AUG 13, 10:01 PM",
		WatchList: true,
		AttendeeId: 1006
	},
	{
		FirstName: "Mellissa",
		LastName: "Mackeloor",
		Company: "Convoy Solutions",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 11:22 AM",
		WatchList: false,
		AttendeeId: 1007
	},
	{
		FirstName: "Helen",
		LastName: "Minkelly",
		Company: "Treehouse Networks",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 11:39 AM",
		WatchList: false,
		AttendeeId: 1008
	},
	{
		FirstName: "David",
		LastName: "Mason",
		Company: "Adobe",
		Attended: true,
		FirstCheckInDateTime: "AUG 13, 6:13 AM",
		WatchList: false,
		AttendeeId: 1009
	},
	{
		FirstName: "Ashley",
		LastName: "Wilson-Watkins",
		Company: "Facebook",
		Attended: true,
		FirstCheckInDateTime: "AUG 03, 12:11 PM",
		WatchList: true,
		AttendeeId: 1010
	},
	{
		FirstName: "Thomas",
		LastName: "Moore-Stevens",
		Company: "Microsoft",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 8:37 AM",
		WatchList: false,
		AttendeeId: 1011
	},
	{
		FirstName: "Brian",
		LastName: "Talmadge",
		Company: "Nordstrom",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 9:59 AM",
		WatchList: true,
		AttendeeId: 1012
	},
	{
		FirstName: "Billy-Joe",
		LastName: "Williams",
		Company: "National Basketball Association",
		Attended: true,
		FirstCheckInDateTime: "AUG 09, 12:58 PM",
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
