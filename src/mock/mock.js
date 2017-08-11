// Used for Dashboard data
const registrantData = {
	total: {
		preRegHere: 1500,
		walkInsHere: 320,
		preRegTotal: 3200
	},
	attendeeTypes: [
		{
			type: "Partner",
			preRegHere: 800,
			walkInsHere: 88,
			preRegTotal: 899
		},
		{
			type: "Customer",
			preRegHere: 160,
			walkInsHere: 45,
			preRegTotal: 689
		},
		{
			type: "Prospective Developer",
			preRegHere: 40,
			walkInsHere: 13,
			preRegTotal: 345
		},
		{
			type: "Developer",
			preRegHere: 110,
			walkInsHere: 28,
			preRegTotal: 263
		},
		{
			type: "CEO",
			preRegHere: 8,
			walkInsHere: 3,
			preRegTotal: 48
		},
		{
			type: "C-Level",
			preRegHere: 12,
			walkInsHere: 48,
			preRegTotal: 29
		},
		{
			type: "Lower Management",
			preRegHere: 203,
			walkInsHere: 54,
			preRegTotal: 592
		},
		{
			type: "Upper Management",
			preRegHere: 102,
			walkInsHere: 18,
			preRegTotal: 230
		},
		{
			type: "Press & Analyst",
			preRegHere: 65,
			walkInsHere: 23,
			preRegTotal: 105
		}
	]
};

