const success = {
  '0': {
    'created': 1495145560000,
    'id': '240095904',
    'name': 'Introduction to Command Line Tools with NodeJS with Max Beizer',
    'status': 'upcoming',
    'time': 1495753200000,
    'updated': 1495146782000,
    'utc_offset': -18000000,
    'waitlist_count': 0,
    'yes_rsvp_count': 12,
    'venue': {
      'id': 23959465,
      'name': 'Flatrock Coffee, Tea & More',
      'lat': 36.11458206176758,
      'lon': -86.74710083007812,
      'repinned': false,
      'address_1': '2640 Nolensville Pike Ste C',
      'city': 'Nashville',
      'country': 'US',
      'localized_country_name': 'USA',
      'phone': '(615) 678-6204'
    },
    'group': {
      'created': 1360593318000,
      'name': 'Nashville Software Beginners',
      'id': 7130232,
      'join_mode': 'open',
      'lat': 36.13999938964844,
      'lon': -86.73999786376953,
      'urlname': 'nashville-software-beginners',
      'who': 'programmers'
    },
    'link': 'https://www.meetup.com/nashville-software-beginners/events/240095904/',
    'description': 'description',
    'visibility': 'public'
  },
  '1': {
    'created': 1478903799000,
    'id': 'fmjqfmywgbkc',
    'name': 'May Meetup - Build your own Performance Analyzer/Chaos Monkey',
    'rsvp_limit': 20,
    'status': 'upcoming',
    'time': 1495751400000,
    'updated': 1492703432000,
    'utc_offset': -18000000,
    'waitlist_count': 0,
    'yes_rsvp_count': 9,
    'group': {
      'created': 1478903011000,
      'name': 'Nashville Gophers',
      'id': 21134448,
      'join_mode': 'open',
      'lat': 36.15999984741211,
      'lon': -86.79000091552734,
      'urlname': 'Nashville-Gophers',
      'who': 'Gophers'
    },
    'link': 'https://www.meetup.com/Nashville-Gophers/events/238581054/',
    'description': 'desc',
    'how_to_find_us': 'Venue TBD',
    'visibility': 'public'
  },
  '2': {
    'created': 1483656484000,
    'duration': 4500000,
    'id': '236709084',
    'name': 'Presentation Night: Hanami for the Rails Developer with Jason Charnes',
    'status': 'upcoming',
    'time': 1496791800000,
    'updated': 1494888646000,
    'utc_offset': -18000000,
    'waitlist_count': 0,
    'yes_rsvp_count': 10,
    'venue': {
      'id': 9617432,
      'name': 'Emma',
      'lat': 36.15717697143555,
      'lon': -86.76841735839844,
      'repinned': false,
      'address_1': '9 Lea Avenue',
      'city': 'Nashville',
      'country': 'us',
      'localized_country_name': 'USA',
      'zip': '37210',
      'state': 'TN'
    },
    'group': {
      'created': 1182624719000,
      'name': 'Nash.rb',
      'id': 535553,
      'join_mode': 'open',
      'lat': 36.13999938964844,
      'lon': -86.73999786376953,
      'urlname': 'nashrb',
      'who': 'Rubyists'
    },
    'link': 'https://www.meetup.com/nashrb/events/236709084/',
    'description': 'desc',
    'visibility': 'public'
  },
  '3': {
    'created': 1487475673000,
    'duration': 7200000,
    'id': '237819043',
    'name': 'Jonathan Creamer with Topic TBD - June Meeting',
    'status': 'upcoming',
    'time': 1496962800000,
    'updated': 1494435049000,
    'utc_offset': -18000000,
    'waitlist_count': 0,
    'yes_rsvp_count': 11,
    'venue': {
      'id': 24039022,
      'name': 'Emma Bistro',
      'lat': 36.156429290771484,
      'lon': -86.76874542236328,
      'repinned': false,
      'address_1': '9 Lea Ave',
      'city': 'Nashville',
      'country': 'us',
      'localized_country_name': 'USA',
      'zip': '',
      'state': 'TN'
    },
    'group': {
      'created': 1440031399000,
      'name': 'NashReact',
      'id': 18850080,
      'join_mode': 'open',
      'lat': 36.18000030517578,
      'lon': -86.73999786376953,
      'urlname': 'NashReact-Meetup',
      'who': 'Members'
    },
    'link': 'https://www.meetup.com/NashReact-Meetup/events/237819043/',
    'visibility': 'public'
  }
}
const fetchResults = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      resolve(success)
    )
  })
}

module.exports = { fetchResults }
