  // Distance Matrix API for calc'ing distances between points
  // distanceFromExchangePlace
  /* fetch('https://maps.googleapis.com/maps/api/distancematrix/json?
  key=KEY HERE
  &origins=53 State St, Boston, MA 02109, USA
  &destinations=42.357200,-71.054460')
  .then(res => res.json())
  .then(data => console.log(data))
*/
const venueData = [
  {
    address: '114 State St, Boston, MA 02109',
    category:['food'],
    gps:[42.359322, -71.054893],
    name:'Al\'s State Street Cafe',
    website: 'http://www.alscafes.com/',
    relatedLinks:[],
    favorite: true,
    rating: '3/5',
    image: 'als',
    distanceWalking: [
      {
          "distance" : {
            "text" : "00.1",
            "value" : 128
          },
          "duration" : {
            "text" : "2 mins",
            "value" : 101
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
          "distance" : {
            "text" : "00.5",
            "value" : 499
          },
          "duration" : {
            "text" : "3 mins",
            "value" : 157
          },
          "status" : "OK"
      }
    ],
  },
  {
    address: '2 Oliver St, Boston, MA 02109',
    category:['food'],
    gps:[42.357200, -71.054460],
    name:'Sabroso Taqueria',
    website: 'https://www.sabrosotaqueria.com/',
    relatedLinks:[],
    favorite: true,
    rating: '5/5',    
    image: 'sabroso',
    distanceWalking: [
        {
            "distance" : {
              "text" : "00.2",
              "value" : 165
            },
            "duration" : {
              "text" : "2 mins",
              "value" : 128
            },
            "status" : "OK"
        }
    ],
    distanceDriving: [
      {
          "distance" : {
            "text" : "00.8",
            "value" : 839
          },
          "duration" : {
            "text" : "3 mins",
            "value" : 192
          },
          "status" : "OK"
      }
    ],
  },
  {
    address: '306 Congress St, Boston, MA 02210',
    category:['tourism', 'functions'],
    gps:[42.351540, -71.050232],
    name:'Boston Tea Party Ships & Museum',
    website: 'https://www.bostonteapartyship.com/',
    relatedLinks:[],
    favorite: false,
    image: 'bteaParty',
    distanceWalking: [
      {
          "distance" : {
            "text" : "01.0",
            "value" : 983
          },
          "duration" : {
            "text" : "13 mins",
            "value" : 755
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
          "distance" : {
            "text" : "01.0",
            "value" : 983
          },
          "duration" : {
            "text" : "3 mins",
            "value" : 179
          },
          "status" : "OK"
      }
    ],
  },
  {
    address: '1 Central Wharf, Boston, MA 02110',
    category:['tourism', 'functions'],
    gps:[42.359169, -71.049538],
    name:'New England Aquarium',
    website: 'https://www.neaq.org/',
    relatedLinks:[],
    image: 'NEAcquarium',
    distanceWalking: [
      {
          "distance" : {
            "text" : "00.6",
            "value" : 618
          },
          "duration" : {
            "text" : "8 mins",
            "value" : 472
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
        "distance" : {
          "text" : "00.7",
          "value" : 652
        },
        "duration" : {
          "text" : "4 mins",
          "value" : 235
        },
        "status" : "OK"
      }
    ],
  },
  {
    address: '148 State St, Boston, MA 02109',
    category:['food', 'functions'],
    gps:[42.359409, -71.054169],
    name:'The Ginger Man',
    website: 'http://gingerman-bos.com/',
    relatedLinks:[],
    favorite: true,
    rating: '4/5',     
    image: 'gingerman',
    distanceWalking: [
      {
          "distance" : {
            "text" : "00.2",
            "value" : 180
          },
          "duration" : {
            "text" : "2 mins",
            "value" : 138
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
          "distance" : {
            "text" : "00.5",
            "value" : 544
          },
          "duration" : {
            "text" : "3 mins",
            "value" : 176
          },
          "status" : "OK"
      }
    ],
  },
  {
    address: '967 Commonwealth Avenue, Boston, MA 02215',
    category:['entertainment', 'functions'],
    gps:[42.352032, -71.119408],
    name:'Paradise Rock Club',
    website: 'https://crossroadspresents.com/pages/paradise-rock-club',
    relatedLinks:['https://www.boston.com/things-to-do/princess-nokia-paradise-rock-club-boston-october-27/'],
    image: 'paradiseRockClub',
    distanceWalking: [
      {
          "distance" : {
            "text" : "05.6",
            "value" : 5622
          },
          "duration" : {
            "text" : "1 hour 12 mins",
            "value" : 4307
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
          "distance" : {
            "text" : "06.3",
            "value" : 6257
          },
          "duration" : {
            "text" : "14 mins",
            "value" : 861
          },
          "status" : "OK"
      }
    ],
  },
  {
    address: '1 Patriot Pl, Foxborough, MA 02035',
    category:['sports', 'functions'],
    gps:[42.093811, -71.265800],
    name:'Gillette Stadium',
    website: 'https://www.gillettestadium.com/',
    relatedLinks:['https://www.boston.com/things-to-do/revolution-ready-for-rapids-in-possible-mls-cup-preview/'],
    favorite: false,
    rating: '3/5',
    image: 'gillette',
    distanceWalking: [
      {
          "distance" : {
            "text" : "37.7",
            "value" : 37656
          },
          "duration" : {
            "text" : "7 hours 56 mins",
            "value" : 28585
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
        "distance" : {
          "text" : "44.4",
          "value" : 44431
        },
        "duration" : {
          "text" : "36 mins",
          "value" : 2130
        },
        "status" : "OK"
      }
    ],
  },
  {
    address: '284 Broadway, Cambridge, MA 02139',
    category:['food', 'brewery', 'functions'],
    gps:[42.367802, -71.097961],
    name:'Lamplighter Brewing Co.',
    website: 'https://lamplighterbrewing.com/',
    relatedLinks:['https://www.boston.com/things-to-do/fall-harvest-brewery-picnic-lamplighter-brewing-october-27/'],
    image: 'lamplighter',
    distanceWalking: [
      {
          "distance" : {
            "text" : "03.7",
            "value" : 3709
          },
          "duration" : {
            "text" : "49 mins",
            "value" : 2959
          },
          "status" : "OK"
      }
    ],
    distanceDriving: [
      {
        "distance" : {
            "text" : "03.7",
            "value" : 3709
        },
        "duration" : {
            "text" : "13 mins",
            "value" : 757
        },
        "status" : "OK"
      }
    ],
  },
]

export default venueData;