// Used for registrant data
const registrants = [
	{
		FirstName: "Johnny",
		LastName: "Walker",
		Company: "Disney Worldwide",
		Email: "jwalker@gmail.com",
		Attended: false,
		FirstCheckInDateTime: null,
		WatchList: false,
		AttendeeId: 1000,
		RegistrantData: [
			{ name: "Attendee Type", value: "Partner" },
			{ name: "First Name", value: "Johnny" },
			{ name: "Last Name", value: "Walker" },
			{ name: "Company", value: "CRMServices SNCF" },
			{ name: "Title", value: "assistant chef de produit digital" },
			{ name: "Email", value: "jwalker@servicesfacter-sncssf.com" },
			{ name: "Phone", value: "608-293-1823" },
			{ name: "Twitter ID", value: "" },
			{ name: "Industry", value: "Automotive" },
			{ name: "Street Line 1", value: "" },
			{ name: "City", value: "" },
			{ name: "State", value: "" },
			{ name: "Country", value: "France" },
			{ name: "Member ID", value: "00v00m278azB4mN" },
			{ name: "Member Status", value: "Attended" },
			{ name: "Account Owner", value: "Trisha Thomomomson" },
			{
				name: "Opt In to the privacy statement?",
				value:
					"Yes, I agree to the Privacy Statement. In particular, I consent to the transfer of my personal information to other countries, including the United States, for the purpose of hosting and processing the information as set forth in the Privacy Statement."
			},
			{ name: "Dreamforce", value: "True" },
			{ name: "Account Owner Role", value: "" },
			{ name: "Send SMS To", value: "123-483-8292" }
		],
		Sessions: [
			"a2q3A200301ysXYQAI - Créez les expériences client de demain avec les objets connectés",
			"a2q3A330001ysAMQAY - Innovation : les clés pour ré-inventer son modèle économique",
			"a2q3A003211ysFLQAY - Salesforce pour les banques et les assurances",
			"a2q3A2100122235QAI - Salesforce Einstein : lintelligence artificielle à portée de tous",
			"a2q3A000001ysEFF2I - Digital Foundry by Deloitte Industrialiser une transformation Digitale"
		],
		Exhibitors: [
			"Deloitte (EMEA) THEATER",
			"Informatica COFFEE CART",
			"Lego City (Salesforce)",
			"OSF Commerce"
		],
		Feedback: [
			{
				name:
					"SFWT17-Paris-BO-Creez les experiences client de demain avec les objets connectes",
				submitted: "JUN 08, 4:01 PM",
				sessionCode: "a282akjf829301FcQAI",
				responses: [
					{
						question: "How would you rate this session overall?",
						response: "4"
					},
					{
						question: "How would you rate the presenter for this session?",
						response: "5"
					},
					{
						question: "How would you rate the room setup for this session?",
						response: "4"
					},
					{
						question: "Would you recommend this session to others?",
						response: "5 - definitely"
					},
					{
						question: "Do you have any other comments?",
						response:
							"Really an excellent session.  Wish the speaker wouldve talked more about Javascript though."
					},
					{
						question: "Did you have any security concerns about this event?",
						response: "1 - Definitely Not"
					},
					{ question: "How would you rate the event overall?", response: "4" }
				]
			},
			{
				name: "SFWT17-Paris-Keynote-Overall Survey",
				submitted: "JUN 12, 3:22 PM",
				sessionCode: "b182aasf829301FcQ1I",
				responses: [
					{
						question: "Did you pick up any swag from this event?",
						response: "No, I did not"
					},
					{
						question: "How would you rate the event overall?",
						response: "5 - Excellent"
					},
					{
						question: "How would you rate the food at this event?",
						response: "5 - Excellent"
					}
				]
			}
		]
	},
	{
		FirstName: "Mike",
		LastName: "Salmanders",
		Email: "msalmmms@gmail.com",
		Company: "Google, Inc.",
		Attended: true,
		FirstCheckInDateTime: "AUG 02, 8:30 AM",
		WatchList: false,
		AttendeeId: 1001,
		RegistrantData: [
			{ name: "Attendee Type", value: "Customer" },
			{ name: "First Name", value: "Mike" },
			{ name: "Last Name", value: "Salmanders" },
			{ name: "Company", value: "Google Solutions" }
		],
		Exhibitors: ["Vizio Electronics"],
		Sessions: [
			"a2q3A200301ysXYQAI - What you're missing about DevOps",
			"a2q3A330001ysAMQAY - Innovation : finding the next solution"
		]
	},
	{
		FirstName: "James",
		LastName: "Klein",
		Company: "Alphabet Corp",
		Email: "jklien@gmail.com",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 8:38 AM",
		WatchList: false,
		AttendeeId: 1002,
		Sessions: ["a2q3A200301ysXYQAI - What you're missing about DevOps"]
	},
	{
		FirstName: "Tyler",
		LastName: "Stalbrook",
		Email: "tstalllbrooook@gmail.com",
		Company: "Apple",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 7:33 AM",
		WatchList: false,
		AttendeeId: 1003,
		Exhibitors: ["Vizio Electronics", "Typecast Solutions"],
		Sessions: [
			"a2q3A200301ysXYQAI - What you're missing about DevOps",
			"a2q3A330001ysAMQAY - Innovation : finding the next solution"
		]
	},
	{
		FirstName: "Joanna",
		LastName: "Johnson",
		Company: "ESPN Networks",
		Email: "jj@espn.com",
		Attended: true,
		FirstCheckInDateTime: "AUG 02, 11:55 AM",
		WatchList: false,
		AttendeeId: 1004,
		Sessions: [
			"a2q3A200301ysXYQAI - What you're missing about DevOps",
			"a2q3A330001ysAMQAY - Innovation : finding the next solution"
		]
	},
	{
		FirstName: "Erin",
		LastName: "Sampson",
		Company: "Comcast Sucks",
		Email: "esampson@gmail.com",
		Attended: true,
		FirstCheckInDateTime: "AUG 23, 12:45 PM",
		WatchList: false,
		AttendeeId: 1005,
		Exhibitors: ["Typecast Solutions"]
	},
	{
		FirstName: "Kimmy",
		LastName: "Braves",
		Company: "Real Networks",
		Email: "bravesk@gmail.com",
		Attended: false,
		FirstCheckInDateTime: "AUG 13, 10:01 PM",
		WatchList: true,
		AttendeeId: 1006,
		Exhibitors: ["Typecast Solutions", "Microsoft"]
	},
	{
		FirstName: "Mellissa",
		LastName: "Mackeloor",
		Company: "Convoy Solutions",
		Email: "mm@convoy.com",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 11:22 AM",
		WatchList: false,
		AttendeeId: 1007,
		Sessions: [
			"a2q3A200301ysXYQAI - What you're missing about DevOps",
			"a2q3A330001ysAMQAY - Innovation : finding the next solution"
		]
	},
	{
		FirstName: "Helen",
		LastName: "Minkelly",
		Company: "Treehouse Networks",
		Email: "helenbellen@tn.com",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 11:39 AM",
		WatchList: false,
		AttendeeId: 1008
	},
	{
		FirstName: "David",
		LastName: "Mason",
		Company: "Adobe",
		Email: "dm@adobevisuals.com",
		Attended: true,
		FirstCheckInDateTime: "AUG 13, 6:13 AM",
		WatchList: false,
		AttendeeId: 1009,
		Sessions: ["a2q3A200301ysXYQAI - What you're missing about DevOps"]
	},
	{
		FirstName: "Ashley",
		LastName: "Wilson-Watkins",
		Company: "Facebook",
		Email: "aww@facebook.com",
		Attended: true,
		FirstCheckInDateTime: "AUG 03, 12:11 PM",
		WatchList: true,
		AttendeeId: 1010
	},
	{
		FirstName: "Thomas",
		LastName: "Moore-Stevens",
		Company: "Microsoft",
		Email: "tmoore@gmail.com",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 8:37 AM",
		WatchList: false,
		AttendeeId: 1011
	},
	{
		FirstName: "Brian",
		LastName: "Talmadge",
		Company: "Nordstrom",
		Email: "btall@nordstrom.com",
		Attended: false,
		FirstCheckInDateTime: "AUG 02, 9:59 AM",
		WatchList: true,
		AttendeeId: 1012,
		Sessions: ["a2q3A330001ysAMQAY - Innovation : finding the next solution"]
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

export const searchRegistrants = searchTerm => {
	const term = searchTerm.toUpperCase();
	return registrants.filter(reg => {
		return (
			reg.FirstName.toUpperCase().indexOf(term) > -1 ||
			reg.LastName.toUpperCase().indexOf(term) > -1 ||
			reg.Company.toUpperCase().indexOf(term) > -1
		);
	});
};

export const getWatchlistRegistrants = () => {
	return registrants.filter(reg => reg.WatchList);
};

export const getRegistrantData = () => {
	return registrantData;
};
